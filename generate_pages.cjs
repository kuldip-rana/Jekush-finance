const fs = require('fs');
const path = require('path');

const pages = [
  { path: 'src/pages/about/CompanyProfile.tsx', title: 'Company Profile' },
  { path: 'src/pages/about/OurTeams.tsx', title: 'Our Teams' },
  { path: 'src/pages/services/FinancialAssessment.tsx', title: 'Financial Assessment' },
  { path: 'src/pages/services/InsuranceAssessment.tsx', title: 'Insurance Assessment' },
  { path: 'src/pages/services/RetirementAssessment.tsx', title: 'Retirement Assessment' },
  { path: 'src/pages/products/MutualFunds.tsx', title: 'Mutual Funds' },
  { path: 'src/pages/products/Insurance.tsx', title: 'Insurance Products' },
  { path: 'src/pages/products/ModelPortfolio.tsx', title: 'Model Portfolio' },
  { path: 'src/pages/products/RealEstate.tsx', title: 'Real Estate (REITs)' },
  { path: 'src/pages/products/Equity.tsx', title: 'Direct Equity & ETFs' },
  { path: 'src/pages/products/PortfolioManagement.tsx', title: 'Portfolio Management Services' },
  { path: 'src/pages/products/AlternateInvestment.tsx', title: 'Alternate Investment Fund' },
  { path: 'src/pages/products/Loan.tsx', title: 'Loan Against Securities (LAS)' },
  { path: 'src/pages/products/SuccessionPlanning.tsx', title: 'Succession Planning' },
  { path: 'src/pages/Blogs.tsx', title: 'Our Insights & Blogs' },
];

const template = (title) => `import React from 'react';
import { Typography, Card } from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const ${title.replace(/[^a-zA-Z0-9]/g, '')}Page: React.FC = () => {
  return (
    <div style={{ padding: '6rem 5%', minHeight: '80vh' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Title level={1}>${title}</Title>
        <Paragraph style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', marginBottom: '4rem' }}>
          Welcome to the ${title} portal. This section is currently being curated with premium financial insights and data.
        </Paragraph>
        
        <Card className="glass-panel" bordered={false} style={{ minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Title level={3} style={{ color: 'var(--text-secondary)' }}>Content Coming Soon</Title>
        </Card>
      </motion.div>
    </div>
  );
};

export default ${title.replace(/[^a-zA-Z0-9]/g, '')}Page;
`;

pages.forEach(page => {
  const fullPath = path.join(__dirname, page.path);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(fullPath, template(page.title));
  console.log('Created: ' + page.path);
});
