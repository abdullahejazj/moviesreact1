import React, { useEffect } from "react";

// api
import { category, movieType } from "../../api";
import { HomeBanner } from "../../components/banner";
// components
import Page from "../../components/page";
import Ads from "../../modules/Ads";
import { MovieList } from "../../modules/movies";
import { handleScrollToTop } from "../../utils";

// ----------------------------------------------------------------------

export default function Home() {
  useEffect(() => {
    handleScrollToTop();
  }, []);

  return (
    <Page title="Home">
      <Ads />
      <HomeBanner />
      <div className="w-full mt-812:w-11/12 mx-auto">
        <MovieList
          category={category.movie}
          type={movieType.trending}
          title="Trending Movies"
        />

        <MovieList
          category={category.movie}
          type={movieType.popular}
          title="Popular Movies"
        />
        <MovieList
          category={category.movie}
          type={movieType.top_rated}
          title="Top Rated Movies"
        />
        <MovieList
          category={category.tv}
          type={movieType.trending}
          title="Trending TV"
        />
        <MovieList
          category={category.tv}
          type={movieType.popular}
          title="Popular TV"
        />
        <MovieList
          category={category.tv}
          type={movieType.top_rated}
          title="Top Rated TV"
        />
      </div>
    </Page>
  );
}
