import React from 'react';
import { Link } from "react-router-dom";

const MTVItem = ({ id, title, priority, currentPage, onDelete, mtv }) => {
    const mtvBackground = () => {
        if (mtv[0].id === id) return "bg-success";
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