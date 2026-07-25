import { Phone, MessageCircle } from "lucide-react";

export function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918240384694"
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex items-center justify-center
          w-14 h-14 rounded-full
          bg-green-700 text-white
          shadow-lg
          hover:scale-110
          transition-transform duration-300
        "
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>


      {/* Call Button */}
      <a
        href="tel:+918240384694"
        className="
          flex items-center justify-center
          w-14 h-14 rounded-full
          bg-gold text-navy-deep
          shadow-lg
          hover:scale-110
          transition-transform duration-300
        "
        aria-label="Call Now"
      >
        <Phone size={28} />
      </a>

    </div>
  );
}