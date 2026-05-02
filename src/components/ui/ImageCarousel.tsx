import React from 'react';
import { Carousel } from 'antd';
import { motion } from 'framer-motion';

const images = [
  '/images/pixar_stock_arrow_1777697668704.png',
  '/images/pixar_financial_news_1777697685452.png',
  '/images/pixar_wealth_growth_1777697702578.png'
];

const ImageCarousel: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
    >
      <Carousel autoplay autoplaySpeed={2000} dots={true} effect="scrollx">
        {images.map((src, index) => (
          <div key={index}>
            <img 
              src={src} 
              alt={`Finance Insight ${index + 1}`} 
              style={{ width: '100%', height: '500px', objectFit: 'cover' }} 
            />
          </div>
        ))}
      </Carousel>
    </motion.div>
  );
};

export default ImageCarousel;
