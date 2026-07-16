"use server";

import { contactFormSchema, type ContactFormInput } from "@/lib/validations";
import { resend, EMAIL_FROM } from "@/lib/resend";
import { siteConfig } from "@/lib/constants";

export interface ContactActionResult {
  success: boolean;
  message: string;
}

export async function submitContactForm(input: ContactFormInput): Promise<ContactActionResult> {
  const parsed = contactFormSchema.safeParse(input);

  if (!parsed.success) {
    return { success: false, message: "Please check the form for errors and try again." };
  }

  const { name, email, subject, message, phone } = parsed.data;

  if (resend) {
    try {
      await resend.emails.send({
        from: EMAIL_FROM,
        to: siteConfig.supportEmail,
        replyTo: email,
        subject: `[Contact Form] ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\n\n${message}`,
      });
    } catch {
      return {
        success: false,
        message: "We couldn't send your message right now. Please try again shortly.",
      };
    }
  }

  return {
    success: true,
    message: "Thanks for reaching out! Our team will get back to you within 24 hours.",
  };
}
