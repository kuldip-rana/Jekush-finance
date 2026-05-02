import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { motion } from 'framer-motion';
import HeroCarousel from '../../components/ui/HeroCarousel';

const { Title, Paragraph } = Typography;

const CompanyProfile: React.FC = () => {
  const images = [
    'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg',
    'https://images.pexels.com/photos/259165/pexels-photo-259165.jpeg'
  ];

  return (
    <div style={{ minHeight: '80vh' }}>
      <HeroCarousel 
        title="Company Profile" 
        description="Smart Moves for a Brighter Tomorrow. Discover the story and mission behind VDAS." 
        images={images} 
      />
      <div style={{ padding: '0 5% 6rem' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
          <Row gutter={[32, 32]}>
          <Col xs={24} lg={12}>
            <Card className="glass-panel" bordered={false} style={{ height: '100%' }}>
              <Title level={3}>Our Story</Title>
              <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                At VDAS, we are committed to helping individuals and families plan confidently for the future. With over 25 years of experience, we’ve proudly supported 5,000+ clients in building secure and goal-oriented financial journeys.
              </Paragraph>
              <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                Recognized among Mumbai’s top 5 mutual fund distributors, we work closely with trusted partners like NJ India Invest Pvt Ltd and Motilal Oswal Securities Ltd. Our consistent performance is marked by a 5-year MDRT (USA) qualification—an honor reflecting dedication and global standards.
              </Paragraph>
              <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                Through our signature programs — Sampoorna Suraksha and the Goal Achievement Programme (GAP) — we’ve enabled over 3,500 families to plan effectively for important life events such as education, marriage, and retirement.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <Card className="glass-panel" bordered={false} style={{ marginBottom: '2rem' }}>
              <Title level={3}>Our Mission</Title>
              <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                To be the most trusted Mutual Fund Distributor, empowering individuals and families to build a secure future through disciplined investing and long-term goal-focused planning.
              </Paragraph>
            </Card>
            <Card className="glass-panel" bordered={false}>
              <Title level={3}>Our Vision</Title>
              <ul style={{ fontSize: '1.1rem', color: 'var(--text-primary)', paddingLeft: '20px' }}>
                <li>Provide personalized options in mutual funds, insurance, and tax-saving investments.</li>
                <li>Help clients secure their future through Sampoorna Suraksha and the Goal Achievement Programme (GAP).</li>
                <li>Maintain our position as one of Mumbai’s top mutual fund distributors.</li>
                <li>Build long-term client relationships based on transparency, trust, and consistency.</li>
                <li>Strengthen our reach through associations with trusted financial partners.</li>
              </ul>
            </Card>
          </Col>
        </Row>
        </motion.div>
      </div>
    </div>
  );
};

export default CompanyProfile;
