"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-soft-clay to-stone-600 text-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.6 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="flex flex-row justify-between w-full">
          <Image
            src="/assets/sun.png"
            alt="Vine Frame"
            height={500}
            width={100}
            className="opacity-80 animate-breathe-slow"
          />
          <Image
            src="/assets/moon.png"
            alt="Vine Frame"
            height={500}
            width={100}
            className="opacity-80 justify-end animate-breathe-slow"
          />
        </div>
        <h1 className="text-5xl font-sketch text-accent-dark mb-4">404</h1>
        <p className="text-lg text-pencil-gray/90 mb-6">
          The page you tried to access does not exist or can not be accessed
          currently.
        </p>
        <Link
          href="/"
          className="bg-gradient-to-r from-soft-clay to-stone-500 text-black px-6 py-2 rounded-lg shadow-md hover:scale-105 transition-transform"
        >
          Return Home
        </Link>
        <div className="flex justify-center mt-8">
          <Image
            src="/assets/person2.png"
            alt="Person"
            height={500}
            width={100}
            className="opacity-80 animate-breathe-slow -mt-7"
          />
        </div>
      </motion.div>
    </div>
  );
}
