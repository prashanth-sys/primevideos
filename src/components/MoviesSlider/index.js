// Write your code here

const MoviesSlider = props => {
  const {movieDetails} = props
  const {thumbnailUrl} = movieDetails
  return (
    <div>
      <img src={thumbnailUrl} alt="krishna" />
    </div>
  )
}
export default MoviesSlider
