import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { motion } from 'framer-motion';
import HeroCarousel from '../../components/ui/HeroCarousel';

const { Title, Paragraph } = Typography;

const ProductPage: React.FC = () => {
  const images = [
    'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg',
    'https://images.pexels.com/photos/259165/pexels-photo-259165.jpeg'
  ];

  return (
    <div style={{ minHeight: '80vh' }}>
      <HeroCarousel 
        title="Succession Planning" 
        description="Expertise in safeguarding your legacy through thoughtful succession strategies." 
        images={images} 
      />
      <div style={{ padding: '0 5% 6rem' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
          <Row gutter={[32, 32]} justify="center">
            <Col xs={24} lg={16}>
              <Card className="glass-panel" bordered={false} style={{ height: '100%' }}>
                <Title level={3}>Safeguarding Your Legacy</Title>
                <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>From setting up trusts and drafting wills to ensuring smooth transfer of assets, we assist in protecting what matters most to you. Our approach helps secure your loved ones’ future and honors your wishes.</Paragraph>
                <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Let us support you in preserving and passing on your legacy for generations ahead.</Paragraph>
                <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Our experts help secure your legacy with smart, seamless succession planning.</Paragraph>
              </Card>
            </Col>
          </Row>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductPage;
