import React, { useEffect, useRef, useState } from "react";

export default function Video({ src, id }) {
  console.log("src: ", id);

  return (
    <>
      <div
        className="relative w-full duration-200 rounded-md overflow-hidden"
        style={{ paddingBottom: "55%" }}
      >
        <iframe
          title={src}
          src={`https://vidsrc.me/embed/${id}`}
          height="500px"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full z-10"
        />
      </div>
    </>
  );
}
