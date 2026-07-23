export const fallbackWhatsapp = {
  value: "+91 8668473798",
  href: "https://wa.me/918668473798",
};

export function getWhatsappHref(phone) {
  const digits = String(phone ?? "").replace(/\D/g, "");

  return digits ? `https://wa.me/${digits}` : fallbackWhatsapp.href;
}
