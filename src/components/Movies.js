import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import MovieItem from './MovieItem';
import Pagination from './Pagination';

class Movies extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handlePagination = this.handlePagination.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.changeMyRate = this.changeMyRate.bind(this);
        this.changeIMDB = this.changeIMDB.bind(this);
        this.handleTypes = this.handleTypes.bind(this);
        this.state = {
            db: [],
            currentPage: 1,
            search: '',
            type: '',
            sort: 'MtRating'
        };
    }

    componentDidMount() {
        const data = localStorage.getItem('Movie Manager');
        if (data) {
            const dataObj =JSON.parse(data);
            if (dataObj.db) {
                this.setState(() => ({
                    db: dataObj.db
                }));
            } else {
                document.querySelector('.no-data').classList.add('d-flex');
                document.querySelector('.movies__table').classList.add('d-none');
                document.querySelector('.movies__left-type').classList.remove('d-flex');
                document.querySelector('.movies__left-type').classList.add('d-none');
                document.querySelector('.movies__search-box').classList.add('d-none');
                document.querySelector('.movies__search-text').classList.add('d-none');
            }
        } else {
            document.querySelector('.no-data').classList.add('d-flex');
            document.querySelector('.movies__table').classList.add('d-none');
            document.querySelector('.movies__left-type').classList.remove('d-flex');
            document.querySelector('.movies__left-type').classList.add('d-none');
            document.querySelector('.movies__search-box').classList.add('d-none');
            document.querySelector('.movies__search-text').classList.add('d-none');}
    }

    handleDelete(id, index, postsPerPage) {
        const db = this.state.db.filter(item => item.id !== id);
        if (index === 0 && Math.ceil((this.state.db.length - 1) / postsPerPage) < this.state.currentPage ) {
            this.setState((prevState) => ({
                db, currentPage: prevState.currentPage - 1
            }));
        } else {
            this.setState(() => ({
                db
            }));
        }
        toast.success('You successfully deleted a movie!');
    }

    componentDidUpdate() {
        const data = JSON.parse(localStorage.getItem('Movie Manager'));
        data.db = this.state.db;
        localStorage.setItem('Movie Manager', JSON.stringify(data));
        if (this.state.db.length === 0) {
            document.querySelector('.no-data').classList.add('d-flex');
            document.querySelector('.movies__table').classList.add('d-none');
            document.querySelector('.movies__left-type').classList.remove('d-flex');
            document.querySelector('.movies__left-type').classList.add('d-none');
            document.querySelector('.movies__search-box').classList.add('d-none');
            document.querySelector('.movies__search-text').classList.add('d-none');
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

    handleTypes(e, type) {
        e.preventDefault();
        this.setState(() => ({ type, currentPage: 1 }))
    }

    changeMyRate() {
        this.setState(() => ({ sort: 'myRating' }));
    }

    changeIMDB() {
        this.setState(() => ({ sort: 'IMDB' }));
    }

    render() {
        const { db, search, type, sort } = this.state;
        const typeFilter = this.state.type === '' ? db :  db.filter(item => item.type === type);
        const searchedData = typeFilter.filter(item => item.title.val.toLowerCase().includes(search.toLowerCase()));
        if (sort === 'IMDB') searchedData.sort((a, b) => b.IMDB.val - a.IMDB.val);
        else if (sort === 'myRating') searchedData.sort((a, b) => b.myRating - a.myRating);
        const data = Pagination(searchedData, 10, this.state.currentPage);
        const pages = new Array(data.pages).fill('');
        let dbData = data.data;

        return (
            <div className="movies container mt-5">
                <div className="row">
                    <div className="col-9 ml-auto">
                        <div className="movie__above-table">
                            <Link to="/movies-form" className="btn btn-primary movies__btn--add-new p-2 mb-2">Add New Movie</Link>
                            <span className="ml-3 mr-2 movies__search-text">Or Search:</span>
                            <input onChange={ this.handleSearch } type="text" className="form-control mb-2 movies__search-box" placeholder="Search in your Database"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="movies__left-type col-3 d-flex justify-content-center text-center">
                        <div className="movies__left-nav pt-2 bg-glass nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                             aria-orientation="vertical">
                            <a onClick={ (e) => this.handleTypes(e,'') } className={ `nav-link ${ this.state.type === '' ? " active" : "" }` } id="v-pills-home-tab" data-toggle="pill" href="#"
                               role="tab" aria-controls="v-pills-home" aria-selected="true">All Movies</a>
                            <a onClick={ (e) => this.handleTypes(e,'W') } className={ `nav-link ${ this.state.type === 'W' ? " active" : "" }` } id="v-pills-home-tab" data-toggle="pill" href="#"
                               role="tab" aria-controls="v-pills-home" aria-selected="true">Worthless</a>
                            <a onClick={ (e) => this.handleTypes(e,'B') } className={ `nav-link ${ this.state.type === 'B' ? " active" : "" }` } id="v-pills-profile-tab" data-toggle="pill" href="#"
                               role="tab" aria-controls="v-pills-profile" aria-selected="false">Bad</a>
                            <a onClick={ (e) => this.handleTypes(e,'BbW') } className={ `nav-link ${ this.state.type === 'BbW' ? " active" : "" }` } id="v-pills-messages-tab" data-toggle="pill"
                               href="#" role="tab" aria-controls="v-pills-messages"
                               aria-selected="false">Bad but Watchable</a>
                            <a onClick={ (e) => this.handleTypes(e,'NGbR') } className={ `nav-link ${ this.state.type === 'NGbR' ? " active" : "" }` } id="v-pills-settings-tab" data-toggle="pill"
                               href="#" role="tab" aria-controls="v-pills-settings"
                               aria-selected="false">Not Good but Respectable</a>
                            <a onClick={ (e) => this.handleTypes(e,'G') } className={ `nav-link ${ this.state.type === 'G' ? " active" : "" }` } id="v-pills-settings-tab" data-toggle="pill"
                               href="#" role="tab" aria-controls="v-pills-settings"
                               aria-selected="false">Good</a>
                            <a onClick={ (e) => this.handleTypes(e,'VG') } className={ `nav-link ${ this.state.type === 'VG' ? " active" : "" }` } id="v-pills-settings-tab" data-toggle="pill"
                               href="#" role="tab" aria-controls="v-pills-settings"
                               aria-selected="false">Very Good</a>
                            <a onClick={ (e) => this.handleTypes(e,'E') } className={ `nav-link ${ this.state.type === 'E' ? " active" : "" }` } id="v-pills-settings-tab" data-toggle="pill"
                               href="#" role="tab" aria-controls="v-pills-settings"
                               aria-selected="false">Excellent</a>
                            <a onClick={ (e) => this.handleTypes(e,'M') } className={ `nav-link ${ this.state.type === 'M' ? " active" : "" }` } id="v-pills-settings-tab" data-toggle="pill"
                               href="#" role="tab" aria-controls="v-pills-settings"
                               aria-selected="false">Masterpiece</a>
                            <a onClick={ (e) => this.handleTypes(e,'L') } className={ `nav-link ${ this.state.type === 'L' ? " active" : "" }` } id="v-pills-settings-tab" data-toggle="pill"
                               href="#" role="tab" aria-controls="v-pills-settings"
                               aria-selected="false">Legendary</a>
                        </div>
                    </div>
                    <div className="col-9 ml-auto">
                        <div className="no-data border border-danger rounded-lg bg-glass py-5 pt-4 d-none my-3 align-items-center justify-content-center text-center px-1">
                            <p>
                                There is no movie in your "Movie Database"
                            </p>
                        </div>
                        <table className="table movies__table">
                            <thead>
                            <tr>
                                <th>Title</th>
                                <th onClick={ this.changeMyRate } className="pointer">My Rate</th>
                                <th onClick={ this.changeIMDB } className="pointer">IMDB</th>
                                <th>Type</th>
                                <th />
                                <th />
                            </tr>
                            </thead>
                            <tbody>
                            { dbData.map((item, index) => (
                                <MovieItem
                                    key={ item.id }
                                    id={ item.id }
                                    title={ item.title.val }
                                    index={ index + 1 }
                                    IMDB={ item.IMDB.val }
                                    myRating={ item.myRating }
                                    currentPage={ this.state.currentPage }
                                    numberOfPages="10"
                                    onDelete={ () => this.handleDelete(item.id, index, 10) }
                                    onEdit={ true }
                                />
                            ))}
                            </tbody>
                        </table>
                        <nav aria-label="Page navigation">
                            <ul className="pagination justify-content-center">
                                { pages.length > 1 && pages.map((item, i) => (
                                    <li className={ this.paginateClass(i + 1) } key={ i }>
                                        <button onClick={ () => this.handlePagination(i + 1) } className="page-link">
                                            { i + 1 }
                                        </button>
                                    </li>
                                )) }
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default Movies;