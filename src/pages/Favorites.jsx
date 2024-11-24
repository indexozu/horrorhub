import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

const Favorites = () => {
    const [favoriteMovies, setFavoriteMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFavoriteMovies = async () => {
            const favoriteIds = JSON.parse(localStorage.getItem('favorites') || '[]');
            
            if (favoriteIds.length === 0) {
                setLoading(false);
                return;
            }

            try {
                const moviePromises = favoriteIds.map(id => 
                    axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
                        headers: {
                            Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_ACCESS_TOKEN,
                            accept: 'application/json',
                        }
                    })
                );

                const responses = await Promise.all(moviePromises);
                const movies = responses.map(response => response.data);
                setFavoriteMovies(movies);
                setError(null);
            } catch (err) {
                setError('Failed to fetch favorite movies. Please try again later.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchFavoriteMovies();
    }, []); // Empty dependency array means this runs once on mount

    if (loading) return <div style={{ textAlign: 'center' }}>Loading your favorites...</div>;
    if (error) return <div style={{ textAlign: 'center' }}>{error}</div>;

    return (
        <div>
            {favoriteMovies.length > 0 ? (
                <div className="movies-grid">
                    {favoriteMovies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            ) : (
                <p style={{ textAlign: 'center' }}>No favorites added yet.<br/>Start adding some horror movies!</p>
            )}
        </div>
    );
};

export default Favorites;