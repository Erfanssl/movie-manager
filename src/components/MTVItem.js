import React from 'react';
import { Link } from "react-router-dom";

const MTVItem = ({ id, title, priority, index, currentPage, onDelete }) => {
    const mtvBackground = () => {
        if (index === 1 && currentPage === 1) return "bg-success";
    };
    return (
        <tr className={ mtvBackground() }>
            <td>{ title }</td>
            <td className="pl-4">{ priority }</td>
            <td>
                <Link to ={ `/movies-to-watch/edit/${ id }` } className="btn btn-info">Edit</Link>
            </td>
            <td>
                <button onClick={ onDelete } className="btn btn-danger bg">Delete</button>
            </td>
        </tr>
    );
};

export default MTVItem;