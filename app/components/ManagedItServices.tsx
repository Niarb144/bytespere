"use client";

import Image from "next/image";

export default function ManagedItServices() {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT IMAGE */}
        <div className="relative w-full h-[200px] lg:h-[350px] overflow-hidden shadow-lg">
          <Image
            src="/images/img7.jpg"
            alt="System hacked warning on laptop"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Managed IT Services In Dallas, TX
          </h2>

          <p className="text-gray-600 leading-relaxed">
            SPPIT offers top quality and affordable Managed IT Services in Dallas,
            Texas. From local onsite support to{" "}
            <span className="text-blue-600 font-medium cursor-pointer">remote IT</span>{" "}
            internationally, you can count on <span className="text-blue-600 font-medium">SPPIT</span> to
            help your business stay ahead of the fast paced, and ever-changing IT
            landscape.
          </p>

          <p className="text-gray-600 leading-relaxed">
            As your managed IT service providers, we make your{" "}
            <span className="text-blue-600 font-medium cursor-pointer">businesses</span> IT
            simple. No matter the complexity of your IT infrastructure,{" "}
            <span className="text-blue-600 font-medium">SPP IT</span> has the know-how and the
            tools to make sure all your IT is working properly and efficiently so
            that your business may operate at its optimal potential.
          </p>

          {/* CTA BUTTON */}
          <div>
            <button className="px-8 py-4 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition font-medium tracking-wide shadow-md">
              VIEW MANAGED IT SERVICES
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT IMAGE */}
        <div className="relative w-full h-[200px] lg:h-[350px] rounded-md overflow-hidden shadow-lg">
          <Image
            src="/images/img7.jpg" // replace with actual image path
            alt="System hacked warning on laptop"
            fill
            className="object-cover h-[200px]"
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Dallas IT Services With Remote Support World Wide

          </h2>

          <p className="text-gray-600 leading-relaxed">
            System Protection Partners is a leading remote IT support company based in the Dallas, Ft Worth
             Metroplex that is known for its advanced and comprehensive range of remote IT{" "}
            <span className="text-blue-600 font-medium cursor-pointer">helpdesk</span>{" "}
            and support services. With a steadfast commitment to delivering cutting-edge solutions,
             we have positioned ourselves as a trusted partner for businesses both internationally
              and locally in the Dallas, FT Worth Metroplex seeking efficient and
               <span className="text-blue-600 font-medium">reliable remote IT assistance</span> Our
                team of skilled Dallas IT professionals excel in providing remote support across
                 diverse IT domains, ensuring that clients receive prompt and effective solutions
                  to their technical challenges.
          </p>

          {/* CTA BUTTON */}
          <div>
            <button className="px-8 py-4 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition font-medium tracking-wide shadow-md">
              VIEW REMOTE IT SERVICES
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT IMAGE */}
        <div className="relative w-full h-[200px] lg:h-[350px] rounded-md overflow-hidden shadow-lg">
          <Image
            src="/images/img7.jpg" // replace with actual image path
            alt="System hacked warning on laptop"
            fill
            className="object-cover h-[200px]"
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Data Backup & Recovery Services
          </h2>

          <p className="text-gray-600 leading-relaxed">
           Get a State-of-the-Art Data Backup and Disaster Recovery Solution that “bullet proofs” your
            data from System Protection Partners. Our data backup processes allow for real-time backups-as
             frequent as every 15 minutes, offering offsite storage at an affordable cost with speedy disaster
              recovery process. This  included data protection, helps with risk mitigation, increases operational
               efficiency and helps with cost savings in the event of a data loss. Still not convinced? Read more
                here about why your company needs a data backup and disaster recovery plan{" "}
            <span className="text-blue-600 font-medium cursor-pointer">here</span>{" "}
          </p>

          {/* CTA BUTTON */}
          <div>
            <button className="px-8 py-4 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition font-medium tracking-wide shadow-md">
              VIEW DATA BACKUP SERVICES
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-4">
        
        {/* LEFT IMAGE */}
        <div className="relative w-full h-[200px] lg:h-[350px] rounded-md overflow-hidden shadow-lg">
          <Image
            src="/images/img7.jpg" // replace with actual image path
            alt="System hacked warning on laptop"
            fill
            className="object-cover h-[200px]"
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Office 365 Managed Services
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Get a State-of-the-Art Data Backup and Disaster Recovery Solution that “bullet proofs” your data from
             System Protection Partners. Our data backup processes allow for real-time backups-as frequent as
              every 15 minutes, offering offsite storage at an affordable cost with speedy disaster recovery
               process. This  included data protection, helps with risk mitigation, increases operational
                efficiency and helps with cost savings in the event of a data loss. Still not convinced? Read more
                 here about why your company needs a data backup and disaster recovery plan{" "}
            <span className="text-blue-600 font-medium cursor-pointer">here</span>{" "}
            
          </p>

          {/* CTA BUTTON */}
          <div>
            <button className="px-8 py-4 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition font-medium tracking-wide shadow-md">
              OFFICE 365 MANAGED SERVICES
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT IMAGE */}
        <div className="relative w-full h-[200px] lg:h-[350px] rounded-md overflow-hidden shadow-lg">
          <Image
            src="/images/img7.jpg" // replace with actual image path
            alt="System hacked warning on laptop"
            fill
            className="object-cover h-[200px]"
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            IT Consulting Services
          </h2>

          <p className="text-gray-600 leading-relaxed">
            With the landscape of today’s business changing ever so rapidly, technology is serving as the cornerstone
             of success. For businesses both large and small, staying competitive and adapting to this
              ever-changing landscape requires investing in IT, more specifically, IT consulting. From
               streamlining operations to fostering innovation and ensuring robust cybersecurity measures,
                a good{" "}
            <span className="text-blue-600 font-medium cursor-pointer">IT Consulting Company</span>{" "}
            will help to keep your business ahead.
          </p>

          {/* CTA BUTTON */}
          <div>
            <button className="px-8 py-4 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition font-medium tracking-wide shadow-md">
              VIEW IT CONSULTING INFO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
