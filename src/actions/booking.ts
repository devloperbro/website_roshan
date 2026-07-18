"use server";

import { createClient } from "@supabase/supabase-js";
import { resend, EMAIL_FROM } from "@/lib/resend";
import { siteConfig } from "@/lib/constants";
import type { AddressInput, PackageDetailsInput, ReceiverDetailsInput } from "@/lib/validations";

interface ConfirmBookingInput {
  trackingId: string;
  userId: string | null;
  pickup: Partial<AddressInput>;
  delivery: Partial<AddressInput>;
  packageDetails: Partial<PackageDetailsInput>;
  receiver: Partial<ReceiverDetailsInput>;
  amount: number;
}

// Use service role on server to bypass RLS for inserts
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function confirmBookingAction(input: ConfirmBookingInput) {
  const { trackingId, userId, pickup, delivery, packageDetails, amount } = input;

  // Save shipment to Supabase
  if (userId) {
    await supabaseAdmin.from("shipments").insert({
      user_id: userId,
      tracking_number: trackingId,
      origin: `${pickup.city}, ${pickup.state}`,
      destination: `${delivery.city}, ${delivery.state}`,
      status: "Booked",
      amount,
      latitude: null,
      longitude: null,
    });
  }

  // Send admin notification email
  if (resend) {
    await resend.emails.send({
      from: EMAIL_FROM,
      to: siteConfig.supportEmail,
      subject: `New Booking: ${trackingId}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#0F4C81">New Shipment Booked — ${trackingId}</h2>

          <table style="width:100%;border-collapse:collapse;margin-top:16px">
            <tr>
              <td style="padding:8px;background:#f8fafc;font-weight:600;width:160px">Tracking ID</td>
              <td style="padding:8px;font-family:monospace">${trackingId}</td>
            </tr>
            <tr>
              <td style="padding:8px;background:#f8fafc;font-weight:600">Amount</td>
              <td style="padding:8px">₹${amount.toLocaleString("en-IN")}</td>
            </tr>
            <tr>
              <td style="padding:8px;background:#f8fafc;font-weight:600">Service</td>
              <td style="padding:8px">${packageDetails.isExpress ? "Express Delivery" : "Standard Courier"}</td>
            </tr>
          </table>

          <h3 style="color:#1E88E5;margin-top:24px">Pickup</h3>
          <p style="margin:0">${input.pickup.fullName} · ${input.pickup.phone}</p>
          <p style="margin:4px 0;color:#64748b">
            ${input.pickup.addressLine1}${input.pickup.addressLine2 ? `, ${input.pickup.addressLine2}` : ""},
            ${input.pickup.city}, ${input.pickup.state} - ${input.pickup.pincode}
          </p>

          <h3 style="color:#1E88E5;margin-top:16px">Delivery</h3>
          <p style="margin:0">${input.delivery.fullName} · ${input.delivery.phone}</p>
          <p style="margin:4px 0;color:#64748b">
            ${input.delivery.addressLine1}${input.delivery.addressLine2 ? `, ${input.delivery.addressLine2}` : ""},
            ${input.delivery.city}, ${input.delivery.state} - ${input.delivery.pincode}
          </p>

          <h3 style="color:#1E88E5;margin-top:16px">Package</h3>
          <p style="margin:0;color:#64748b">
            Category: ${packageDetails.category} ·
            Weight: ${packageDetails.weightKg}kg ·
            Declared Value: ₹${(packageDetails.declaredValue ?? 0).toLocaleString("en-IN")} ·
            Fragile: ${packageDetails.isFragile ? "Yes" : "No"}
          </p>
          ${packageDetails.notes ? `<p style="margin:4px 0;color:#64748b">Notes: ${packageDetails.notes}</p>` : ""}

          <h3 style="color:#1E88E5;margin-top:16px">Receiver</h3>
          <p style="margin:0;color:#64748b">
            ${input.receiver.receiverName} · ${input.receiver.receiverPhone}
            ${input.receiver.receiverEmail ? ` · ${input.receiver.receiverEmail}` : ""}
          </p>
          ${input.receiver.deliveryInstructions ? `<p style="margin:4px 0;color:#64748b">Instructions: ${input.receiver.deliveryInstructions}</p>` : ""}

          <p style="margin-top:32px;color:#94a3b8;font-size:12px">
            ${siteConfig.name} · ${siteConfig.address}
          </p>
        </div>
      `,
    });
  }

  return { success: true };
}
