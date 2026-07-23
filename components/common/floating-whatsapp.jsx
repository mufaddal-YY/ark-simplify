import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import {fallbackWhatsapp, getWhatsappHref} from "@/lib/whatsapp";

export default function FloatingWhatsapp({contact, phone}) {
  const method =
    contact?.contactMethods?.find((item) => item.type === "whatsapp") ??
    fallbackWhatsapp;
  const number = phone ?? method.value ?? fallbackWhatsapp.value;
  const href = phone ? getWhatsappHref(phone) : method.href ?? getWhatsappHref(number);
  const label = number
    ? `Chat on WhatsApp at ${number}`
    : "Chat on WhatsApp";

  return (
    <Link
      href={href}
      aria-label={label}
      title={label}
      target="_blank"
      rel="noreferrer"
      className="fixed right-4 bottom-24 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_42px_rgba(37,211,102,0.34)] ring-1 ring-white/35 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1ebe5d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] sm:right-6 sm:bottom-24"
    >
      <FaWhatsapp className="h-7 w-7" />
    </Link>
  );
}
