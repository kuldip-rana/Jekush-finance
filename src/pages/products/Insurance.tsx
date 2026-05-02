import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { motion } from 'framer-motion';
import HeroCarousel from '../../components/ui/HeroCarousel';

const { Title, Paragraph } = Typography;

const ProductPage: React.FC = () => {
  const images = [
    'https://images.pexels.com/photos/259165/pexels-photo-259165.jpeg',
    'https://images.pexels.com/photos/8297341/pexels-photo-8297341.jpeg',
    'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg'
  ];

  return (
    <div style={{ minHeight: '80vh' }}>
      <HeroCarousel 
        title="Insurance" 
        description="Our experts are here to help you choose the right insurance coverage for your needs and financial security." 
        images={images} 
      />
      <div style={{ padding: '0 5% 6rem' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
          <Row gutter={[32, 32]} justify="center">
            <Col xs={24} lg={16}>
              <Card className="glass-panel" bordered={false} style={{ height: '100%' }}>
                <Title level={3}>Comprehensive Coverage</Title>
                <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Our experts are here to help you choose the right insurance coverage for your needs and financial security. We provide tailored solutions to protect you, your family, and your assets against unforeseen events. Whether it's life insurance, health coverage, or specialized risk management, we guide you through the process to ensure peace of mind.</Paragraph>
              </Card>
            </Col>
          </Row>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductPage;
