'use server'

import { SignupFormSchema } from '@/app/auth/definitions';
import {createSession} from '@/app/auth/session';
import {db} from '@/drizzle/db';
import {users} from '@/drizzle/schema';
import bcrypt from 'bcrypt';

export async function signup(state, formData){
    //1. validate the form data

    const validationResult = SignupFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password')
    })

    if(!validationResult.success){
        return {
            errors: validationResult.error.flatten().fieldErrors,
        }
    }

    const { name, email, password } = validationResult.data;


    //2. create the user
    const hashedPassword = await bcrypt.hash(password, 10);

    const data = await db
    .insert(users)
    .values({name,email, password: hashedPassword})
    .returning({id: users.id})

    const user = data[0];

    //3. create the session
    await createSession(user.id);
}