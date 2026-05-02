import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Row, Col, Card, Button, Statistic } from 'antd';
import { motion } from 'framer-motion';
import { SafetyCertificateOutlined, StockOutlined, UsergroupAddOutlined, ArrowRightOutlined } from '@ant-design/icons';
import GrowthChart from '../components/charts/GrowthChart';

const { Title, Text, Paragraph } = Typography;

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        minHeight: '90vh', 
        display: 'flex', 
        alignItems: 'center', 
        position: 'relative',
        overflow: 'hidden',
        padding: '0 5%'
      }}>
        {/* Background ambient glow */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
          filter: 'blur(40px)',
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
          zIndex: 0
        }} />

        <Row style={{ width: '100%', zIndex: 1 }} align="middle">
          <Col xs={24} lg={14}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div style={{ display: 'inline-block', padding: '6px 12px', background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: '20px', marginBottom: '1.5rem' }}>
                <Text style={{ color: 'var(--accent-color)', fontWeight: 500, fontSize: '0.875rem' }}>SEBI Registered & RBI Compliant</Text>
              </div>
              <Title style={{ fontSize: '4rem', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Engineering <br/> <span className="gradient-text">Financial Freedom</span>
              </Title>
              <Paragraph style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '2.5rem' }}>
                A premium, data-driven approach to wealth management. 
                Experience 33+ years of expertise distilled into intelligent investment strategies.
              </Paragraph>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button type="primary" size="large" style={{ height: '54px', padding: '0 32px', fontSize: '1.1rem' }} onClick={() => navigate('/services/finance')}>
                  Start Your Assessment
                </Button>
                <Button size="large" style={{ height: '54px', padding: '0 32px', fontSize: '1.1rem', background: 'transparent', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} onClick={() => navigate('/products/model-portfolio')}>
                  View Performance
                </Button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              style={{ display: 'flex', gap: '3rem', marginTop: '4rem' }}
            >
              <div>
                <Title level={3} style={{ margin: 0 }}>5000+</Title>
                <Text style={{ color: 'var(--text-secondary)' }}>Satisfied Families</Text>
              </div>
              <div>
                <Title level={3} style={{ margin: 0 }}>33+</Title>
                <Text style={{ color: 'var(--text-secondary)' }}>Years Experience</Text>
              </div>
              <div>
                <Title level={3} style={{ margin: 0 }}>₹1.2K Cr</Title>
                <Text style={{ color: 'var(--text-secondary)' }}>AUM Managed</Text>
              </div>
            </motion.div>
          </Col>
          <Col xs={0} lg={10} style={{ position: 'relative', height: '600px' }}>
             {/* Physics-like floating elements using Framer Motion */}
             <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="glass-panel"
                style={{ position: 'absolute', top: '20%', right: '10%', padding: '2rem', width: '280px' }}
             >
                <StockOutlined style={{ fontSize: '2rem', color: 'var(--success-color)', marginBottom: '1rem' }} />
                <Title level={4} style={{ margin: 0 }}>Portfolio Growth</Title>
                <Text style={{ color: 'var(--text-secondary)' }}>+14.2% CAGR</Text>
             </motion.div>
             
             <motion.div
                animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="glass-panel"
                style={{ position: 'absolute', bottom: '25%', left: '0', padding: '1.5rem', width: '240px' }}
             >
                <SafetyCertificateOutlined style={{ fontSize: '1.8rem', color: 'var(--accent-color)', marginBottom: '1rem' }} />
                <Title level={5} style={{ margin: 0 }}>Zero Compromise</Title>
                <Text style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Bank-grade security</Text>
             </motion.div>
          </Col>
        </Row>
      </section>

      {/* Trust & Services Section */}
      <section style={{ padding: '6rem 5%', background: 'var(--bg-card)' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <Title level={2}>Comprehensive Wealth Solutions</Title>
          <Text style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Tailored strategies designed for every stage of your life.</Text>
        </div>

        <Row gutter={[24, 24]}>
          {[
            { title: 'Mutual Funds', desc: 'Curated portfolios matching your risk appetite.', icon: <StockOutlined /> },
            { title: 'Insurance Solutions', desc: 'Comprehensive life and health coverage.', icon: <SafetyCertificateOutlined /> },
            { title: 'Retirement Planning', desc: 'Secure your future with intelligent asset allocation.', icon: <UsergroupAddOutlined /> },
            { title: 'Portfolio Management', desc: 'Exclusive PMS & AIF for HNI clients.', icon: <StockOutlined /> }
          ].map((service, idx) => (
            <Col xs={24} md={12} lg={6} key={idx}>
              <motion.div whileHover={{ y: -10 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Card 
                  bordered={false} 
                  style={{ background: 'var(--bg-dark)', borderColor: 'var(--border-color)' }}
                  bodyStyle={{ padding: '2rem' }}
                >
                  <div style={{ fontSize: '2rem', color: 'var(--accent-color)', marginBottom: '1.5rem' }}>
                    {service.icon}
                  </div>
                  <Title level={4}>{service.title}</Title>
                  <Text style={{ color: 'var(--text-secondary)', display: 'block', marginBottom: '1.5rem' }}>{service.desc}</Text>
                  <Button type="link" style={{ padding: 0, color: 'var(--text-primary)' }}>
                    Learn More <ArrowRightOutlined />
                  </Button>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </section>

      {/* Data Visualization Section */}
      <section style={{ padding: '6rem 5%' }}>
        <Row align="middle" gutter={[48, 48]}>
          <Col xs={24} lg={10}>
            <Title level={2}>The Power of Compounding</Title>
            <Paragraph style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem' }}>
              Time is your greatest asset. See how small, disciplined investments today transform into massive wealth tomorrow. Our data-driven simulation proves that starting early beats trying to time the market.
            </Paragraph>
            <Row gutter={[24, 24]} style={{ marginBottom: '2rem' }}>
              <Col span={12}>
                <Statistic title={<span style={{color: 'var(--text-secondary)'}}>Monthly SIP</span>} value={10000} prefix="₹" valueStyle={{ color: 'var(--text-primary)' }} />
              </Col>
              <Col span={12}>
                <Statistic title={<span style={{color: 'var(--text-secondary)'}}>Expected Return</span>} value={12} suffix="%" valueStyle={{ color: 'var(--success-color)' }} />
              </Col>
            </Row>
            <Button type="primary" size="large" onClick={() => navigate('/tools')}>Open SIP Calculator</Button>
          </Col>
          <Col xs={24} lg={14}>
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <GrowthChart />
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Home;
