import React, { Component } from "react";
// import css from "./App.module.css";
import Modal from "components/Modal/Modal";


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
        <button type="button" onClick={this.togleModal}>Open Modal</button>
        {showModal && <Modal>
          <h1>Content Modal</h1>
           <button type="button" onClick={this.togleModal}>Close Modal</button>
        </Modal>}
    </div>
  )
}
};




