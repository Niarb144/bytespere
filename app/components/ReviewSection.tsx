"use client";

import { useState } from "react";
import Image from "next/image";

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  time: string;
  message: string;
}

const allReviews: Review[] = [
  {
    id: 1,
    name: "Sherry Derrick",
    avatar: "/avatars/a1.png",
    rating: 5,
    time: "5 days ago",
    message:
      "This company, System Protection Partners is the best of the best. Our office has been consistently supported with great service.",
  },
  {
    id: 2,
    name: "Luis Perez",
    avatar: "/avatars/a2.png",
    rating: 5,
    time: "2 months ago",
    message:
      "We've been working with System Protection Partners since 2014. Amazing service over the years!",
  },
  {
    id: 3,
    name: "David Hart",
    avatar: "/avatars/a3.png",
    rating: 5,
    time: "3 months ago",
    message:
      "Always friendly and helpful. Been a client forever and extremely satisfied.",
  },
  {
    id: 4,
    name: "Misty Danielson",
    avatar: "/avatars/a4.png",
    rating: 5,
    time: "4 months ago",
    message:
      "Very helpful as always! Fixed issues quickly and professionally. Highly recommend SPP.",
  },
  // Add more reviews here if needed
];

export default function ReviewSection() {
  const [visibleCount, setVisibleCount] = useState(4);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const visibleReviews = allReviews.slice(0, visibleCount);

  return (
    <section className="py-16 bg-gray-50">
      {/* TITLE */}
      <h2 className="text-left text-3xl md:text-4xl font-bold mb-10 text-white bg-blue-600 py-6 px-4">
        Dallas IT Services & IT Support Reviews
      </h2>

      {/* GOOGLE REVIEWS HEADER */}
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6 mb-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/images/google-icon.png" width={40} height={40} alt="google" />
            <div>
              <p className="text-lg font-semibold">Google Reviews</p>
              <p className="text-xl font-bold">5.0 ⭐⭐⭐⭐⭐</p>
            </div>
          </div>

          <a
            href="#"
            className="mt-4 md:mt-0 bg-[#007bcb] text-white px-5 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Review us on Google
          </a>
        </div>
      </div>

      {/* REVIEW CARDS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleReviews.map((review) => (
          <div
            key={review.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src={review.avatar}
                width={50}
                height={50}
                alt={review.name}
                className="rounded-full border"
              />
              <div>
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm text-gray-500">{review.time}</p>
              </div>
            </div>

            <div className="flex text-yellow-400 mb-3">
              {"⭐".repeat(review.rating)}
            </div>

            <p className="text-gray-700 line-clamp-4">{review.message}</p>

            <button className="text-[#007bcb] font-semibold mt-3 hover:underline">
              Read more
            </button>
          </div>
        ))}
      </div>

      {/* LOAD MORE BUTTON */}
      {visibleCount < allReviews.length && (
        <div className="text-center mt-10">
          <button
            onClick={loadMore}
            className="px-6 py-3 bg-[#007bcb] text-white rounded-md hover:bg-blue-600 transition"
          >
            Load More Reviews
          </button>
        </div>
      )}
    </section>
  );
}
