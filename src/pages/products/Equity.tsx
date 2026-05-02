import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { motion } from 'framer-motion';
import HeroCarousel from '../../components/ui/HeroCarousel';

const { Title, Paragraph } = Typography;

const ProductPage: React.FC = () => {
  const images = [
    'https://images.pexels.com/photos/210990/pexels-photo-210990.jpeg',
    'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg',
    'https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg'
  ];

  return (
    <div style={{ minHeight: '80vh' }}>
      <HeroCarousel 
        title="Direct Equity & ETFs" 
        description="Explore dynamic opportunities through equities and diversified ETFs." 
        images={images} 
      />
      <div style={{ padding: '0 5% 6rem' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
          <Row gutter={[32, 32]}>
            <Col xs={24} lg={12}>
              <Card className="glass-panel" bordered={false} style={{ height: '100%' }}>
                <Title level={3}>Dynamic Opportunities</Title>
                <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Explore dynamic opportunities through equities and diversified ETFs. Access quality selections with a balanced approach to risk—offering flexibility, transparency, and ease of access.</Paragraph>
                <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Discover the potential of the equity market and ETFs with thoughtfully selected combinations. At VDAS Team, we help you navigate this space with a structured approach aligned to your long-term goals and comfort level. Whether you’re looking for value through equities or prefer the broader exposure and efficiency of ETFs, our offerings are designed to support a strong and stable financial path.</Paragraph>
              </Card>
            </Col>
            <Col xs={24} lg={12}>
              <Card className="glass-panel" bordered={false} style={{ height: '100%' }}>
                <Title level={3}>Market Exposure</Title>
                <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Equities and ETFs offer individuals direct access to the stock market, enabling participation in its performance. While equities represent partial ownership in a single company, ETFs offer broader exposure across multiple assets—providing a more diversified approach.</Paragraph>
                <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Our experts are here to assist you with your insurance assessment, ensuring the right coverage for your needs.</Paragraph>
              </Card>
            </Col>
          </Row>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductPage;
