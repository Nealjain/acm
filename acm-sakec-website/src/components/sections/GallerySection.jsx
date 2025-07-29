import React from 'react';
import Masonry from 'react-masonry-css';

const GallerySection = () => {
  const images = [
    // Image data will go here
  ];

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {images.map((image, index) => (
            <div key={index}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default GallerySection;
