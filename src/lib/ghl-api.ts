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
    // Using the v2 API endpoint
    this.baseUrl = 'https://rest.gohighlevel.com/v1';
  }

  async createContact(contactData: GHLContactData): Promise<GHLResponse> {
    try {
      // Validate credentials
      if (!this.apiKey) {
        throw new Error('GHL API Key is not configured. Please set NEXT_PUBLIC_GHL_API_KEY in .env.local');
      }
      if (!this.locationId) {
        throw new Error('GHL Location ID is not configured. Please set NEXT_PUBLIC_GHL_LOCATION_ID in .env.local');
      }

      const payload = {
        locationId: this.locationId,
        firstName: contactData.firstName,
        lastName: contactData.lastName,
        email: contactData.email,
        phone: contactData.phone,
        companyName: contactData.companyName || '',
        source: contactData.source || 'Trademate Website',
        tags: contactData.tags || ['website-lead'],
        customFields: {
          // Map exactly to your GHL custom fields
          'select_service_required': contactData.customFields?.service || '',
          'tell_us_about_your_business_needs': contactData.customFields?.message || '',
          // Keep additional mappings for compatibility
          'trade': contactData.customFields?.trade || '',
          'service': contactData.customFields?.service || '',
          'message': contactData.customFields?.message || ''
        }
      };

      console.log('GHL API Request:', {
        url: `${this.baseUrl}/contacts/`,
        locationId: this.locationId,
        apiKeyLength: this.apiKey.length,
        payload
      });

      // Try without trailing slash in URL
      const response = await fetch(`${this.baseUrl}/contacts`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      console.log('GHL API Response Status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('GHL API Error Response:', errorText);
        let errorData;
        try {
          errorData = JSON.parse(errorText);
        } catch {
          errorData = { message: errorText };
        }
        throw new Error(errorData.message || `HTTP ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      console.log('GHL API Success Response:', data);
      
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
