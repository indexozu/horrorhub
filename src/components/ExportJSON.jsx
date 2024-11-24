import axios from 'axios';

const ExportJSON = () => {
    const handleExport = async () => {
        const favoriteIds = JSON.parse(localStorage.getItem('favorites')) || [];
        const movies = await Promise.all(favoriteIds.map(async (id) => {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
                headers: {
                    Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_ACCESS_TOKEN,
                },
            });
            const { title, release_date, vote_average, overview } = response.data;
            const tmdbPage = `https://www.themoviedb.org/movie/${id}`;
            return { title, release_date, vote_average, overview, tmdbPage };
        }));
        const blob = new Blob([JSON.stringify(movies, null, 2)], { type: 'application/json' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'movies.json';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div className='export-button' onClick={handleExport}>Export favorites in JSON format</div>
    );
};

export default ExportJSON;