// GoHighLevel API Integration
interface GHLContactData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName?: string;
  source?: string;
  tags?: string[];
  customFields?: Record<string, string | number | boolean>;
}

interface GHLResponse {
  success: boolean;
  contactId?: string;
  error?: string;
}

export class GHLAPI {
  private apiKey: string;
  private locationId: string;
  private baseUrl: string;

  constructor() {
    // These will be set via environment variables
    this.apiKey = process.env.NEXT_PUBLIC_GHL_API_KEY || '';
    this.locationId = process.env.NEXT_PUBLIC_GHL_LOCATION_ID || '';
    this.baseUrl = 'https://services.leadconnectorhq.com';
  }

  async createContact(contactData: GHLContactData): Promise<GHLResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/contacts/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
          'Version': '2021-07-28'
        },
        body: JSON.stringify({
          locationId: this.locationId,
          firstName: contactData.firstName,
          lastName: contactData.lastName,
          email: contactData.email,
          phone: contactData.phone,
          companyName: contactData.companyName || '',
          source: contactData.source || 'Trademate Website',
          tags: contactData.tags || ['website-lead'],
          customFields: contactData.customFields || {}
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create contact');
      }

      const data = await response.json();
      return {
        success: true,
        contactId: data.contact?.id
      };
    } catch (error) {
      console.error('GHL API Error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  async triggerWorkflow(contactId: string, workflowId: string): Promise<GHLResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/workflows/${workflowId}/contacts/${contactId}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
          'Version': '2021-07-28'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to trigger workflow');
      }

      return { success: true };
    } catch (error) {
      console.error('GHL Workflow Error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }
}

export const ghlAPI = new GHLAPI();
