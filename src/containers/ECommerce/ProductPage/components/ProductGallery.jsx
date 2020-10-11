import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'reactstrap';
import Carousel from '@brainhubeu/react-carousel';
import ChevronLeftIcon from 'mdi-react/ChevronLeftIcon';
import ChevronRightIcon from 'mdi-react/ChevronRightIcon';
import '@brainhubeu/react-carousel/lib/style.css';

export default class ProductGallery extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string,
    })).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      images: props.images,
      lightboxIsOpen: false,
      currentImage: 0,
      currentImagePreview: 0,
      carouselImages: [],
    };
  }

  changeImg = (item) => {
    this.setState({
      currentImagePreview: item,
      currentImage: item,
    });
  };

  openLightbox = (index, event) => {
    event.preventDefault();
    this.carouselImages();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  };

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  };

  onChange = (value) => {
    this.setState({ currentImage: value });
  };

  carouselImages = () => {
    const { images } = this.state;
    this.setState({
      carouselImages: images.map(item => item.src),
    });
  };

  render() {
    const {
      images, currentImage, currentImagePreview, lightboxIsOpen, carouselImages,
    } = this.state;

    return (
      <div className="product-gallery">
        <button
          className="product-gallery__current-img"
          onClick={e => this.openLightbox(currentImage, e)}
        >
          <img src={images[currentImagePreview].src} alt="product-img" />
        </button>
        <div className="product_gallery__gallery">
          {images.map((img, item) => (
            <button type="button" key={img} onClick={() => this.changeImg(item)} className="product-gallery__img-preview">
              <img src={img.src} alt="product-img" />
            </button>
          ))}
        </div>
        <Modal
          isOpen={lightboxIsOpen}
          toggle={this.closeLightbox}
          className="modal-dialog--primary modal-dialog--carousel"
        >
          <div className="modal__body">
            <div className="modal__header">
              <button className="lnr lnr-cross modal__close-btn" type="button" onClick={this.closeLightbox} />
            </div>
            <Carousel
              value={currentImage}
              onChange={this.onChange}
              slides={
                carouselImages.map(item => (
                  <img src={item} alt="" />
                ))}
              addArrowClickHandler
              arrowLeft={
                <div className="modal__btn">
                  <ChevronLeftIcon className="modal__btn_left" />
                </div>}
              arrowRight={
                <div className="modal__btn">
                  <ChevronRightIcon className="modal__btn_right" />
                </div>}
            />
            <div className="modal__footer">
              <p>{currentImage + 1} of {carouselImages.length}</p>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
