import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { motion } from 'framer-motion';
import HeroCarousel from '../../components/ui/HeroCarousel';

const { Title, Paragraph } = Typography;

const FinancialAssessment: React.FC = () => {
  const images = [
    'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg',
    'https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg',
    'https://images.pexels.com/photos/210990/pexels-photo-210990.jpeg',
    'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg'
  ];

  return (
    <div style={{ minHeight: '80vh' }}>
      <HeroCarousel 
        title="Financial Assessment" 
        description="A holistic view of your life-long financial needs informs the development of a customized strategy to help you achieve them." 
        images={images} 
      />
      <div style={{ padding: '0 5% 6rem' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
          <Row gutter={[32, 32]}>
            <Col xs={24} lg={12}>
              <Card className="glass-panel" bordered={false} style={{ height: '100%' }}>
                <Title level={3}>360° Financial Assessment</Title>
                <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                  Our 360° financial assessment method utilizes a unique, proprietary, and scientific approach to comprehensively evaluate all your future financial needs. This holistic perspective enables the creation of a well-structured course of action to secure your long-term financial well-being.
                </Paragraph>
                <Title level={4} style={{ marginTop: '2rem' }}>Need for Assessment</Title>
                <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                  Everyone has aspirations, such as owning a car, purchasing a home, ensuring education, or enjoying retirement. With rising costs and inflation, achieving these goals may seem challenging. A structured Financial Assessment enables you to take a strategic approach.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} lg={12}>
              <Card className="glass-panel" bordered={false} style={{ height: '100%' }}>
                <Title level={3}>Importance of Planning</Title>
                <ul style={{ fontSize: '1.1rem', color: 'var(--text-primary)', paddingLeft: '20px', lineHeight: '2' }}>
                  <li><strong>Investment Decisions:</strong> Grow your wealth strategically.</li>
                  <li><strong>Cash Flow Management:</strong> Ensure liquidity for assets and meet periodic cash needs.</li>
                  <li><strong>Tax Optimization:</strong> Reduce tax liabilities and increase your net income.</li>
                  <li><strong>Insurance Planning:</strong> Safeguard your family, assets, and yourself.</li>
                  <li><strong>Children’s Future:</strong> Secure a strong financial foundation.</li>
                  <li><strong>Retirement Planning:</strong> Enjoy a stress-free and financially independent retirement.</li>
                </ul>
              </Card>
            </Col>
          </Row>
        </motion.div>
      </div>
    </div>
  );
};

export default FinancialAssessment;
