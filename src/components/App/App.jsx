import React, { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer, toast } from 'react-toastify';
// import css from "./App.module.css";
import Button from "components/Button/Button";
import Modal from "components/Modal/Modal";
import Searchbar from "../Searchbar/Searchbar";


export class App extends Component{

  state = {
    searchName: "",
    page: 1,
    showModal: false
  };

  hendleSubmit = evt => {
    this.setState({ page: 1 });
    this.setState({ searchName: evt.value });
    console.log(this.searchName)
  }

  togleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal
    }))
  }
  render() {
    const { showModal } = this.state;
  
    return (
    
      <div>
        <Searchbar onSubmit={this.hendleSubmit}/>
        <button type="button" onClick={this.togleModal}>Open Modal</button>
        {showModal && <Modal onClose={this.togleModal}>
          <h1>Content Modal</h1>
           <button type="button" onClick={this.togleModal}>Close Modal</button>
        </Modal>}
        <Button/>
        <ToastContainer type="error" theme="colored" autoClose={3000}/>
    </div>
  )
}
};




