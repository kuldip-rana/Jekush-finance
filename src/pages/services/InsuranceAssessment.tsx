import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { motion } from 'framer-motion';
import HeroCarousel from '../../components/ui/HeroCarousel';

const { Title, Paragraph } = Typography;

const InsuranceAssessment: React.FC = () => {
  const images = [
    'https://images.pexels.com/photos/8297341/pexels-photo-8297341.jpeg',
    'https://images.pexels.com/photos/259165/pexels-photo-259165.jpeg',
    'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg'
  ];

  return (
    <div style={{ minHeight: '80vh' }}>
      <HeroCarousel 
        title="Insurance Assessment" 
        description="Get a personalized insurance assessment with VDAS to evaluate coverage gaps and ensure you have the right protection for every stage of life." 
        images={images} 
      />
      <div style={{ padding: '0 5% 6rem' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
          <Row gutter={[32, 32]}>
            <Col xs={24}>
              <Card className="glass-panel" bordered={false}>
                <Title level={3}>Insurance Assessment with VDAS Team</Title>
                <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                  Insurance assessment is the process of evaluating risks, damages, or claims to determine the coverage, compensation, or premium for an insurance policy. It involves assessing various factors, including the insured asset, the extent of damage (in case of a claim), and the potential risks associated with the policyholder.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} lg={12}>
              <Card className="glass-panel" bordered={false} style={{ height: '100%' }}>
                <Title level={3}>Risk Management Solutions</Title>
                <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                  We help businesses recognize and navigate challenges that could affect their operations. Through detailed risk evaluation and support, we assist decision-makers in spotting potential issues, reducing exposure, and strengthening overall outcomes. Our approach keeps organizations focused on their priorities while establishing reliable methods to monitor and respond to evolving risks.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} lg={12}>
              <Card className="glass-panel" bordered={false} style={{ height: '100%' }}>
                <Title level={3}>Claims Management</Title>
                <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                  Understanding insurance can be overwhelming—especially when it comes to interpreting complex policies or managing claims. Backed by years of hands-on experience and deep industry connections, we’re equipped to manage even the most detailed or sensitive claim situations. We take a thorough, practical approach to evaluating each case, advocating for timely and fair outcomes.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </motion.div>
      </div>
    </div>
  );
};

export default InsuranceAssessment;
