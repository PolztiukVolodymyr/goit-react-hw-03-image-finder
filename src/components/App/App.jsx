import React, { Component } from "react";
// import { ToastContainer} from 'react-toastify';
// import { ToastContainer, toast } from 'react-toastify';
// import css from "./App.module.css";
import Modal from "components/Modal/Modal";
import Searchbar from "../Searchbar/Searchbar";


export class App extends Component{

  state = {
    showModal: false
  };

  togleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal
    }))
  }
  render() {
    const { showModal } = this.state;
  
    return (
    
      <div>
        <Searchbar/>
        <button type="button" onClick={this.togleModal}>Open Modal</button>
        {showModal && <Modal onClose={this.togleModal}>
          <h1>Content Modal</h1>
           <button type="button" onClick={this.togleModal}>Close Modal</button>
        </Modal>}
        {/* <ToastContainer/> */}
    </div>
  )
}
};




