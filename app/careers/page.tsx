"use client";

export default function CareersPage() {
    return (
        <main className="max-w-7xl mx-auto px-6 py-20">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Careers at Bytespere</h1>
            <p className="text-gray-600 mb-6">
                At Bytespere, we are always looking for talented individuals to join our team. We offer a dynamic work environment, opportunities for growth, and the chance to work on exciting projects in the IT services industry.  
            </p>
            <p className="text-gray-600 mb-6">
                If you are passionate about technology and want to be part of a forward-thinking company, we would love to hear from you. Please check our current job openings below and apply to join our team.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Current Job Openings</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6">
                <li>IT Support Specialist</li>
                <li>Network Engineer</li>
                <li>Software Developer</li>
                <li>Project Manager</li>
            </ul>
            <p className="text-gray-600">
                To apply, please send your resume and cover letter to <a href="mailto:info@bytespere.co.ke" className="text-blue-600 underline">
                    info@bytespere.co.ke
                </a>
            </p>
        </main>
    );
}