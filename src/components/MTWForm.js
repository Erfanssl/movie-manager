import React, { Component } from 'react';
import uuid from 'uuid';
import { toast } from "react-toastify";

class MTVForm extends Component {
    constructor(props) {
        super(props);
        this.title = false;
        this.priority = false;
        this.onSubmitDisable = this.onSubmitDisable.bind(this);
        this.handleChangePriority = this.handleChangePriority.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleForm = this.handleForm.bind(this);
        this.state = {
            title: '',
            priority: ''
        };
    }

    handleChangePriority(e) {
        const el = e.target;
        if (!el.value.match(/^(?:[1-9]|10)$/)) {
            el.classList.add('danger');
            this.priority = false;
        } else {
            el.classList.remove('danger');
            this.priority = true;
        }
        this.onSubmitDisable();
    }

    handleChangeTitle(e) {
        const el = e.target;
        if (el.value === '') {
            el.classList.add('danger');
            this.title = false;
        } else {
            el.classList.remove('danger');
            this.title = true;
        }
        document.querySelector('.exist-error').classList.remove('d-flex');
        this.onSubmitDisable();
    }

    onSubmitDisable() {
        const submit = document.querySelector('.mtv__submit');
        const isEnable = this.title && this.priority;
        if (isEnable) {
            submit.removeAttribute('disabled');
        } else {
            submit.setAttribute('disabled', 'true');
        }
    }

    handleForm(e) {
        e.preventDefault();
        const title = e.target.elements.title.value;
        const priority = e.target.elements.priority.value;
        const formData = {
            id: uuid(),
            title,
            priority
        };

        this.setState(() => formData);

        const prevData = localStorage.getItem('Movie Manager');
        if (prevData) {
            const parsedData = JSON.parse(prevData);
            if (parsedData.mtv) {
                const doesExist = parsedData.mtv.find((item => item.title.toLowerCase() === title.toLowerCase()));
                if (doesExist) {
                    document.querySelector('.exist-error').classList.add('d-flex');
                    return;
                }
                const newData = {};
                Object.assign(newData, parsedData);
                newData.mtv = [ ...parsedData.mtv, formData ];
                newData.mtv.sort((a, b) => b.priority - a.priority );
                localStorage.setItem('Movie Manager', JSON.stringify(newData));
            } else {
                const data = {};
                Object.assign(data, parsedData);
                data.mtv = [formData];
                localStorage.setItem('Movie Manager', JSON.stringify(data));
            }
        } else {
            const data = { mtv: [formData] };
            localStorage.setItem('Movie Manager', JSON.stringify(data));
        }
        toast.success('You successfully added a new movie!');
        this.props.history.push('/movies-to-watch');
    }

    render() {
        return (
            <form className="mt-5" onSubmit={ this.handleForm }>
                <div className="form-group bg-glass p-4 container">
                    <div className="row">
                        <div className="col-8 col-md-10 text-center">
                            <label htmlFor="mtv-form__title">Title:</label>
                            <input onChange={ this.handleChangeTitle } className="form-control" id="mtv-form__title" type="text" name="title"/>
                            <small>Type the title of the movie you want to watch</small>
                        </div>

                        <div className="col-4 col-md-2 text-center mb-2">
                            <label htmlFor="mtv-form__priority">Priority:</label>
                            <input onChange={ this.handleChangePriority } className="form-control text-center" id="mtv-form__priority" type="number" name="priority"/>
                            <small>1 to 10</small>
                        </div>
                    </div>
                    <div className="exist-error border border-danger rounded-lg pt-3 d-none my-3 align-items-center justify-content-center">
                        <p>
                            This movie is already exist in your "Movies To Watch" list.
                        </p>
                    </div>
                    <button className="btn btn-success form-control mtv__submit" disabled>Submit</button>
                </div>
            </form>
        );
    }
}

export default MTVForm;