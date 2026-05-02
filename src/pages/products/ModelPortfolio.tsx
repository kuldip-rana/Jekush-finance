import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { motion } from 'framer-motion';
import HeroCarousel from '../../components/ui/HeroCarousel';

const { Title, Paragraph } = Typography;

const ProductPage: React.FC = () => {
  const images = [
    'https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg',
    'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg',
    'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg'
  ];

  return (
    <div style={{ minHeight: '80vh' }}>
      <HeroCarousel 
        title="Model Portfolio" 
        description="Streamline your investment path with portfolios designed to fit your goals and comfort with risk." 
        images={images} 
      />
      <div style={{ padding: '0 5% 6rem' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
          <Row gutter={[32, 32]}>
            <Col xs={24} lg={12}>
              <Card className="glass-panel" bordered={false} style={{ height: '100%' }}>
                <Title level={3}>Diversified Options</Title>
                <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Streamline your investment path with portfolios designed to fit your goals and comfort with risk. At VDAS, we offer diversified, well-balanced options aimed at steady progress while managing uncertainties. Whether you prefer a cautious stance, seek growth, or value stability, invest confidently and build a strong foundation for your future.</Paragraph>
                <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Our experts are here to assist you with your insurance assessment, ensuring the right coverage for your needs.</Paragraph>
              </Card>
            </Col>
            <Col xs={24} lg={12}>
              <Card className="glass-panel" bordered={false} style={{ height: '100%' }}>
                <Title level={3}>Tailored Strategies</Title>
                <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Simplifying your financial journey with thoughtfully assembled portfolios built for steady, long-term growth. These ready-made selections offer a balanced combination of Stocks, Actively Managed Equity Funds, Index Funds/ETFs, and Debt Funds—delivering a diversified approach to different comfort levels.</Paragraph>
                <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Portfolios come in three categories—Conservative, Moderate, and Aggressive—so you can pick the one that fits your personal objectives and comfort with risk.</Paragraph>
              </Card>
            </Col>
          </Row>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductPage;
