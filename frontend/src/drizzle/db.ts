import { drizzle } from "drizzle-orm/postgres-js";
import postgres from 'postgres';
import {users, NewUser} from '@/drizzle/schema';
import * as schema from './schema';

if (!process.env.DATABASE_URL) {
    throw new Error('PG_URL is not defined');
}

const client = postgres(process.env.DATABASE_URL);

export const db = drizzle(client, {schema});

export const insertUser = async (user: NewUser) => {
  return db.insert(users).values(user).returning();
};