import React from 'react';
import { Carousel, Typography } from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

interface HeroCarouselProps {
  title: string;
  description: string;
  images: string[];
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ title, description, images }) => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '50vh', minHeight: '400px', overflow: 'hidden', marginBottom: '4rem' }}>
      {/* Background Carousel */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Carousel autoplay effect="fade" dots={false} autoplaySpeed={4000}>
          {images.map((src, index) => (
            <div key={index}>
              <img 
                src={src} 
                alt="Hero background" 
                style={{ width: '100%', height: '50vh', minHeight: '400px', objectFit: 'cover', display: 'block' }} 
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Gradient Overlay for Text Legibility */}
      <div 
        style={{ 
          position: 'absolute', 
          top: 0, left: 0, width: '100%', height: '100%', 
          background: 'linear-gradient(to right, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.6) 40%, rgba(15, 23, 42, 0.1) 100%)',
          zIndex: 1
        }} 
      />

      {/* Animated Text Content */}
      <div style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', alignItems: 'center', padding: '0 5%' }}>
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 100 }}
          style={{ maxWidth: '800px' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Title level={1} style={{ color: '#ffffff', fontSize: '3.5rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem', textShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>
              {title}
            </Title>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Paragraph style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.8', textShadow: '0 2px 5px rgba(0,0,0,0.5)' }}>
              {description}
            </Paragraph>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroCarousel;
