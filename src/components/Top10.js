import React, { Component } from 'react';
import MovieItem from './MovieItem';

class Top10 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            db: []
        };
    }

    componentDidMount() {
        const error = document.querySelector('.not-enough');
        const table = document.querySelector('.top10__table');
        const data = localStorage.getItem('Movie Manager');
        if (data) {
            const parsedData = JSON.parse(data);
            if (parsedData.db) {
                if (parsedData.db.length >= 20) {
                    this.setState(() => ({ db: parsedData.db }));
                    error.classList.add('d-none');
                    table.classList.remove('d-none');
                }
            }
        }

    }


    render() {
        return (
            <div className="container mt-5">
                <div className="not-enough border border-danger bg-glass py-5 pt-4 rounded-lg text-center p-3 pt-4 text-white">
                    <p>
                        You should have at least 20 Movies in your Database to see your "Top 10" and "Worst 10".
                    </p>
                </div>
                <table className="table top10__table text-white bg-glass d-none">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>My Rate</th>
                        <th>IMDB</th>
                        <th>Type</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.state.db.slice(0, 10).map((item , index) => (
                        <MovieItem
                            key={ item.id }
                            id={ item.id }
                            title={ item.title.val }
                            index={ index + 1 }
                            IMDB={ item.IMDB.val }
                            myRating={ item.myRating }
                            currentPage="1"
                            numberOfPages="10"
                            onDelete={ false }
                            onEdit={ false }
                        />
                    )) }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Top10;