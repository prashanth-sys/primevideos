// Write your code here
// Write your code here
import {Component} from 'react'

import Slider from 'react-slick'

import MovieSlider from '../MoviesSlider'

import './index.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props

    const actionMovie = moviesList.filter(
      movie => movie.categoryId === 'ACTION',
    )
    console.log(actionMovie)
    const comedyMovie = moviesList.filter(
      movie => movie.categoryId === 'COMEDY',
    )
    console.log(comedyMovie)

    const sliderSettings = {
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 1,
    }

    return (
      <div className="bg-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
            alt="prime video"
            className="prime-video"
          />
        </div>
        <div className="action-container">
          <h1 className="heading">Action Movies</h1>
          <Slider {...sliderSettings}>
            {actionMovie.map(movie => (
              <MovieSlider key={movie.id} movieDetails={movie} />
            ))}
          </Slider>

          <h1 className="heading">Comedy Movies</h1>

          <Slider {...sliderSettings}>
            {comedyMovie.map(movie => (
              <MovieSlider key={movie.id} movieDetails={movie} />
            ))}
          </Slider>
        </div>
      </div>
    )
  }
}
export default PrimeVideo
