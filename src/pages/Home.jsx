import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchHorrorMovies = async () => {
            setLoading(true);
            try {
                const response = await axios.get("https://api.themoviedb.org/3/discover/movie", {
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_ACCESS_TOKEN,
                    },
                    params: {
                        with_genres: 27,
                        sort_by: "popularity.desc",
                        page,
                    },
                });
                setMovies(response.data.results);
                setTotalPages(response.data.total_pages);
                setError(null);
            } catch (error) {
                setError(error.response?.data?.message || "Failed to fetch movies. Try again later.");
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchHorrorMovies();
    }, [page]);

    if (loading) return <p style={{ textAlign: 'center' }}>Loading movies...</p>;
    if (error) return <p style={{ textAlign: 'center' }}>{error}</p>;

    return (
        <div className="home-page">
            <h1>Welcome to HorrorHub</h1>
            <p><b>HorrorHub</b> is a simple web application, made with React.<br/>The purpose of HorrorHub is to find and save horror movies, with the ability to extract the movies in list format.</p>
            <p style={{ fontSize: '12px' }}>HorrorHub uses <a href="https://www.themoviedb.org/" style= {{ fontWeight: '800', color: '#00ffff'}}>TheMovieDB.</a></p>
            <Pagination 
                page={page} 
                totalPages={totalPages} 
                onPageChange={setPage} 
            />
            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
            <Pagination 
                page={page} 
                totalPages={totalPages} 
                onPageChange={setPage} 
            />
        </div>
    );
};

export default Home;