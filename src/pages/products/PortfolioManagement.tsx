import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const ProductPage: React.FC = () => {
  return (
    <div style={{ padding: '6rem 5%', minHeight: '80vh' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Title level={1}>Portfolio Management Services</Title>
        <Row gutter={[48, 48]} style={{ marginTop: '3rem' }} align="middle">
          <Col xs={24} lg={12}>
            <Card className="glass-panel" bordered={false}>
              <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Our portfolio management approach is personalized and data-driven, focusing on enhancing your investments through careful analysis of market movements, individual risk appetite, and long-term goals. We build a thoughtfully diversified portfolio aimed at improving performance while managing exposure to potential risks. With ongoing monitoring and adjustments, we work to support steady, long-term progress.</Paragraph>
              <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Our experts are here to assist you with personalized portfolio management strategies.</Paragraph>
              <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Portfolio Management Service provides personalized handling of your assets, with a focus on delivering balanced performance in line with your risk profile. It eliminates the need for constant tracking by offering regular reviews and proactive risk oversight. This makes it a suitable option for individuals seeking a refined and hands-off approach to managing substantial capital.</Paragraph>
              <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>The portfolio is overseen by experienced market specialists with a strong background in equities. They manage assets in alignment with the approach shared with clients, ensuring consistency and transparency throughout the process.</Paragraph>
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }}>
              <img 
                src="https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg" 
                alt="Portfolio Management Services" 
                style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', objectFit: 'cover', aspectRatio: '4/3' }} 
              />
            </motion.div>
          </Col>
        </Row>
      </motion.div>
    </div>
  );
};

export default ProductPage;
