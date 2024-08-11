import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { users } from '@/lib/db/schema';
import jwt from 'jsonwebtoken'
import bcryptjs from 'bcryptjs'
import { cookies } from 'next/headers';
import { eq } from 'drizzle-orm';

type UserCred = {
  email: string,
  password: string
}

export async function POST(req: NextRequest) {
  const body: UserCred = await req.json();
  const { email, password } = body;
  console.log(body);
  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(password, salt);
  try {
    const existingUser = await db.select().from(users).where(eq(users.email , email));
    console.log("existingUser", existingUser);
    if (existingUser.length > 0) {
      return NextResponse.json({ message: 'User already exists' }, { status: 409 });
    }

    const UserToken = await db.insert(users).values({
        email: email,
        password: hashedPassword
    }).returning({
        insertedId: users.id, insertedEmail: users.email, password: users.password
    });
        return NextResponse.json({
      success: true,
      message: "Account has been created",
    });
    
  } catch (error: any) {
    console.error('Login error:', error.code, error.message);
    return NextResponse.json({ message: 'Login failed', error: error.message }, 
    { status: 401 }
    );
  }
}
