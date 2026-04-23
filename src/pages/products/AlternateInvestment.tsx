import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const ProductPage: React.FC = () => {
  return (
    <div style={{ padding: '6rem 5%', minHeight: '80vh' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Title level={1}>Alternate Investment Fund</Title>
        <Row gutter={[48, 48]} style={{ marginTop: '3rem' }} align="middle">
          <Col xs={24} lg={12}>
            <Card className="glass-panel" bordered={false}>
              <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Explore specialized avenues with AIFs to those looking for broader diversification and refined strategies. Each option is thoughtfully selected and actively monitored to provide potential for enhanced outcomes while managing exposure across unique asset categories.</Paragraph>
              <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Our experts will be glad to assist you with your retirement planning.</Paragraph>
              <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Alternate Investment Funds (AIFs) offer an alternative to traditional avenues like direct equity, bonds, and standard pooled products, targeting high-net-worth individuals (HNIs) and ultra-high-net-worth individuals (UHNI) looking for exclusive opportunities. These sophisticated pooled vehicles require a minimum commitment of Rs. 1 crore and are regulated under SEBI’s 2012 guidelines. AIFs are typically structured as corporations, LLPs, or trusts.</Paragraph>
              <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Blending operational simplicity with strategic flexibility, AIFs aim to generate enhanced outcomes through defined approaches. They focus on alternative asset classes such as venture capital, private equity, hedge funds, and infrastructure. Based on the types of opportunities they pursue, AIFs are grouped into Category I, II, and III.</Paragraph>
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }}>
              <img 
                src="https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg" 
                alt="Alternate Investment Fund" 
                style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', objectFit: 'cover', aspectRatio: '4/3' }} 
              />
            </motion.div>
          </Col>
        </Row>
      </motion.div>
    </div>
  );
};

export default ProductPage;
