import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { motion } from 'framer-motion';
import HeroCarousel from '../../components/ui/HeroCarousel';

const { Title, Paragraph } = Typography;

const RetirementAssessment: React.FC = () => {
  const images = [
    'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg',
    'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    'https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg',
    'https://images.pexels.com/photos/259165/pexels-photo-259165.jpeg'
  ];

  return (
    <div style={{ minHeight: '80vh' }}>
      <HeroCarousel 
        title="Retirement Assessment" 
        description="We take a thorough approach to understanding your future goals, developing a personalized path that supports long-term security and peace of mind in your later years." 
        images={images} 
      />
      <div style={{ padding: '0 5% 6rem' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
          <Row gutter={[32, 32]}>
            <Col xs={24}>
              <Card className="glass-panel" bordered={false}>
                <Title level={3}>Assessment with VDAS Team</Title>
                <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                  We take a thorough and thoughtful approach to understanding your long-term needs for life after work. By examining important details—like future expenses, current resources, and possible income streams—we shape a plan that reflects your individual goals. This tailored process is designed to support lasting comfort and confidence, so you can look ahead to a fulfilling and stress-free chapter.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24}>
              <Card className="glass-panel" bordered={false}>
                <Title level={3}>Understanding Retirement Planning</Title>
                <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                  Preparing for life after work means taking deliberate steps to ensure lasting comfort and security. This process involves setting clear goals, reviewing current resources, estimating future needs, and creating a sustainable path forward.
                </Paragraph>
                <ul style={{ fontSize: '1.1rem', color: 'var(--text-primary)', paddingLeft: '20px', lineHeight: '2' }}>
                  <li><strong>Long-Term Security:</strong> Helps ensure you have sufficient resources to cover everyday needs.</li>
                  <li><strong>Early Action & Growth:</strong> Getting started sooner allows your resources to grow steadily.</li>
                  <li><strong>Balanced Approach:</strong> Spreads exposure across different areas.</li>
                  <li><strong>Smart Use of Tax Rules:</strong> Makes the most of available options.</li>
                  <li><strong>Confidence in the Future:</strong> Brings clarity and stability.</li>
                  <li><strong>Cost of Living Protection:</strong> Aims to keep your resources growing in step with rising prices.</li>
                </ul>
              </Card>
            </Col>
          </Row>
        </motion.div>
      </div>
    </div>
  );
};

export default RetirementAssessment;
