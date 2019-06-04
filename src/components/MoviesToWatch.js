import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import MTVItem from './MTVItem';
import Pagination from './Pagination';

class MoviesToWatch extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handlePagination = this.handlePagination.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = {
            mtv: [],
            currentPage: 1,
            search: ''
        };
    }

    componentDidMount() {
        const data = localStorage.getItem('Movie Manager');
        if (data) {
            const dataObj =JSON.parse(data);
            if (dataObj.mtv) {
                this.setState(() => ({
                    mtv: dataObj.mtv
                }));
            } else {
                document.querySelector('.no-data').classList.add('d-flex');
                document.querySelector('.movies-to-watch__table').classList.add('d-none');
                document.querySelector('.mtv__search-text').classList.add('d-none');
                document.querySelector('.movies-to-watch__search-box').classList.add('d-none');
            }
        } else {
            document.querySelector('.no-data').classList.add('d-flex');
            document.querySelector('.movies-to-watch__table').classList.add('d-none');
            document.querySelector('.mtv__search-text').classList.add('d-none');
            document.querySelector('.movies-to-watch__search-box').classList.add('d-none');
        }
    }

    handleDelete(id, index, postsPerPage) {
        const mtv = this.state.mtv.filter(item => item.id !== id);
        if (index === 0 && Math.ceil((this.state.mtv.length - 1) / postsPerPage) < this.state.currentPage ) {
            this.setState((prevState) => ({
                mtv, currentPage: prevState.currentPage - 1
            }));
        } else {
            this.setState(() => ({
                mtv
            }));
        }
        toast.success('You successfully deleted a movie!');
    }

    componentDidUpdate() {
        const data = JSON.parse(localStorage.getItem('Movie Manager'));
        data.mtv = this.state.mtv;
        localStorage.setItem('Movie Manager', JSON.stringify(data));
        if (this.state.mtv.length === 0) {
            document.querySelector('.no-data').classList.add('d-flex');
            document.querySelector('.movies-to-watch__table').classList.add('d-none');
            document.querySelector('.mtv__search-text').classList.add('d-none');
            document.querySelector('.movies-to-watch__search-box').classList.add('d-none');
        }
    }

    handlePagination(page) {
        this.setState(() => ({ currentPage: page }));
    }

    paginateClass(itemNum) {
        return itemNum === this.state.currentPage ? "page-item active" : "page-item"
    }

    handleSearch(e) {
        const val = e.target.value;
        this.setState(() => ({
            search: val
        }))
    }

    render() {
        const { mtv, search } = this.state;
        const searchedData = mtv.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
        const data = Pagination(searchedData, 10, this.state.currentPage);
        const pages = new Array(data.pages).fill('');
        const mtvData = data.data;

        return (
            <div className="movies-to-watch container mt-5">
                <Link to="/mtv-form" className="btn btn-primary mtv__btn--add-new mb-2">Add New Movie</Link>
                <span className="ml-3 mr-2 mtv__search-text">Or Search:</span>
                <input onChange={ this.handleSearch } type="text" className="form-control form-inline mb-2 movies-to-watch__search-box" placeholder="Search among the movies you want to watch"/>
                <div className="no-data border border-danger rounded-lg bg-glass py-5 pt-4 d-none my-3 align-items-center justify-content-center text-center px-1">
                    <p>
                        There is no movie in your "Movies To Watch" list.
                    </p>
                </div>
                <table className="table movies-to-watch__table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Priority</th>
                        <th />
                        <th />
                    </tr>
                    </thead>
                    <tbody>
                    { mtvData.map((item, index) => (
                            <MTVItem
                                key={ item.id }
                                id={ item.id }
                                title={ item.title }
                                currentPage={ this.state.currentPage }
                                mtv={ this.state.mtv }
                                priority={ item.priority }
                                onDelete={ () => this.handleDelete(item.id, index, "10") }
                            />
                        ))}
                    </tbody>
                </table>
                <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center">
                        { pages.length > 1 && pages.map((item, i) => (
                            <li className={ this.paginateClass(i + 1) } key={ i }>
                                <button onClick={ () => this.handlePagination(i + 1) } className="page-link bg-dark">
                                    { i + 1 }
                                </button>
                            </li>
                        )) }
                    </ul>
                </nav>
            </div>
        );
    }
}

export default MoviesToWatch;