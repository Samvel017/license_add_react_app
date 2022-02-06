import React from 'react';
import ImageUploading from 'react-images-uploading';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function ImageUpload() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
            className='image_upload_btn'
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button className='image_upload_btn delete_button' onClick={onImageRemoveAll}>Remove all images</button>
            <div className="images">
              <Carousel responsive={responsive} className='carousel'>
                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <img src={image['data_url']} alt="" width="200" style={{maxHeight: '200px'}}/>
                    <div className="image-item__btn-wrapper">
                      <button className='image_upload_btn' onClick={() => onImageUpdate(index)}>
                        Update
                      </button>
                      <button className='image_upload_btn delete_button' onClick={() => onImageRemove(index)}>
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
