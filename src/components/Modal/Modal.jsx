import React, { Component } from "react";
import { createPortal } from "react-dom";
import css from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

export default class Modal extends Component{

    componentDidMount() {
        console.log("modal componentDidMount");
    }
    componentWillUnmount() {
        console.log(" modal componentWillUnmount");
    }

    render() {
        return createPortal(
            <div className={css.modal_backdrop}>
                <div className={css.modal_content}>{this.props.children}</div>
            </div>, modalRoot
        );
    }
}
