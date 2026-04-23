import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const ProductPage: React.FC = () => {
  return (
    <div style={{ padding: '6rem 5%', minHeight: '80vh' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Title level={1}>Succession Planning</Title>
        <Row gutter={[48, 48]} style={{ marginTop: '3rem' }} align="middle">
          <Col xs={24} lg={12}>
            <Card className="glass-panel" bordered={false}>
              <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Expertise in safeguarding your legacy through thoughtful succession strategies.</Paragraph>
              <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>From setting up trusts and drafting wills to ensuring smooth transfer of assets, we assist in protecting what matters most to you. Our approach helps secure your loved ones’ future and honors your wishes.</Paragraph>
              <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Let us support you in preserving and passing on your legacy for generations ahead.</Paragraph>
              <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Our experts help secure your legacy with smart, seamless succession planning.</Paragraph>
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }}>
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" 
                alt="Succession Planning" 
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
