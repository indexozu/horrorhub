import axios from 'axios';

const ExportTitles = () => {
    const handleExport = async () => {
        const favoriteIds = JSON.parse(localStorage.getItem('favorites')) || [];
        const titles = await Promise.all(favoriteIds.map(async (id) => {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
                headers: {
                    Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_ACCESS_TOKEN,
                },
            });
            return response.data.title;
        }));
        const blob = new Blob([titles.join('\n')], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'titles.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div className='export-button' onClick={handleExport}>Export titles</div>
    );
};

export default ExportTitles;