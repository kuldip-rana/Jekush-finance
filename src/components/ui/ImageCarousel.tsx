import React from 'react';
import { Carousel } from 'antd';
import { motion } from 'framer-motion';

const images = [
  'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg',
  'https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg',
  'https://images.pexels.com/photos/210990/pexels-photo-210990.jpeg',
  'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg'
];

const ImageCarousel: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.8 }}
      style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
    >
      <Carousel autoplay effect="fade" dotPosition="bottom" autoplaySpeed={3000}>
        {images.map((src, index) => (
          <div key={index}>
            <img 
              src={src} 
              alt={`Finance \${index + 1}`} 
              style={{ width: '100%', height: '100%', objectFit: 'cover', aspectRatio: '16/9' }} 
            />
          </div>
        ))}
      </Carousel>
    </motion.div>
  );
};

export default ImageCarousel;
