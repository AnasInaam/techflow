import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '../../../utils/mongodb';
import bcrypt from 'bcrypt';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
    }

    const { db } = await connectToDatabase();

    const user = await db.collection('users').findOne({ email });
    if (!user) {
      console.log('User not found:', email); // Log if user is not found
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Compare the entered password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log('Invalid password for user:', email); // Log invalid password attempts
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    return NextResponse.json({ 
      message: 'Login successful',
      user: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName
      }
    }, { status: 200 });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
