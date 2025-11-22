"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {FaDesktop, FaServer, FaQuestionCircle } from 'react-icons/fa';
import { TbHospitalCircleFilled } from "react-icons/tb";

export default function ServiceSection() {
  return (
    <section className="w-full bg-[#0076C8] text-white py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center px-6">

        {/* Managed Services */}
            <div className="space-y-4 align-center">
            <FaDesktop className="fa-desktop text-5xl" />
            <h3 className="text-2xl font-bold">Managed Services</h3>
            <p className="text-sm leading-relaxed opacity-90">
                As a managed services provider, we believe IT should be simple and reliable. As systems grow more complex, ensuring they work properly has become time-consuming and expensive.
            </p>
            </div>

        {/* Hardware & Networking */}
            <div className="space-y-4">
            <i className="fa-solid fa-server text-5xl"><FaServer /></i>
            <h3 className="text-2xl font-bold">Hardware + Networking</h3>
            <p className="text-sm leading-relaxed opacity-90">
                We super-charge your business with a wide range of products and services, from hardware to networking and management systems — keeping you running smoothly.
            </p>
            </div>

            {/* Medical Software */}
            <div className="space-y-4">
            <i className="fa-solid fa-hospital text-5xl"><TbHospitalCircleFilled /></i>
            <h3 className="text-2xl font-bold">Medical Software</h3>
            <p className="text-sm leading-relaxed opacity-90">
                Medical practices need stable networks and uninterrupted EMR access. We ensure secure systems, scanning, printing, and all IT needs within your medical office.
            </p>
            </div>

            {/*  Help Desk */}
            <div className="space-y-4">
            <i className="fa-solid fa-circle-question text-5xl"><FaQuestionCircle /></i>
            <h3 className="text-2xl font-bold">Help Desk</h3>
            <p className="text-sm leading-relaxed opacity-90">
                Our Managed Services programs ensure clients receive the best support for their IT and computer networking needs with fast and reliable assistance.
            </p>
            </div>

        </div>
        </section>

    );
}