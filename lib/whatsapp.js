// lib/whatsapp.js

import { BRAND } from "@/data/brand";

export const waLink = (
  text = "Hi Aryan, I'd like a free homepage prototype for my business."
) => {
  return `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`;
};