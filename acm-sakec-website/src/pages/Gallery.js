import React, { useState } from 'react';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const photos = [
  { src: 'https://via.placeholder.com/800x600', width: 800, height: 600 },
  { src: 'https://via.placeholder.com/600x800', width: 600, height: 800 },
  { src: 'https://via.placeholder.com/1200x800', width: 1200, height: 800 },
  { src: 'https://via.placeholder.com/800x1200', width: 800, height: 1200 },
  { src: 'https://via.placeholder.com/1024x768', width: 1024, height: 768 },
  { src: 'https://via.placeholder.com/768x1024', width: 768, height: 1024 },
];

const Gallery = () => {
  const [index, setIndex] = useState(-1);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-6xl font-bold text-center mb-16">Gallery</h1>
      <PhotoAlbum
        photos={photos}
        layout="masonry"
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
};

export default Gallery;
