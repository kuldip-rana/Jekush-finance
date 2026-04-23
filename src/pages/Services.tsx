import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { motion } from 'framer-motion';
import { PieChartOutlined, LineChartOutlined, SafetyOutlined, HomeOutlined, BankOutlined, SolutionOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Services: React.FC = () => {
  const services = [
    { title: 'Mutual Funds', icon: <PieChartOutlined />, desc: 'Expertly curated equity, debt, and hybrid funds.' },
    { title: 'Direct Equity & ETFs', icon: <LineChartOutlined />, desc: 'For investors seeking direct market participation.' },
    { title: 'Insurance', icon: <SafetyOutlined />, desc: 'Life, Health, and General insurance tailored to your risk profile.' },
    { title: 'Real Estate (REITs)', icon: <HomeOutlined />, desc: 'Fractional real estate investment for steady yields.' },
    { title: 'Portfolio Management', icon: <BankOutlined />, desc: 'Bespoke PMS for High Net-Worth Individuals.' },
    { title: 'Succession Planning', icon: <SolutionOutlined />, desc: 'Ensuring your wealth transitions smoothly to the next generation.' },
  ];

  return (
    <div style={{ padding: '6rem 5%', minHeight: '80vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <Title level={1}>Our Services</Title>
        <Text style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>End-to-end financial solutions under one roof.</Text>
      </div>

      <Row gutter={[32, 32]}>
        {services.map((service, index) => (
          <Col xs={24} md={12} lg={8} key={index}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="glass-panel" bordered={false} style={{ height: '100%' }}>
                <div style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>
                  {service.icon}
                </div>
                <Title level={4}>{service.title}</Title>
                <Text style={{ color: 'var(--text-secondary)' }}>{service.desc}</Text>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Services;
