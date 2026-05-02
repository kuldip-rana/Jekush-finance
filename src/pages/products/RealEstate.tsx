import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { motion } from 'framer-motion';
import HeroCarousel from '../../components/ui/HeroCarousel';

const { Title, Paragraph } = Typography;

const ProductPage: React.FC = () => {
  const images = [
    'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
    'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg',
    'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg'
  ];

  return (
    <div style={{ minHeight: '80vh' }}>
      <HeroCarousel 
        title="Real Estate (REITs)" 
        description="Gain part ownership of a tangible asset with risk-free cash flow—all with a low initial investment." 
        images={images} 
      />
      <div style={{ padding: '0 5% 6rem' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
          <Row gutter={[32, 32]}>
            <Col xs={24} lg={12}>
              <Card className="glass-panel" bordered={false} style={{ height: '100%' }}>
                <Title level={3}>Premium Commercial Real Estate</Title>
                <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Pre-leased premium commercial real estate investments with guaranteed rental returns. Gain part ownership of a tangible asset with risk-free cash flow—all with a low initial investment.</Paragraph>
                <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Real Estate Investment Trusts (REITs) assessment is the process of evaluating the performance, risks, and potential returns of real estate assets within a REIT portfolio. It involves analyzing factors such as property valuation, market trends, occupancy rates, income potential, and overall financial stability to determine investment viability and profitability.</Paragraph>
              </Card>
            </Col>
            <Col xs={24} lg={12}>
              <Card className="glass-panel" bordered={false} style={{ height: '100%' }}>
                <Title level={3}>Expert Analysis</Title>
                <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Our experts are here to assist you with your real estate investment decisions, ensuring optimal returns and informed choices.</Paragraph>
                <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Our team of global real estate experts brings extensive experience across every stage of the industry’s life cycle, providing thorough assessments and tailored strategies.</Paragraph>
              </Card>
            </Col>
          </Row>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductPage;
