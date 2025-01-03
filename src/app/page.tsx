"use client";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <img
        src="/logo.svg"
        alt="Logo"
        className="w-64 h-64 mb-2 object-contain"
      />
      <p className="text-lg text-gray-700 text-center mx-5 md:mx-0 max-w-md mb-8">
        Tämä on placeholder, joka on tarkoitettu esittelemään osia sivusta, jotka eivät kuulu Setmore-widgetiin.
      </p>
      <script id="setmore_script" type="text/javascript" src="https://storage.googleapis.com/fullintegration-live/webComponentAppListing/Container/setmoreIframeLive.js"></script>
      <a
        href="https://booking.setmore.com/scheduleappointment/8283bf7b-0a6b-4ae0-bfa7-46196c8b375f"
        className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
        style={{ float: "none" }}
      >
        Varaa aika
      </a>
    </div>
  );
}
