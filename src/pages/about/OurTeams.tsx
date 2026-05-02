import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { motion } from 'framer-motion';
import HeroCarousel from '../../components/ui/HeroCarousel';

const { Title, Paragraph } = Typography;

const OurTeams: React.FC = () => {
  const departments = [
    { title: 'Admin Head', desc: 'Ensuring seamless operations and administrative excellence across all branches.' },
    { title: 'Head of Departments', desc: 'Strategic leaders driving growth, compliance, and superior client satisfaction.' },
    { title: 'Operations Team', desc: 'The backbone of VDAS, executing processes with precision and speed.' },
    { title: 'Equity & Mutual Fund Team', desc: 'Expert analysts and advisors dedicated to maximizing your portfolio returns.' },
    { title: 'Insurance Team', desc: 'Specialists in risk assessment, providing you with Sampoorna Suraksha.' }
  ];

  const images = [
    'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
    'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg'
  ];

  return (
    <div style={{ minHeight: '80vh' }}>
      <HeroCarousel 
        title="Meet Our Financial Experts" 
        description="Get to know the experienced team behind VDAS—your trusted financial advisors for wealth management, investments, insurance, and more." 
        images={images} 
      />
      <div style={{ padding: '0 5% 6rem' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
          <Title level={2} style={{ marginBottom: '2rem', textAlign: 'center' }}>Core Team</Title>
        <Row gutter={[24, 24]}>
          {departments.map((dept, index) => (
            <Col xs={24} sm={12} lg={8} key={index}>
              <motion.div whileHover={{ y: -10 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Card className="glass-panel" bordered={false} style={{ height: '100%' }}>
                  <Title level={4} style={{ color: 'var(--accent-color)' }}>{dept.title}</Title>
                  <Paragraph style={{ color: 'var(--text-primary)' }}>{dept.desc}</Paragraph>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
        </motion.div>
      </div>
    </div>
  );
};

export default OurTeams;
