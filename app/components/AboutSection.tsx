"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
  
        {/* LEFT IMAGES */}
        <div className="space-y-4">
            {/* Top Large Image */}
            <div className="w-full h-72 rounded-md overflow-hidden">
            <img
                src="/images/img4.jpg"
                alt="Support Agent"
                className="w-full h-full object-cover"
            />
            </div>

            {/* Bottom Row – 3 Smaller Images */}
            <div className="grid grid-cols-3 gap-4">
            <div className="h-36 rounded-md overflow-hidden">
                <img src="/images/img1.jpg" className="w-full h-full object-cover" />
            </div>
            <div className="h-36 rounded-md overflow-hidden">
                <img src="/images/img2.jpg" className="w-full h-full object-cover" />
            </div>
            <div className="h-36 rounded-md overflow-hidden">
                <img src="/images/img3.jpg" className="w-full h-full object-cover" />
            </div>
            </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
            <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-6">
            Dallas IT Services & Beyond
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
            System Protection Partners’ purpose is to provide clients with quality
            <span className="text-blue-600 font-semibold"> IT services </span>
            in Dallas and across the nation at a competitive price. This can be
            accomplished with a good business plan and smart recruiting. Our
            “mission”, however, is to do this with compassion and concern for our
            <span className="text-blue-600 font-semibold"> clients’ </span> time,
            well-being and future success.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
            This mission can only be carried out when your business IT management is
            fully invested in creating the environment from the top down for the smart
            folks to spend the necessary time listening to the clients, satisfying
            their needs, and/or fixing their problems.
            </p>

            <p className="text-gray-600 leading-relaxed">
            We’ve experienced the evolution of
            <span className="text-blue-600 font-semibold"> computers </span> in
            business use in real time the last 3+ decades, providing a perspective in
            customer service that is of great value to our clients.
            <a href="/contact" className="text-blue-600 font-semibold hover:underline ml-1">
                Give us a call
            </a>{" "}
            today and let us show you how we can help with your present and future
            needs.
            </p>
        </div>

    </section>
  );  
}