import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { CatalogBanner } from "../../components/banner";
// components
import Page from "../../components/page";
import { MovieGrid } from "../../modules/movies";
// utils
import { handleScrollToTop } from "../../utils";

// ----------------------------------------------------------------------

export default function Catalog() {
  const { category } = useParams();
  const isMovie = category === "movies";

  useEffect(() => {
    handleScrollToTop();
  }, [category]);

  return (
    <div className="bg-black">
      <Page title={isMovie ? "Movies" : "TV Shows"}>
        <CatalogBanner category={isMovie ? "Movies" : "TV Shows"} />
        <MovieGrid category={isMovie ? "movie" : "tv"} />
      </Page>
    </div>
  );
}
