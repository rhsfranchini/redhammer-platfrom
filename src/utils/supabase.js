// src/utils/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Quote Storage utility
export const QuoteStorage = {
  async saveQuote(userId, quoteData) {
    const payload = {
      user_id: userId,
      title: quoteData.title || `${quoteData.customerName} - ${quoteData.projectName}`,
      customer_name: quoteData.customerName,
      project_name: quoteData.projectName,
      template_name: quoteData.templateName || '',
      globals: quoteData.globals,
      margins: quoteData.margins,
      box_inputs: quoteData.boxInputs,
      flex_tasks: quoteData.flexTasks || {},
      visible_levels: quoteData.visibleLevels || [1, 2, 3],
      status: quoteData.status || 'Draft',
      version: quoteData.version || 1,
      is_template: quoteData.isTemplate || false
    };
    
    if (quoteData.id) {
      // Update existing
      return supabase
        .from('quotes')
        .update({ ...payload, updated_at: new Date().toISOString() })
        .eq('id', quoteData.id)
        .select()
        .single();
    } else {
      // Insert new
      return supabase
        .from('quotes')
        .insert(payload)
        .select()
        .single();
    }
  },

  async getQuotes(userId) {
    return supabase
      .from('quotes')
      .select('*')
      .eq('user_id', userId)
      .eq('is_template', false)
      .order('updated_at', { ascending: false });
  },

  async getTemplates(userId) {
    return supabase
      .from('quotes')
      .select('*')
      .eq('user_id', userId)
      .eq('is_template', true)
      .order('updated_at', { ascending: false });
  },

  async deleteQuote(quoteId) {
    return supabase
      .from('quotes')
      .delete()
      .eq('id', quoteId);
  }
};

// Customer Storage utility
export const CustomerStorage = {
  async getCustomers(userId) {
    return supabase
      .from('customers')
      .select('*')
      .eq('user_id', userId)
      .order('name');
  },

  async saveCustomer(userId, customer) {
    const payload = {
      user_id: userId,
      name: customer.name,
      industry: customer.industry,
      software: customer.software,
      annual_revenue: customer.annual_revenue,
      address: customer.address,
      city: customer.city,
      state: customer.state,
      zip: customer.zip,
      website: customer.website,
      notes: customer.notes,
      contacts: customer.contacts || []
    };

    if (customer.id && !customer.id.startsWith('cust_')) {
      return supabase
        .from('customers')
        .update({ ...payload, updated_at: new Date().toISOString() })
        .eq('id', customer.id)
        .select()
        .single();
    } else {
      return supabase
        .from('customers')
        .insert(payload)
        .select()
        .single();
    }
  },

  async deleteCustomer(customerId) {
    return supabase
      .from('customers')
      .delete()
      .eq('id', customerId);
  }
};

// Audit Log utility
export const AuditLog = {
  async log(userId, action, entityType, entityId, oldValue, newValue, description) {
    return supabase
      .from('audit_log')
      .insert({
        user_id: userId,
        action,
        entity_type: entityType,
        entity_id: entityId,
        old_value: oldValue,
        new_value: newValue,
        description
      });
  },

  async getLog(userId, limit = 100) {
    return supabase
      .from('audit_log')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(limit);
  }
};
