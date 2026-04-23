import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const ProductPage: React.FC = () => {
  return (
    <div style={{ padding: '6rem 5%', minHeight: '80vh' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Title level={1}>Real Estate (REITs)</Title>
        <Row gutter={[48, 48]} style={{ marginTop: '3rem' }} align="middle">
          <Col xs={24} lg={12}>
            <Card className="glass-panel" bordered={false}>
              <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>pre-leased premium commercial real estate Investments with guaranteed rental returns. Gain part ownership of a tangible asset with risk-free cash flow—all with a low initial investment.</Paragraph>
              <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Real Estate Investment Trusts (REITs) assessment is the process of evaluating the performance, risks, and potential returns of real estate assets within a REIT portfolio. It involves analyzing factors such as property valuation, market trends, occupancy rates, income potential, and overall financial stability to determine investment viability and profitability.</Paragraph>
              <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Our experts are here to assist you with your real estate investment decisions, ensuring optimal returns and informed choices.</Paragraph>
              <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Our team of global real estate experts brings extensive experience across every stage of the industry’s life cycle:</Paragraph>
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }}>
              <img 
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg" 
                alt="Real Estate (REITs)" 
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
