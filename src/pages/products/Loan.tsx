import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { motion } from 'framer-motion';
import HeroCarousel from '../../components/ui/HeroCarousel';

const { Title, Paragraph } = Typography;

const ProductPage: React.FC = () => {
  const images = [
    'https://images.pexels.com/photos/2068975/pexels-photo-2068975.jpeg',
    'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg',
    'https://images.pexels.com/photos/259165/pexels-photo-259165.jpeg'
  ];

  return (
    <div style={{ minHeight: '80vh' }}>
      <HeroCarousel 
        title="Loan Against Securities" 
        description="Tap into instant liquidity with LAS—a secured credit option that lets you access funds without affecting your portfolio’s potential." 
        images={images} 
      />
      <div style={{ padding: '0 5% 6rem' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
          <Row gutter={[32, 32]}>
            <Col xs={24} lg={12}>
              <Card className="glass-panel" bordered={false} style={{ height: '100%' }}>
                <Title level={3}>Instant Liquidity</Title>
                <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Tap into instant liquidity with LAS—a secured credit option that lets you access funds without affecting your portfolio’s potential, offering flexibility for those seeking solutions without interrupting their financial objectives.</Paragraph>
                <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Our experts are here to help you make the most of your investments through smart, flexible Loan Against Securities solutions.</Paragraph>
              </Card>
            </Col>
            <Col xs={24} lg={12}>
              <Card className="glass-panel" bordered={false} style={{ height: '100%' }}>
                <Title level={3}>How It Works</Title>
                <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>A Loan Against Securities (LAS) is a secured borrowing option where individuals or businesses use their financial holdings as collateral. Instead of selling shares, bonds, or other assets, this approach allows access to funds while maintaining exposure to potential market gains and payouts.</Paragraph>
                <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Ideal for short-term financial needs—such as working capital or personal expenses—LAS lets you leverage a portion of your holdings’ market value. Interest applies only on the utilized amount.</Paragraph>
              </Card>
            </Col>
          </Row>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductPage;
