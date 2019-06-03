import React from 'react';
import { Link } from "react-router-dom";

const MovieItem = ({ id, title, index, currentPage, numberOfPages, myRating, IMDB, onDelete, onEdit }) => {
    const createType = () => {
        const rating = myRating;
        if (rating >= 0 && rating <= 2.5 ) return { text: 'W', bg: 'bg-W' };
        else if (rating >= 2.6 && rating <= 4.5) return { text: 'B', bg: 'bg-B' };
        else if (rating >= 4.6 && rating <= 5.5) return { text: 'BbW', bg: 'bg-BbW' };
        else if (rating >= 5.6 && rating <= 6.5) return { text: 'NGbR', bg: 'bg-NGbR' };
        else if (rating >= 6.6 && rating <= 7) return { text: 'G', bg: 'bg-G' };
        else if (rating >= 7.1 && rating <= 7.5) return { text: 'VG', bg: 'bg-VG' };
        else if (rating >= 7.6 && rating <= 7.9) return { text: 'E', bg: 'bg-E' };
        else if (rating >= 8 && rating <= 8.5) return { text: 'M', bg: 'bg-M' };
        else if (rating >= 8.6 && rating <= 10) return { text: 'L', bg: 'bg-L' };
    };

    const indexCalculator = () => {
        return index + ((currentPage - 1) * numberOfPages);
    };
    return (
        <tr className="border-top">
            <td className="movies__td pb-4">{  currentPage && indexCalculator() + '.'} { title }</td>
            <td className="movies__td pl-4">{ myRating }</td>
            <td className="movies__td pl-4">{ IMDB }</td>
            <td className={createType().bg + ' badge ml-3 mt-3 p-2'}>{ createType().text }</td>
            { onEdit && <td>
                <Link to ={ `/movies/edit/${ id }` } className="btn btn-info">Edit</Link>
            </td> }
            { onDelete && <td>
                <button onClick={ onDelete } className="btn btn-danger bg">Delete</button>
            </td> }
        </tr>
    );
};

export default MovieItem;