import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { motion } from 'framer-motion';
import HeroCarousel from '../../components/ui/HeroCarousel';

const { Title, Paragraph } = Typography;

const ProductPage: React.FC = () => {
  const images = [
    'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg',
    'https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg',
    'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg'
  ];

  return (
    <div style={{ minHeight: '80vh' }}>
      <HeroCarousel 
        title="Mutual Funds" 
        description="Provide an easy way to help your savings grow by spreading resources across different areas and managed by experienced professionals." 
        images={images} 
      />
      <div style={{ padding: '0 5% 6rem' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
          <Row gutter={[32, 32]}>
            <Col xs={24} lg={12}>
              <Card className="glass-panel" bordered={false} style={{ height: '100%' }}>
                <Title level={3}>Growth & Consistency</Title>
                <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Mutual funds provide an easy way to help your savings grow by spreading resources across different areas and managed by experienced professionals. At VDAS Team, we offer personalized support to your unique goals. Whether you’re focused on steady growth, consistent income, or tax advantages, we’re here to help you make the most of your options. Begin your journey toward greater financial confidence today!</Paragraph>
              </Card>
            </Col>
            <Col xs={24} lg={12}>
              <Card className="glass-panel" bordered={false} style={{ height: '100%' }}>
                <Title level={3}>Expert Assistance</Title>
                <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Our experts are here to assist you with your insurance assessment, ensuring the right coverage for your needs.</Paragraph>
                <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Be among the first to explore fresh opportunities, diversify your holdings, and potentially benefit from early growth by acting quickly.</Paragraph>
                <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Stay informed about Net Asset Value (NAV) and invest with ease through FundsIndia—a smooth gateway to NFO participation.</Paragraph>
              </Card>
            </Col>
          </Row>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductPage;
