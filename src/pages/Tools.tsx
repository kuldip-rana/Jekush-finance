import React, { useState } from 'react';
import { Typography, Row, Col, Card, Slider, Statistic, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const { Title, Text } = Typography;

const Tools: React.FC = () => {
  const navigate = useNavigate();
  const [monthlyInvest, setMonthlyInvest] = useState(10000);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(12);

  const calculateSIP = () => {
    const monthlyRate = rate / 12 / 100;
    const months = years * 12;
    const futureValue = monthlyInvest * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    return Math.round(futureValue);
  };

  const totalInvested = monthlyInvest * years * 12;
  const wealthGained = calculateSIP() - totalInvested;

  return (
    <div style={{ padding: '6rem 5%', minHeight: '80vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', marginBottom: '2rem' }}>
        <Button 
          type="text" 
          icon={<ArrowLeftOutlined />} 
          onClick={() => navigate('/')} 
          style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}
        >
          Back to Home
        </Button>
      </div>
      <Title level={1} style={{ textAlign: 'center', marginBottom: '4rem' }}>Financial Tools</Title>

      <Row justify="center">
        <Col xs={24} lg={16}>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <Card className="glass-panel" bordered={false} bodyStyle={{ padding: '3rem' }} style={{ borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
              <Row gutter={[64, 48]}>
                <Col xs={24} md={12}>
                  <Title level={3} style={{ marginBottom: '3rem', fontSize: '1.8rem' }}>SIP Calculator</Title>
                  <div style={{ marginBottom: '3rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <Text style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Monthly Investment</Text>
                      <Text style={{ color: 'var(--accent-color)', fontWeight: 'bold', fontSize: '1.2rem' }}>₹{monthlyInvest.toLocaleString()}</Text>
                    </div>
                    <Slider min={500} max={100000} step={500} value={monthlyInvest} onChange={setMonthlyInvest} tooltip={{ formatter: null }} />
                  </div>
                  <div style={{ marginBottom: '3rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <Text style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Expected Return Rate (p.a)</Text>
                      <Text style={{ color: 'var(--accent-color)', fontWeight: 'bold', fontSize: '1.2rem' }}>{rate}%</Text>
                    </div>
                    <Slider min={5} max={30} value={rate} onChange={setRate} tooltip={{ formatter: null }} />
                  </div>
                  <div style={{ marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <Text style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Time Period (Years)</Text>
                      <Text style={{ color: 'var(--accent-color)', fontWeight: 'bold', fontSize: '1.2rem' }}>{years} Yr</Text>
                    </div>
                    <Slider min={1} max={40} value={years} onChange={setYears} tooltip={{ formatter: null }} />
                  </div>
                </Col>
                <Col xs={24} md={12}>
                  <div style={{ 
                    background: 'linear-gradient(145deg, #0f172a 0%, #1e293b 100%)', 
                    padding: '3rem', 
                    borderRadius: '20px', 
                    height: '100%',
                    boxShadow: '0 20px 40px rgba(15, 23, 42, 0.2)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}>
                    <Statistic 
                      title={<span style={{ color: 'rgba(248, 250, 252, 0.7)', fontSize: '1rem' }}>Invested Amount</span>} 
                      value={totalInvested} 
                      prefix="₹" 
                      valueStyle={{ color: '#f8fafc', marginBottom: '2rem', fontSize: '1.8rem', fontWeight: 500 }} 
                    />
                    <Statistic 
                      title={<span style={{ color: 'rgba(248, 250, 252, 0.7)', fontSize: '1rem' }}>Est. Returns</span>} 
                      value={wealthGained} 
                      prefix="₹" 
                      valueStyle={{ color: '#34d399', marginBottom: '2rem', fontSize: '1.8rem', fontWeight: 500 }} 
                    />
                    <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', margin: '1rem 0 2rem 0' }}></div>
                    <Statistic 
                      title={<span style={{ color: '#f8fafc', fontWeight: 600, fontSize: '1.1rem' }}>Total Value</span>} 
                      value={calculateSIP()} 
                      prefix="₹" 
                      valueStyle={{ color: '#EE7F1A', fontWeight: 'bold', fontSize: '2.5rem' }} 
                    />
                  </div>
                </Col>
              </Row>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};

export default Tools;
