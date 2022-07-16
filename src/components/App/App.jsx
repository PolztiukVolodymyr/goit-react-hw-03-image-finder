import React, { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ImageGallery from "../ImageGallery/ImageGallery";
import Button from "components/Button/Button";
import Modal from "components/Modal/Modal";
import Searchbar from "../Searchbar/Searchbar";
import searchImage from "../../services/Api";


export class App extends Component{

  state = {
    searchName: "",
    page: 1,
    showModal: false,
    loading: false,
    images: [],
    largImage: "",
    alt: ""
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchName !== this.state.searchName) {
      console.log("Name changed!");
      this.setState({loading: true})
      setTimeout(() => {
        searchImage(this.state.searchName, this.state.page)
        .finally(this.setState({ loading: false }))
  },2000)
    }
  }

  hendleSubmit = evt => {
    this.setState({ page: 1 });
    this.setState({ searchName: evt});
    console.log(evt);

  }

  togleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal
    }))
  }

  onImgClick = (largImage, alt) => {
    this.setState({ largImage, alt });
    this.togleModal();
    
  }

  render() {
    const { showModal, images} = this.state;
  
    return (
    
      <div>
        <Searchbar onSubmit={this.hendleSubmit} />
        <ImageGallery images={images} onClick={this.onImgClick} />
        <button type="button" onClick={this.togleModal}>Open Modal</button>
        {showModal && <Modal onClose={this.togleModal}>
          <h1>Content Modal</h1>
           <button type="button" onClick={this.togleModal}>Close Modal</button>
        </Modal>}
        <Button />
        {this.state.loading && <div>Loading...</div>}
        <ToastContainer type="error" theme="colored" autoClose={3000}/>
    </div>
  )
}
};




