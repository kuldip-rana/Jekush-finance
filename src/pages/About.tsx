import React from 'react';
import { Typography, Row, Col, Timeline, Card } from 'antd';
import { motion } from 'framer-motion';

const { Title, Text, Paragraph } = Typography;

const About: React.FC = () => {
  return (
    <div style={{ padding: '6rem 5%', minHeight: '80vh' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Title level={1}>Our Journey</Title>
        <Paragraph style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', marginBottom: '4rem' }}>
          For over three decades, VDAS has been at the forefront of financial advisory in India. 
          Our mission is to democratize wealth management through transparency, technology, and trust.
        </Paragraph>
      </motion.div>

      <Row gutter={[48, 48]}>
        <Col xs={24} md={12}>
          <Title level={3}>33+ Years of Excellence</Title>
          <Timeline
            items={[
              {
                color: 'var(--accent-color)',
                children: (
                  <>
                    <Text style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>1991 - Inception</Text>
                    <p style={{ color: 'var(--text-secondary)' }}>Started with a vision to guide families towards financial stability.</p>
                  </>
                ),
              },
              {
                color: 'var(--accent-color)',
                children: (
                  <>
                    <Text style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>2005 - Expansion</Text>
                    <p style={{ color: 'var(--text-secondary)' }}>Crossed 1000+ satisfied families and expanded services to comprehensive wealth management.</p>
                  </>
                ),
              },
              {
                color: 'var(--accent-color)',
                children: (
                  <>
                    <Text style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>2020 - Digital Transformation</Text>
                    <p style={{ color: 'var(--text-secondary)' }}>Launched next-gen tools for seamless client portfolio tracking and assessment.</p>
                  </>
                ),
              },
              {
                color: 'var(--success-color)',
                children: (
                  <>
                    <Text style={{ color: 'var(--success-color)', fontWeight: 'bold' }}>Present - Industry Leaders</Text>
                    <p style={{ color: 'var(--text-secondary)' }}>Recognized among the city's top distributors, managing over ₹1.2K Cr AUM.</p>
                  </>
                ),
              },
            ]}
          />
        </Col>
        <Col xs={24} md={12}>
          <Card className="glass-panel" bordered={false}>
            <Title level={4}>Why Choose Us?</Title>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: '2', paddingLeft: '20px' }}>
              <li><strong>Fiduciary Duty:</strong> Your interests always come first.</li>
              <li><strong>Data-Driven:</strong> Decisions backed by deep quantitative analysis.</li>
              <li><strong>Holistic Approach:</strong> We look at your entire financial lifecycle.</li>
              <li><strong>Transparency:</strong> Clear fee structures and regular reporting.</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default About;
