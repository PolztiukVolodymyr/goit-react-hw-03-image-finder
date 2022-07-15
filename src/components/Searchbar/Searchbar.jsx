import React, { Component } from "react";
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
        this.props.onSubmit(this.props.value);
        
    }

    render() {
        return (
            <header className={css.Searchbar}>
                <form className={css.SearchForm}>
                    <button type="submit" className={css.SearchFormButton}>
                        <span className={css.SearchFormButtonLabel}>Search</span>
                    </button>

                    <input
                        className={css.SearchFormInput}
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                        value={this.state.value}
                        onChange={this.handleChangeInput}
                    />
                </form>
            </header>);
    }
}

export default Searchbar;
