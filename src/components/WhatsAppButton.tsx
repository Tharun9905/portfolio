"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    const phoneNumber = "919652664259";
    const message = encodeURIComponent("Hi Tharun, I saw your portfolio and would like to chat!");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-[100] p-4 bg-green-500 text-white rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] transition-shadow flex items-center justify-center group"
        >
            <MessageCircle className="w-6 h-6" />

            {/* Tooltip */}
            <span className="absolute right-full mr-4 px-3 py-1 bg-white text-black text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
                Chat on WhatsApp
            </span>

            {/* Ping effect */}
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 -z-10"></span>
        </motion.a>
    );
}
