import React, { useState, useEffect } from "react";
import MovieItem from "./MovieItem";
import Preloader from "../../components/preloader";
import { tmdbApi, category, movieType, tvType } from "../../api";

export default function MovieList({ type, category: _category, title, id }) {
  const [movies, setMovies] = useState([]);
  const [preloader, setPreloader] = useState(true);
  console.log("movies", movies);

  useEffect(() => {
    const getList = async () => {
      let allResults = [];
      let currentPage = 1;
      const pageSize = 100; // Set the desired page size here

      try {
        while (allResults.length < pageSize) {
          let response = null;
          const params = {
            page: currentPage,
          };

          if (type !== "similar") {
            switch (_category) {
              case category.movie:
                if (type === movieType.trending) {
                  response = await tmdbApi.getTrendingList(_category, {
                    params,
                  });
                } else {
                  response = await tmdbApi.getMoviesList(type, {
                    params,
                  });
                }
                break;
              default:
                if (type === tvType.trending) {
                  response = await tmdbApi.getTrendingList(_category, {
                    params,
                  });
                } else {
                  response = await tmdbApi.getTvList(type, {
                    params,
                  });
                }
                break;
            }
          } else {
            response = await tmdbApi.similar(_category, id);
          }

          if (response) {
            if (response.results.length === 0) {
              // No more results, exit the loop
              break;
            }
            const remainingSpace = pageSize - allResults.length;
            const newResults = response.results.slice(0, remainingSpace);
            allResults = [...allResults, ...newResults];
            currentPage++;
          } else {
            break; // Exit the loop if there's no response
          }
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }

      setMovies(allResults);
      setPreloader(false);
    };
    getList();
  }, [id]);

  if (preloader) return <Preloader />;

  const displayedMovies = movies.slice(0, 80);

  return (
    <div className="py-5">
      <h2 className="capitalize px-3 text-gray-300 mt-812:text-3xl text-2xl font-semibold tracking-wide">
        {title}
      </h2>
      <div className="grid auto-rows-auto	grid-rows-3 gap-4 grid-cols-6 ">
        {displayedMovies.map((item, i) => (
          <div key={i}>
            <MovieItem item={item} category={_category} />
          </div>
        ))}
      </div>
    </div>
  );
}
