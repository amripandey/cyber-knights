'use server'

import { LoginFormSchema } from '@/app/auth/definitions';
import { createSession } from '@/app/auth/session';
import { db } from '@/drizzle/db';
import { users } from '@/drizzle/schema';
import bcrypt from 'bcrypt';
import { eq } from 'drizzle-orm';


export async function login(state, formData) {

    //1. validate the form data
    const validationResult = LoginFormSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password')
    })

    if (!validationResult.success) {
        return {
            errors: validationResult.error.flatten().fieldErrors,
        }
    }

    const { email, password } = validationResult.data;

    // 2. Query the database for the user with the given email
    const userResult = await db
        .select({
            id: users.id,
            name: users.name,
            email: users.email,
            password: users.password
        })
        .from(users)
        .where(eq(users.email, email))
        .limit(1);

    const user = userResult[0]; // Extract the first user

    if (!user) {
        return {
            errors: { email: ['Invalid email or password'] },
        };
    }

    // 3. Verify the password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        return {
            errors: { email: ['Invalid email or password'] },
        };
    }

    // 4. Create the session
    await createSession(user.id);
}