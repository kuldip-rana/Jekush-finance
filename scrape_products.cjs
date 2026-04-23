const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const pages = [
  { url: 'https://vishwasdeshpande.com/mutual-funds/', file: 'MutualFunds.tsx', title: 'Mutual Funds', img: 'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg' },
  { url: 'https://vishwasdeshpande.com/insurance/', file: 'Insurance.tsx', title: 'Insurance', img: 'https://images.pexels.com/photos/259165/pexels-photo-259165.jpeg' },
  { url: 'https://vishwasdeshpande.com/model-portfolio/', file: 'ModelPortfolio.tsx', title: 'Model Portfolio', img: 'https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg' },
  { url: 'https://vishwasdeshpande.com/real-estate-reits/', file: 'RealEstate.tsx', title: 'Real Estate (REITs)', img: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg' },
  { url: 'https://vishwasdeshpande.com/direct-equity-etfs/', file: 'Equity.tsx', title: 'Direct Equity & ETFs', img: 'https://images.pexels.com/photos/210990/pexels-photo-210990.jpeg' },
  { url: 'https://vishwasdeshpande.com/portfolio-management-services/', file: 'PortfolioManagement.tsx', title: 'Portfolio Management Services', img: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg' },
  { url: 'https://vishwasdeshpande.com/alternate-investment-fund/', file: 'AlternateInvestment.tsx', title: 'Alternate Investment Fund', img: 'https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg' },
  { url: 'https://vishwasdeshpande.com/las/', file: 'Loan.tsx', title: 'Loan Against Securities', img: 'https://images.pexels.com/photos/2068975/pexels-photo-2068975.jpeg' },
  { url: 'https://vishwasdeshpande.com/succession-planning/', file: 'SuccessionPlanning.tsx', title: 'Succession Planning', img: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg' }
];

const template = (title, imgUrl, paragraphs) => `import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const ProductPage: React.FC = () => {
  return (
    <div style={{ padding: '6rem 5%', minHeight: '80vh' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Title level={1}>${title}</Title>
        <Row gutter={[48, 48]} style={{ marginTop: '3rem' }} align="middle">
          <Col xs={24} lg={12}>
            <Card className="glass-panel" bordered={false}>
              ${paragraphs.map(p => `<Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>${p}</Paragraph>`).join('\n              ')}
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }}>
              <img 
                src="${imgUrl}" 
                alt="${title}" 
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
`;

async function scrapeAll() {
  for (const page of pages) {
    try {
      const response = await fetch(page.url);
      const html = await response.text();
      const $ = cheerio.load(html);
      
      // Extract paragraphs from the main content area. Assuming they are inside some container or just standard <p> tags.
      // Often Elementor sites have lots of empty <p> tags, so we filter them.
      const paragraphs = [];
      $('p').each((i, el) => {
        const text = $(el).text().trim();
        // Ignore short utility strings or empty paragraphs
        if (text.length > 50 && !text.includes('© 2025 VishwasDeshpande') && !text.includes('Handcrafted By')) {
          paragraphs.push(text.replace(/"/g, '&quot;').replace(/'/g, '&apos;'));
        }
      });
      
      // If we couldn't find paragraphs (maybe they used divs), just fallback
      if (paragraphs.length === 0) {
        paragraphs.push("Detailed information about " + page.title + " is provided by VDAS to ensure comprehensive coverage and understanding. Our experts are available to guide you through the intricacies of " + page.title + " and help you make informed decisions.");
      }

      // Limit to 4 paragraphs to keep the UI clean
      const selectedParagraphs = paragraphs.slice(0, 4);

      const fullPath = path.join(__dirname, 'src/pages/products', page.file);
      fs.writeFileSync(fullPath, template(page.title, page.img, selectedParagraphs));
      console.log('Successfully updated:', page.file);
      
      // Small delay to be nice to the server
      await new Promise(r => setTimeout(r, 500));
    } catch (err) {
      console.error('Failed to scrape', page.url, err);
    }
  }
}

scrapeAll();
