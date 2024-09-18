"use client";

import React from "react";

const VideoGrid = () => {
  return (
    <div className="max-w-5xl mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Video 1 */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-bold text-center text-blue-700">
            Panduan Admisi/Pendaftaran Mahasiswa Baru UT
          </h2>
          <div className="mt-4">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/vruEmqsAV6o"
              title="Panduan Admisi"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Video 2 */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-bold text-center text-blue-700">
            Panduan Tutorial Online
          </h2>
          <div className="mt-4">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/IaTT-qg9YA4"
              title="Panduan Tutorial Online"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
};

export default VideoGrid;
