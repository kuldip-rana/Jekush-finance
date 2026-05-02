import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { motion } from 'framer-motion';
import HeroCarousel from '../../components/ui/HeroCarousel';

const { Title, Paragraph } = Typography;

const ProductPage: React.FC = () => {
  const images = [
    'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg',
    'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg',
    'https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg'
  ];

  return (
    <div style={{ minHeight: '80vh' }}>
      <HeroCarousel 
        title="Portfolio Management Services" 
        description="Our portfolio management approach is personalized and data-driven, focusing on enhancing your investments." 
        images={images} 
      />
      <div style={{ padding: '0 5% 6rem' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
          <Row gutter={[32, 32]}>
            <Col xs={24} lg={12}>
              <Card className="glass-panel" bordered={false} style={{ height: '100%' }}>
                <Title level={3}>Data-Driven Approach</Title>
                <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Our portfolio management approach is personalized and data-driven, focusing on enhancing your investments through careful analysis of market movements, individual risk appetite, and long-term goals. We build a thoughtfully diversified portfolio aimed at improving performance while managing exposure to potential risks. With ongoing monitoring and adjustments, we work to support steady, long-term progress.</Paragraph>
                <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Our experts are here to assist you with personalized portfolio management strategies.</Paragraph>
              </Card>
            </Col>
            <Col xs={24} lg={12}>
              <Card className="glass-panel" bordered={false} style={{ height: '100%' }}>
                <Title level={3}>Expert Oversight</Title>
                <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Portfolio Management Service provides personalized handling of your assets, with a focus on delivering balanced performance in line with your risk profile. It eliminates the need for constant tracking by offering regular reviews and proactive risk oversight. This makes it a suitable option for individuals seeking a refined and hands-off approach to managing substantial capital.</Paragraph>
                <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>The portfolio is overseen by experienced market specialists with a strong background in equities. They manage assets in alignment with the approach shared with clients, ensuring consistency and transparency throughout the process.</Paragraph>
              </Card>
            </Col>
          </Row>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductPage;
