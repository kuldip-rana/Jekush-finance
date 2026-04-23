import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const ProductPage: React.FC = () => {
  return (
    <div style={{ padding: '6rem 5%', minHeight: '80vh' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Title level={1}>Direct Equity & ETFs</Title>
        <Row gutter={[48, 48]} style={{ marginTop: '3rem' }} align="middle">
          <Col xs={24} lg={12}>
            <Card className="glass-panel" bordered={false}>
              <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Explore dynamic opportunities through equities and diversified ETFs. Access quality selections with a balanced approach to risk—offering flexibility, transparency, and ease of access.</Paragraph>
              <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Discover the potential of the equity market and ETFs with thoughtfully selected combinations. At VDAS Team, we help you navigate this space with a structured approach aligned to your long-term goals and comfort level. Whether you’re looking for value through equities or prefer the broader exposure and efficiency of ETFs, our offerings are designed to support a strong and stable financial path.</Paragraph>
              <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Our experts are here to assist you with your insurance assessment, ensuring the right coverage for your needs.</Paragraph>
              <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Equities and ETFs offer individuals direct access to the stock market, enabling participation in its performance. While equities represent partial ownership in a single company, ETFs offer broader exposure across multiple assets—providing a more diversified approach.</Paragraph>
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }}>
              <img 
                src="https://images.pexels.com/photos/210990/pexels-photo-210990.jpeg" 
                alt="Direct Equity & ETFs" 
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
