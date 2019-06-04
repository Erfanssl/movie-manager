import React, { Component } from 'react';
import { toast } from "react-toastify";

class MTVEditForm extends Component {
    constructor(props) {
        super(props);
        this.handleChangePriority = this.handleChangePriority.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleForm = this.handleForm.bind(this);
        this.state = {
            id: '',
            title: '',
            priority: ''
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        const data = JSON.parse(localStorage.getItem('Movie Manager'));
        const dataObj = data.mtv.find(item => item.id === id);
        this.setState(() => ({
            id,
            title: dataObj.title,
            priority: dataObj.priority
        }));
    }

    handleChangePriority(e) {
        const el = e.target;
        let value = el.value;
        if (!value.match(/^(?:[1-9]|10)$/)) {
            el.classList.add('danger');
        } else {
            el.classList.remove('danger');
        }
        this.setState(() => ({ priority: value }));
    }

    handleChangeTitle(e) {
        const el = e.target;
        if (el.value === '') {
            el.classList.add('danger');
        } else {
            el.classList.remove('danger');
        }
        document.querySelector('.exist-error').classList.remove('d-flex');
        this.setState(() => ({ title: el.value }));
    }


    componentDidUpdate() {
        if (this.state.title !== '' && this.state.priority !== '') {
            document.querySelector('.mtv__submit').removeAttribute('disabled');
        } else {
            document.querySelector('.mtv__submit').setAttribute('disabled', 'true');
        }
    }

    handleForm(e) {
        e.preventDefault();
        const { title, priority } = this.state;
        const prevData = localStorage.getItem('Movie Manager');
        const parsedData = JSON.parse(prevData);
        const doesExist = parsedData.mtv.find((item => item.title.toLowerCase() === title.toLowerCase() && item.priority === priority));
        if (doesExist) {
            document.querySelector('.exist-error').classList.add('d-flex');
            return;
        }
        parsedData.mtv.forEach(item => {
            if (item.id === this.state.id) {
                item.title = title;
                item.priority = priority;
            }
        });
        parsedData.mtv.sort((a, b) => b.priority - a.priority );
        localStorage.setItem('Movie Manager', JSON.stringify(parsedData));
        toast.success('You successfully edited your MtW list!');
        this.props.history.push('/movies-to-watch');
    }

    render() {
        const { title, priority } = this.state;

        return (
            <form className="mt-5" onSubmit={ this.handleForm }>
                <div className="form-group bg-glass p-4 container">
                    <div className="row">
                        <div className="col-8 col-md-10 text-center">
                            <label htmlFor="mtv-form__title">Title:</label>
                            <input onChange={ this.handleChangeTitle } className="form-control" id="mtv-form__title" type="text" name="title" value={ title }/>
                            <small>Type the title of the movie you want to watch</small>
                        </div>

                        <div className="col-4 col-md-2 text-center mb-2">
                            <label htmlFor="mtv-form__priority">Priority:</label>
                            <input onChange={ this.handleChangePriority } className="form-control text-center" id="mtv-form__priority" type="number" name="priority" value={ priority }/>
                            <small>1 to 10</small>
                        </div>
                    </div>
                    <div className="exist-error border border-danger rounded-lg pt-3 d-none my-3 align-items-center justify-content-center">
                        <p>
                            This movie with "{ this.state.priority }" priority, is already exist in your "Movies To Watch" list.
                        </p>
                    </div>
                    <button className="btn btn-success form-control mtv__submit" >Edit</button>
                </div>
            </form>
        );
    }
}

export default MTVEditForm;