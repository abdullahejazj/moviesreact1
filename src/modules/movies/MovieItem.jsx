import React from "react";
import { Link } from "react-router-dom";

import { imageApi } from "../../api";
import { handleScrollToTop } from "../../utils";

// ----------------------------------------------------------------------

export default function MovieItem({ item, category }) {
  const background = imageApi.w500Image(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );
  const path =
    category === "movie" ? `/movie/${item.id}/play` : `/tv/${item.id}/play`;

  const pathInfo =
    category === "movie"
      ? `/movie/${item.id}/${item.title}`
      : `/tv/${item.id}/${item.name}`;

  return (
    <Link to={pathInfo} onClick={handleScrollToTop}>
      <div className="bg-black relative movie__item h-380 bg-cover bg-center bg-no-repeat group duration-200 my-3 mx-3 shadow-lg hover:shadow-lg border-l-0 hover:border-l-4 border-red-600 overflow-hidden rounded-md">
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            src={imageApi.w500Image(item.poster_path)}
            className="h-380 w-auto object-cover my-auto rounded-md shadow-lg w-full"
            alt=""
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full overlay overlay-" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="text-gray-300 block mx-auto h-full p-5">
            <h3 className="line-2 text-xl hover:text-gray-400 duration-200">
              {item.title || item.name}
            </h3>

            <div className="text-sm line-2 space-x-2">
              <span>{item.vote_average.toFixed(1)}/10</span>
              <span>&bull;</span>
              <span>
                {item.release_date
                  ? item.release_date.slice(0, 4)
                  : item.first_air_date
                  ? item.first_air_date.slice(0, 4)
                  : ""}
              </span>
            </div>
            <div className="absolute top-40 left-5">
              <Link
                to={path}
                className="flex items-center px-3 py-2 bg-red-600  font-semibold tracking-wider uppercase text-sm btn__primary space-x-1 rounded overflow-hidden"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="fill-current text-gray-300 "
                >
                  <path d="M7 6v12l10-6z"></path>
                </svg>
                <span className="pt-0.5">Play now</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
