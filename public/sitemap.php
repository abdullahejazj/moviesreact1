<?php

const EXTERNAL_DATA_URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=3fac70260a5a4a0cc9324207af7f9c8c&page=';

function generateSiteMap() {
  $urls = [];

  // Loop through 26 pages to generate sitemap for each page
  for ($i = 1; $i <= 26; $i++) {
    $response = file_get_contents(EXTERNAL_DATA_URL . $i);
    $data = json_decode($response, true);

    $pageUrls = array_map(function($movie) {
      return '
          <url>
            <loc>https://' . $_SERVER['HTTP_HOST'] . '/home/catalog/movie/' . $movie['id'] . '</loc>
          </url>';
    }, $data['results']);

    $urls = array_merge($urls, $pageUrls);
  }

  // Generate sitemap XML
  $sitemap = '<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
        <!--We manually set the URLs we know already-->
        <url>
          <loc>https://' . $_SERVER['HTTP_HOST'] . '/</loc>
        </url>
        <url>
          <loc>https://' . $_SERVER['HTTP_HOST'] . '/home</loc>
        </url>
        <url>
          <loc>https://' . $_SERVER['HTTP_HOST'] . '/about</loc>
        </url>
        <url>
          <loc>https://' . $_SERVER['HTTP_HOST'] . '/home/catalog/movies</loc>
        </url>
        <url>
          <loc>https://' . $_SERVER['HTTP_HOST'] . '/home/catalog/tv-shows</loc>
        </url>
        ' . implode('', $urls) . '
      </urlset>';

  return $sitemap;
}

// Generate the XML sitemap
$sitemapContent = generateSiteMap();

// Set the appropriate headers for XML response
header('Content-Type: text/xml');

// Output the sitemap content
echo $sitemapContent;