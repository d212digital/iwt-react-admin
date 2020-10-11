import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'reactstrap';
import Carousel from '@brainhubeu/react-carousel';
import ChevronLeftIcon from 'mdi-react/ChevronLeftIcon';
import ChevronRightIcon from 'mdi-react/ChevronRightIcon';
import '@brainhubeu/react-carousel/lib/style.css';

export default class Gallery extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string,
      type: PropTypes.string,
      alt: PropTypes.string,
    })).isRequired,
    tags: PropTypes.arrayOf(PropTypes.shape({
      tag: PropTypes.string,
      title: PropTypes.string,
    })).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      images: props.images,
      currentTag: 'all',
      tags: props.tags,
      lightboxIsOpen: false,
      currentImage: 0,
      carouselImages: [],
    };
  }

  onFilter = (tag) => {
    const { images } = this.props;
    const image = images;
    if (tag === 'all') {
      this.setState({
        images: image,
        currentTag: 'all',
      });
    } else {
      this.setState({
        images: image.filter(t => t.type === tag),
        currentTag: tag,
      });
    }
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
      currentImage, lightboxIsOpen, tags, images, currentTag, carouselImages,
    } = this.state;

    return (
      <div className="gallery">
        <div className="gallery__btns">
          <button
            type="button"
            className={`gallery__btn${currentTag === 'all' ? ' gallery__btn--active' : ''}`}
            onClick={e => this.onFilter('all', e)}
          >
            all
          </button>
          {tags.map(btn => (
            <button
              type="button"
              className={`gallery__btn${btn.tag === currentTag ? ' gallery__btn--active' : ''}`}
              key={btn}
              onClick={e => this.onFilter(btn.tag, e)}
            >
              {btn.title}
            </button>
          ))}
        </div>
        {images.map((img, index) => (
          <button
            className="gallery__img-wrap"
            key={img}
            onClick={event => this.openLightbox(index, event)}
          >
            <img src={img.src} alt={img.alt} />
          </button>
        ))}
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
