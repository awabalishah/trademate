import { NextRequest, NextResponse } from 'next/server';
import { ghlAPI } from '@/lib/ghl-api';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.fullName || !body.email) {
      return NextResponse.json(
        { success: false, error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Split full name into first and last name
    const nameParts = body.fullName.trim().split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ') || '';

    // Prepare contact data for GHL
    const contactData = {
      firstName,
      lastName,
      email: body.email,
      phone: body.phone || '',
      companyName: body.company || '',
      source: 'Trademate Website Contact Form',
      tags: ['website-lead', body.trade ? `trade-${body.trade.toLowerCase()}` : ''],
      customFields: {
        trade: body.trade || '',
        service: body.service || '',
        message: body.message || ''
      }
    };

    // Create contact in GHL
    const ghlResult = await ghlAPI.createContact(contactData);

    if (!ghlResult.success) {
      console.error('GHL Error:', ghlResult.error);
      // Still return success to user, but log the error
      // You can also send to a fallback service like EmailJS
    }

    // Trigger workflow if contact was created successfully and workflow ID is provided
    if (ghlResult.success && ghlResult.contactId && process.env.GHL_WORKFLOW_ID) {
      await ghlAPI.triggerWorkflow(ghlResult.contactId, process.env.GHL_WORKFLOW_ID);
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you for your interest! We\'ll get back to you within 24 hours.',
      contactId: ghlResult.contactId
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
