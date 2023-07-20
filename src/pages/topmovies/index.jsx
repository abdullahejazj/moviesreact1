import React, { useEffect } from "react";

// api
import { category, movieType } from "../../api";
import { HomeBanner } from "../../components/banner";
// components
import Page from "../../components/page";
import Ads from "../../modules/Ads";
import { MovieGrid, MovieList } from "../../modules/movies";
import { handleScrollToTop } from "../../utils";

// ----------------------------------------------------------------------

export default function TopMovies() {
  useEffect(() => {
    handleScrollToTop();
  }, []);
  const isMovie = category === "movies";
  return (
    <Page title="Home">
      <Ads />
      <MovieGrid
        category={category.movie}
        type={movieType.top_rated}
        title="Top Rated Movies"
      />
    </Page>
  );
}
