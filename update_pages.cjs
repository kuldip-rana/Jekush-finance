const fs = require('fs');
const path = require('path');

const companyProfileContent = `import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const CompanyProfile: React.FC = () => {
  return (
    <div style={{ padding: '6rem 5%', minHeight: '80vh' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Title level={1}>Company Profile</Title>
        <Paragraph style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', marginBottom: '4rem' }}>
          Smart Moves for a Brighter Tomorrow. Discover the story and mission behind VDAS.
        </Paragraph>
        
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
            <Card className="glass-panel" bordered={false} style={{ height: '100%', marginBottom: '2rem' }}>
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
  );
};

export default CompanyProfile;
`;

const ourTeamsContent = `import React from 'react';
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
`;

const financeAssessmentContent = `import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const FinancialAssessment: React.FC = () => {
  return (
    <div style={{ padding: '6rem 5%', minHeight: '80vh' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Title level={1}>Financial Assessment</Title>
        <Paragraph style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', marginBottom: '4rem' }}>
          A holistic view of your life-long financial needs informs the development of a customized strategy to help you achieve them.
        </Paragraph>
        
        <Row gutter={[32, 32]}>
          <Col xs={24} lg={12}>
            <Card className="glass-panel" bordered={false} style={{ height: '100%' }}>
              <Title level={3}>360° Financial Assessment</Title>
              <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                Our 360° financial assessment method utilizes a unique, proprietary, and scientific approach to comprehensively evaluate all your future financial needs. This holistic perspective enables the creation of a well-structured course of action to secure your long-term financial well-being.
              </Paragraph>
              <Title level={4} style={{ marginTop: '2rem' }}>Need for Assessment</Title>
              <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                Everyone has aspirations, such as owning a car, purchasing a home, ensuring education, or enjoying retirement. With rising costs and inflation, achieving these goals may seem challenging. A structured Financial Assessment enables you to take a strategic approach.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <Card className="glass-panel" bordered={false} style={{ height: '100%' }}>
              <Title level={3}>Importance of Planning</Title>
              <ul style={{ fontSize: '1.1rem', color: 'var(--text-primary)', paddingLeft: '20px', lineHeight: '2' }}>
                <li><strong>Investment Decisions:</strong> Grow your wealth strategically.</li>
                <li><strong>Cash Flow Management:</strong> Ensure liquidity for assets and meet periodic cash needs.</li>
                <li><strong>Tax Optimization:</strong> Reduce tax liabilities and increase your net income.</li>
                <li><strong>Insurance Planning:</strong> Safeguard your family, assets, and yourself.</li>
                <li><strong>Children’s Future:</strong> Secure a strong financial foundation.</li>
                <li><strong>Retirement Planning:</strong> Enjoy a stress-free and financially independent retirement.</li>
              </ul>
            </Card>
          </Col>
        </Row>
      </motion.div>
    </div>
  );
};

export default FinancialAssessment;
`;

const insuranceAssessmentContent = `import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const InsuranceAssessment: React.FC = () => {
  return (
    <div style={{ padding: '6rem 5%', minHeight: '80vh' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Title level={1}>Insurance Assessment</Title>
        <Paragraph style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', marginBottom: '4rem' }}>
          Get a personalized insurance assessment with VDAS to evaluate coverage gaps and ensure you have the right protection for every stage of life.
        </Paragraph>
        
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
  );
};

export default InsuranceAssessment;
`;

const retirementAssessmentContent = `import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const RetirementAssessment: React.FC = () => {
  return (
    <div style={{ padding: '6rem 5%', minHeight: '80vh' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Title level={1}>Retirement Assessment</Title>
        <Paragraph style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', marginBottom: '4rem' }}>
          We take a thorough approach to understanding your future goals, developing a personalized path that supports long-term security and peace of mind in your later years.
        </Paragraph>
        
        <Row gutter={[32, 32]}>
          <Col xs={24}>
            <Card className="glass-panel" bordered={false}>
              <Title level={3}>Assessment with VDAS Team</Title>
              <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                We take a thorough and thoughtful approach to understanding your long-term needs for life after work. By examining important details—like future expenses, current resources, and possible income streams—we shape a plan that reflects your individual goals. This tailored process is designed to support lasting comfort and confidence, so you can look ahead to a fulfilling and stress-free chapter.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24}>
            <Card className="glass-panel" bordered={false}>
              <Title level={3}>Understanding Retirement Planning</Title>
              <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                Preparing for life after work means taking deliberate steps to ensure lasting comfort and security. This process involves setting clear goals, reviewing current resources, estimating future needs, and creating a sustainable path forward.
              </Paragraph>
              <ul style={{ fontSize: '1.1rem', color: 'var(--text-primary)', paddingLeft: '20px', lineHeight: '2' }}>
                <li><strong>Long-Term Security:</strong> Helps ensure you have sufficient resources to cover everyday needs.</li>
                <li><strong>Early Action & Growth:</strong> Getting started sooner allows your resources to grow steadily.</li>
                <li><strong>Balanced Approach:</strong> Spreads exposure across different areas.</li>
                <li><strong>Smart Use of Tax Rules:</strong> Makes the most of available options.</li>
                <li><strong>Confidence in the Future:</strong> Brings clarity and stability.</li>
                <li><strong>Cost of Living Protection:</strong> Aims to keep your resources growing in step with rising prices.</li>
              </ul>
            </Card>
          </Col>
        </Row>
      </motion.div>
    </div>
  );
};

export default RetirementAssessment;
`;

fs.writeFileSync(path.join(__dirname, 'src/pages/about/CompanyProfile.tsx'), companyProfileContent);
fs.writeFileSync(path.join(__dirname, 'src/pages/about/OurTeams.tsx'), ourTeamsContent);
fs.writeFileSync(path.join(__dirname, 'src/pages/services/FinancialAssessment.tsx'), financeAssessmentContent);
fs.writeFileSync(path.join(__dirname, 'src/pages/services/InsuranceAssessment.tsx'), insuranceAssessmentContent);
fs.writeFileSync(path.join(__dirname, 'src/pages/services/RetirementAssessment.tsx'), retirementAssessmentContent);

console.log("Updated 5 subpages with scraped content successfully!");
