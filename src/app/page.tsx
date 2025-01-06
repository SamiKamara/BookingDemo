"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-white min-h-screen">
      <div className="flex flex-col items-center mt-24">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={256}
          height={256}
          className="mb-12 object-contain"
        />

        {/* Suomenkielinen selitys */}
        <p className="text-lg text-gray-700 text-center mx-5 md:mx-0 max-w-md mb-8">
          Tämä on yksinkertainen Next.js + TypeScript -projekti, joka esittelee,
          miten Setmore-widget voidaan sisällyttää sivulle iframen avulla.
        </p>
      </div>

      {/* Iframe: Setmore-widget */}
      <div className="mt-8 p-0 w-full max-w-xl">
        <iframe
          src="https://booking.setmore.com/scheduleappointment/8283bf7b-0a6b-4ae0-bfa7-46196c8b375f"
          width="100%"
          height="500"
          style={{
            border: "2px solid #ffc0cb",
            borderRadius: "4px",
          }}
          title="Setmore Booking Widget"
        ></iframe>
      </div>

      {/* Englanninkielinen selitys widgetin alla */}
      <div className="flex flex-col items-center mt-8">
        <p className="text-lg text-gray-700 text-center mx-5 md:mx-0 max-w-md">
          This is a simple Next.js + TypeScript project demonstrating how to
          embed a Setmore widget with an iframe. The widget is displayed in
          Finnish to showcase it for a specific audience.
        </p>
      </div>
    </div>
  );
}
