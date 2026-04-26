import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Log the submission (in production, save to database or email service)
    console.log('[Contact Form Submission]', { name, email, message, timestamp: new Date() });

    // Return success response
    return NextResponse.json(
      { 
        message: 'Thank you for your message! I will get back to you soon.',
        success: true 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process your message' },
      { status: 500 }
    );
  }
}
