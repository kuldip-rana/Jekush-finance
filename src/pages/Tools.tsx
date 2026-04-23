import React, { useState } from 'react';
import { Typography, Row, Col, Card, Slider, Statistic } from 'antd';
import { motion } from 'framer-motion';

const { Title, Text } = Typography;

const Tools: React.FC = () => {
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
      <Title level={1} style={{ textAlign: 'center', marginBottom: '4rem' }}>Financial Tools</Title>

      <Row justify="center">
        <Col xs={24} lg={16}>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <Card className="glass-panel" bordered={false}>
              <Title level={3} style={{ marginBottom: '2rem' }}>SIP Calculator</Title>
              <Row gutter={[48, 48]}>
                <Col xs={24} md={12}>
                  <div style={{ marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Text style={{ color: 'var(--text-primary)' }}>Monthly Investment</Text>
                      <Text style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>₹{monthlyInvest.toLocaleString()}</Text>
                    </div>
                    <Slider min={500} max={100000} step={500} value={monthlyInvest} onChange={setMonthlyInvest} />
                  </div>
                  <div style={{ marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Text style={{ color: 'var(--text-primary)' }}>Expected Return Rate (p.a)</Text>
                      <Text style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>{rate}%</Text>
                    </div>
                    <Slider min={5} max={30} value={rate} onChange={setRate} />
                  </div>
                  <div style={{ marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Text style={{ color: 'var(--text-primary)' }}>Time Period (Years)</Text>
                      <Text style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>{years} Yr</Text>
                    </div>
                    <Slider min={1} max={40} value={years} onChange={setYears} />
                  </div>
                </Col>
                <Col xs={24} md={12}>
                  <div style={{ background: 'rgba(15, 23, 42, 0.5)', padding: '2rem', borderRadius: '12px', height: '100%' }}>
                    <Statistic 
                      title={<span style={{ color: 'var(--text-secondary)' }}>Invested Amount</span>} 
                      value={totalInvested} 
                      prefix="₹" 
                      valueStyle={{ color: 'var(--text-primary)', marginBottom: '1rem' }} 
                    />
                    <Statistic 
                      title={<span style={{ color: 'var(--text-secondary)' }}>Est. Returns</span>} 
                      value={wealthGained} 
                      prefix="₹" 
                      valueStyle={{ color: 'var(--success-color)', marginBottom: '1rem' }} 
                    />
                    <div style={{ borderTop: '1px solid var(--border-color)', margin: '1rem 0' }}></div>
                    <Statistic 
                      title={<span style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>Total Value</span>} 
                      value={calculateSIP()} 
                      prefix="₹" 
                      valueStyle={{ color: 'var(--accent-color)', fontWeight: 'bold', fontSize: '2rem' }} 
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
