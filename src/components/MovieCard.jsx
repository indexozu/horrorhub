import PropTypes from "prop-types";
import AddToFavorites from "../components/AddToFavorites";

const MovieCard = ({ movie }) => {
const { title, poster_path, vote_average, release_date } = movie;
const posterURL = `https://image.tmdb.org/t/p/w500/${poster_path}`;

return (
    <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank" rel="noopener noreferrer">
        <div className="movie-card" style={{
            backgroundImage: `url(${posterURL})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '400px',
            minWidth: '200px',
        }}>
            <AddToFavorites movie={movie.id} />
            <div className="movie-details">
                <h3>{title}</h3>
                <p>⭐ {vote_average.toFixed(1)}</p>
                <p>📅 {release_date}</p>
            </div>
        </div>
    </a>
);};

// PropTypes validation
MovieCard.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        release_date: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;