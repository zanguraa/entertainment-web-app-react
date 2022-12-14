import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import styled from "styled-components";
import "@splidejs/react-splide/css";

function TrendingSlider({ MoviesData }) {
  const data = MoviesData;
  return (
    <SliderContainer>
      <h2>Trending</h2>
      <Splide
        options={{
          fixedWidth: 700,
          autoplay: true,
          perMove: 1,
          interval: 2000,
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
              fixedWidth: 470,
              gap: 40,
            },
            768: {
              fixedWidth: 470,
              gap: 40,
            },
            500: {
              fixedWidth: 210,
              gap: 20,
            },
          },
        }}
      >
        {data
          .filter((movie) => movie.isTrending)
          .map((movie, index) => (
            <SplideSlide key={index}>
              <TrendingMovies>
                <img
                  src={process.env.PUBLIC_URL + movie.thumbnail.regular.large}
                  alt="movies-trending"
                />
              </TrendingMovies>
            </SplideSlide>
          ))}
      </Splide>
    </SliderContainer>
  );
}

export default TrendingSlider;

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    color: white;
  }
  @media screen and (min-width: 1440px) {
    width: 90vw;
  }
`;

const TrendingMovies = styled.div`
  display: flex;
  flex-direction: row;
  img {
    min-width: 163px;
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
 @media screen and (min-width: 768px) {
    min-width: 470px;
   
  }
`;
