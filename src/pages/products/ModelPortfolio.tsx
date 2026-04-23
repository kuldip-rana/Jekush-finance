import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const ProductPage: React.FC = () => {
  return (
    <div style={{ padding: '6rem 5%', minHeight: '80vh' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Title level={1}>Model Portfolio</Title>
        <Row gutter={[48, 48]} style={{ marginTop: '3rem' }} align="middle">
          <Col xs={24} lg={12}>
            <Card className="glass-panel" bordered={false}>
              <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Streamline your investment path with portfolios designed to fit your goals and comfort with risk. At VDAS, we offer diversified, well-balanced options aimed at steady progress while managing uncertainties. Whether you prefer a cautious stance, seek growth, or value stability, invest confidently and build a strong foundation for your future.</Paragraph>
              <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Our experts are here to assist you with your insurance assessment, ensuring the right coverage for your needs.</Paragraph>
              <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Simplifying your financial journey with thoughtfully assembled portfolios built for steady, long-term growth. These ready-made selections offer a balanced combination of Stocks, Actively Managed Equity Funds, Index Funds/ETFs, and Debt Funds—delivering a diversified approach to different comfort levels.</Paragraph>
              <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Portfolios come in three categories—Conservative, Moderate, and Aggressive—so you can pick the one that fits your personal objectives and comfort with risk.</Paragraph>
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }}>
              <img 
                src="https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg" 
                alt="Model Portfolio" 
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
