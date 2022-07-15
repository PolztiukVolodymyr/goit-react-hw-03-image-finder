import React, { Component } from "react";
import { toast } from 'react-toastify';
import css from "./Searchbar.module.css";

class Searchbar extends Component{
    state = {
        value: ""
    }
    handleChangeInput = evt => {
        const valueInput = evt.target.value;
        this.setState({ value: valueInput });
    }

    handleFormSubmit = evt => {
        evt.preventDefault();
        if (this.state.value.trim() === "") {
            toast.error("Enter search value, please!");
        }
        this.props.onSubmit(this.state.value);
        console.log(this.state.value)
        
    }

    render() {
        return (
            <header className={css.Searchbar}>
                <form className={css.SearchForm} onSubmit={this.handleFormSubmit}>
                    <button type="submit" className={css.SearchFormButton}>
                        <span className={css.SearchFormButtonLabel}>Search</span>
                    </button>

                    <input
                        className={css.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.value}
                        onChange={this.handleChangeInput}
                    />
                </form>
            </header>);
    }
}

export default Searchbar;
