import React, { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from "./App.module.css";
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
    largeImageURL: "",
    alt: ""
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchName, page } = this.state;
    if (prevState.searchName !== searchName) {
      console.log("Name changed!");
      this.setState({ loading: true })
      // console.log("prevState.name:", prevState.searchName);
      // console.log("this.state.name:", this.state.searchName);
   }

   if(searchName !== prevState.searchName || page !== prevState.page){
     const response = await searchImage(searchName, page)
           .finally(this.setState({ loading: false }))
     console.log("response:", response);
     const images = response.hits.map(({ id, tags, webformatURL, largeImageURL }) => (
       { id, tags, webformatURL, largeImageURL }));
     console.log("images:", images);
        this.setState((state) => ({images: [...state.images, ...images], }));
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

  onImgClick = (largeImageURL, alt) => {
    this.setState({ largeImageURL, alt });
    this.togleModal();
    
  }

  render() {
    const { showModal, images, largeImageURL, alt} = this.state;
  
    return (
    
      <div className={css.Container}>
        <Searchbar onSubmit={this.hendleSubmit} />
        <ImageGallery images={images} onClick={this.onImgClick} />
        {/* <button type="button" onClick={this.togleModal}>Open Modal</button> */}
        {showModal && <Modal onClose={this.togleModal}>
          <img src={largeImageURL} alt={alt}/>
           {/* <button type="button" onClick={this.togleModal}>Close Modal</button> */}
        </Modal>}
        <Button />
        {this.state.loading && <div>Loading...</div>}
        <ToastContainer type="error" theme="colored" autoClose={3000}/>
    </div>
  )
}
};




