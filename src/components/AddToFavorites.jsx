import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const AddToFavorites = ({ movie }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setIsFavorite(favorites.includes(movie));
    }, [movie]);

    const toggleFavorite = (e) => {
        e.preventDefault(); // Prevent parent link click
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        
        if (isFavorite) {
            const newFavorites = favorites.filter(id => id !== movie);
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
            setIsFavorite(false);
        } else {
            const newFavorites = [...favorites, movie];
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
            setIsFavorite(true);
        }
    };

    return (
        <button 
            onClick={toggleFavorite}
            className="favorite-button"
            style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: '24px'
            }}
        >
            {isFavorite ? '❤️' : '🤍'}
        </button>
    );
};

AddToFavorites.propTypes = {
    movie: PropTypes.number.isRequired
};

export default AddToFavorites;