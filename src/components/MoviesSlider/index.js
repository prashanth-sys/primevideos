// Write your code here
import ReactPlayer from 'react-player'

const MoviesSlider = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <div>
      <img src={thumbnailUrl} alt="thumbnail" className="" />
      <ReactPlayer url={videoUrl} key={movieDetails.id} />
    </div>
  )
}
export default MoviesSlider
