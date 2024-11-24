import PropTypes from 'prop-types';

export default function Pagination({ page, totalPages, onPageChange }) {
    const handleNextPage = () => {
        onPageChange(Math.min(page + 1, totalPages));
    };

    const handlePrevPage = () => {
        onPageChange(Math.max(page - 1, 1));
    };

    return (
        <div className="pagination">
            <button onClick={handlePrevPage} disabled={page === 1}>Previous</button>
            <span>Page {page} of {totalPages}</span>
            <button onClick={handleNextPage} disabled={page === totalPages}>Next</button>
        </div>
    );
}

Pagination.propTypes = {
    page: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};
