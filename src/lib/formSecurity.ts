import { z } from "zod";

// Strict input schemas — trim, length limits, regex restrictions
export const nameSchema = z
  .string()
  .trim()
  .min(2, "Name must be at least 2 characters")
  .max(80, "Name is too long")
  .regex(/^[\p{L}\p{M}\s.''-]+$/u, "Name contains invalid characters");

export const phoneSchema = z
  .string()
  .trim()
  .min(7, "Phone number is too short")
  .max(20, "Phone number is too long")
  .regex(/^[+\d][\d\s().-]{6,19}$/, "Invalid phone number");

export const emailSchema = z
  .string()
  .trim()
  .max(254, "Email is too long")
  .email("Invalid email address")
  .optional()
  .or(z.literal(""));

export const consultationSchema = z.object({
  name: nameSchema,
  phone: phoneSchema,
  email: emailSchema,
  // Honeypot — must be empty
  website: z.string().max(0, "Bot detected").optional().or(z.literal("")),
});

export type ConsultationInput = z.infer<typeof consultationSchema>;

/**
 * Strip control chars, HTML brackets, and common injection vectors from a
 * free-text input before sending it anywhere (logs, APIs, URLs).
 */
export function sanitizeText(input: string): string {
  return input
    .replace(/[\u0000-\u001F\u007F]/g, "") // control chars
    .replace(/[<>]/g, "") // HTML brackets
    .replace(/javascript:/gi, "")
    .replace(/data:/gi, "")
    .replace(/on\w+\s*=/gi, "")
    .trim()
    .slice(0, 500);
}

/**
 * Detect obvious spam patterns — many URLs, BBCode, CJK link spam, repeated chars.
 */
export function looksLikeSpam(text: string): boolean {
  if (!text) return false;
  const urlMatches = text.match(/https?:\/\/|www\.|\.(com|ru|cn|xyz|top|click)/gi);
  if (urlMatches && urlMatches.length >= 2) return true;
  if (/\[url=|\[\/url\]|<a\s+href/i.test(text)) return true;
  if (/(.)\1{8,}/.test(text)) return true; // repeated char spam
  return false;
}

/**
 * Simple per-browser submission throttle backed by sessionStorage.
 * Returns ms remaining if blocked, otherwise 0.
 */
export function throttleCheck(key: string, minIntervalMs = 30_000): number {
  try {
    const last = Number(sessionStorage.getItem(key) || 0);
    const now = Date.now();
    const remaining = last + minIntervalMs - now;
    if (remaining > 0) return remaining;
    sessionStorage.setItem(key, String(now));
    return 0;
  } catch {
    return 0;
  }
}
