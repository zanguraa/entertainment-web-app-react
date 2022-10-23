import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import TrendingMovie from "./TrendingMovie";

function TrendingSlider({ MoviesData }) {
  return (
    <div>
      <h2 style={{ color: "white" }}>Trending</h2>
      <Splide
        options={{
          fixedWidth: 700,
          autoplay: true,
          perMove: 1,
          interval: 5000,
          pagination: false,
          arrows: false,
          direction: "ltr",
          pauseOnFocus: true,
          pauseOnHover: true,
          start: 2,
          gap: 70,
          breakpoints: {
            1920: {
              fixedWidth: 600,
              gap: 60,
            },
            1440: {
              fixedWidth: 400,
              gap: 30,
            },
            768: {
              fixedWidth: 240,
              gap: 16,
            },
          },
        }}
        aria-label="Trending Movies"
      >
        {MoviesData.filter((movie) => movie.isTrending).map((movie, index) => {
          <SplideSlide key={index}>
            <TrendingMovie movie={movie} />
          </SplideSlide>;
        })}
      </Splide>
    </div>
  );
}

export default TrendingSlider;
