import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const OurTeams: React.FC = () => {
  const departments = [
    { title: 'Admin Head', desc: 'Ensuring seamless operations and administrative excellence across all branches.' },
    { title: 'Head of Departments', desc: 'Strategic leaders driving growth, compliance, and superior client satisfaction.' },
    { title: 'Operations Team', desc: 'The backbone of VDAS, executing processes with precision and speed.' },
    { title: 'Equity & Mutual Fund Team', desc: 'Expert analysts and advisors dedicated to maximizing your portfolio returns.' },
    { title: 'Insurance Team', desc: 'Specialists in risk assessment, providing you with Sampoorna Suraksha.' }
  ];

  return (
    <div style={{ padding: '6rem 5%', minHeight: '80vh' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Title level={1}>Meet Our Financial Experts</Title>
        <Paragraph style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', marginBottom: '4rem' }}>
          Get to know the experienced team behind VDAS—your trusted financial advisors for wealth management, investments, insurance, and more.
        </Paragraph>
        
        <Title level={2} style={{ marginBottom: '2rem' }}>Core Team</Title>
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
  );
};

export default OurTeams;
