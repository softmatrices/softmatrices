// Add NodeJS process.env types for TypeScript support
/// <reference types="node" />

export const emailConfig = {
  serviceId: process.env.EMAILJS_SERVICE_ID || '', 
  templateId: process.env.EMAILJS_TEMPLATE_ID || '', 
  publicKey: process.env.EMAILJS_PUBLIC_KEY || ''
};

