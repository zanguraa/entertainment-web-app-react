import React from 'react'
import styled from 'styled-components'

function TrendingMovie({movie}) {
    console.log(movie);
  return (
    <TrendingCont>
    <img src={process.env.PUBLIC_URL + movie.thumbnail.regular.small} />
    </TrendingCont>
  )
}

export default TrendingMovie

const TrendingCont =styled.div`
display: flex;
flex-direction: column;
`