import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "motion/react";

export function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/918240384694"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="
          relative flex items-center justify-center
          w-16 h-16 rounded-full
          bg-gradient-to-br from-[#25D366] to-[#128C7E]
          text-white
          shadow-[0_0_25px_rgba(37,211,102,0.5)]
          hover:shadow-[0_0_35px_rgba(37,211,102,0.8)]
          transition-all duration-300
        "
      >
        {/* Pulse Ring */}
        <span className="
          absolute inset-0 rounded-full
          bg-green-400 opacity-30
          animate-ping
        " />

        <FaWhatsapp size={34} className="relative z-10" />
      </motion.a>


      {/* Call Button */}
      <motion.a
        href="tel:+918240384694"
        aria-label="Call Now"
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="
          relative flex items-center justify-center
          w-16 h-16 rounded-full
          bg-gradient-to-br from-[#D4AF37] via-[#F5D77A] to-[#A67C00]
          text-[#0B132B]
          shadow-[0_0_25px_rgba(212,175,55,0.5)]
          hover:shadow-[0_0_35px_rgba(212,175,55,0.8)]
          transition-all duration-300
        "
      >
        {/* Pulse Ring */}
        <span className="
          absolute inset-0 rounded-full
          bg-yellow-300 opacity-30
          animate-ping
        " />

        <Phone size={30} className="relative z-10" />
      </motion.a>

    </div>
  );
}