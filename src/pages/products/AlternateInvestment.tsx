import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { motion } from 'framer-motion';
import HeroCarousel from '../../components/ui/HeroCarousel';

const { Title, Paragraph } = Typography;

const ProductPage: React.FC = () => {
  const images = [
    'https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg',
    'https://images.pexels.com/photos/259165/pexels-photo-259165.jpeg',
    'https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg'
  ];

  return (
    <div style={{ minHeight: '80vh' }}>
      <HeroCarousel 
        title="Alternate Investment Fund" 
        description="Explore specialized avenues with AIFs for broader diversification and refined strategies." 
        images={images} 
      />
      <div style={{ padding: '0 5% 6rem' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
          <Row gutter={[32, 32]}>
            <Col xs={24} lg={12}>
              <Card className="glass-panel" bordered={false} style={{ height: '100%' }}>
                <Title level={3}>Specialized Avenues</Title>
                <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Explore specialized avenues with AIFs to those looking for broader diversification and refined strategies. Each option is thoughtfully selected and actively monitored to provide potential for enhanced outcomes while managing exposure across unique asset categories.</Paragraph>
                <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Our experts will be glad to assist you with your retirement planning.</Paragraph>
              </Card>
            </Col>
            <Col xs={24} lg={12}>
              <Card className="glass-panel" bordered={false} style={{ height: '100%' }}>
                <Title level={3}>Understanding AIFs</Title>
                <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Alternate Investment Funds (AIFs) offer an alternative to traditional avenues like direct equity, bonds, and standard pooled products, targeting high-net-worth individuals (HNIs) and ultra-high-net-worth individuals (UHNI) looking for exclusive opportunities. These sophisticated pooled vehicles require a minimum commitment of Rs. 1 crore and are regulated under SEBI’s 2012 guidelines. AIFs are typically structured as corporations, LLPs, or trusts.</Paragraph>
                <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Blending operational simplicity with strategic flexibility, AIFs aim to generate enhanced outcomes through defined approaches. They focus on alternative asset classes such as venture capital, private equity, hedge funds, and infrastructure. Based on the types of opportunities they pursue, AIFs are grouped into Category I, II, and III.</Paragraph>
              </Card>
            </Col>
          </Row>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductPage;
