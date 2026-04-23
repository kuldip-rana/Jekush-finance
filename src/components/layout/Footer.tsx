import React from 'react';
import { Row, Col, Typography, Space } from 'antd';
import { Link } from 'react-router-dom';
import {
  FacebookFilled,
  InstagramOutlined,
  GoogleOutlined,
  RightOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Text } = Typography;

const Footer: React.FC = () => {
  const headerStyle: React.CSSProperties = {
    color: 'var(--text-primary)',
    borderLeft: '3px solid var(--accent-color)',
    paddingLeft: '12px',
    marginBottom: '1.5rem',
    fontSize: '1.2rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '1px'
  };

  const linkStyle: React.CSSProperties = {
    color: 'var(--text-secondary)',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '12px',
    fontSize: '0.95rem',
    transition: 'color 0.3s ease'
  };

  const loginButtonStyle: React.CSSProperties = {
    width: '100%',
    height: '45px',
    background: '#ffffff',
    color: 'var(--accent-color)',
    border: 'none',
    borderRadius: '4px',
    fontWeight: 600,
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 15px rgba(238, 127, 26, 0.4)',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  };

  return (
    <footer style={{ background: '#0a1128', padding: '5rem 5% 2rem', borderTop: '1px solid var(--border-color)' }}>
      <Row gutter={[48, 48]}>
        {/* Column 1: About Us & Social Media */}
        <Col xs={24} sm={12} lg={6}>
          <div style={headerStyle}>ABOUT US</div>
          <Text style={{ color: 'var(--text-secondary)', display: 'block', marginBottom: '2.5rem', fontSize: '0.95rem', lineHeight: '1.8' }}>
            At VDAS Team, we enable individuals and families to manage their resources effectively as a mutual fund distributor.
          </Text>

          <div style={headerStyle}>SOCIAL MEDIA</div>
          <Space size="large" style={{ fontSize: '1.5rem' }}>
            <a href="#" style={{ color: 'var(--text-primary)' }}><FacebookFilled /></a>
            <a href="#" style={{ color: 'var(--text-primary)' }}><InstagramOutlined /></a>
            <a href="#" style={{ color: 'var(--text-primary)' }}><GoogleOutlined /></a>
          </Space>
        </Col>

        {/* Column 2: Services */}
        <Col xs={24} sm={12} lg={6}>
          <div style={headerStyle}>SERVICES</div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Link to="/services/finance" className="footer-link" style={linkStyle}>
              <RightOutlined style={{ fontSize: '0.7rem', color: 'var(--accent-color)' }} /> Financial Assessment
            </Link>
            <Link to="/services/insurance" className="footer-link" style={linkStyle}>
              <RightOutlined style={{ fontSize: '0.7rem', color: 'var(--accent-color)' }} /> Insurance Assessment
            </Link>
            <Link to="/services/retirement" className="footer-link" style={linkStyle}>
              <RightOutlined style={{ fontSize: '0.7rem', color: 'var(--accent-color)' }} /> Retirement Assessment
            </Link>
            <Link to="/products/portfolio-management" className="footer-link" style={linkStyle}>
              <RightOutlined style={{ fontSize: '0.7rem', color: 'var(--accent-color)' }} /> Portfolio Management Services
            </Link>
            <Link to="/products/real-estate" className="footer-link" style={linkStyle}>
              <RightOutlined style={{ fontSize: '0.7rem', color: 'var(--accent-color)' }} /> Real Estate (REITS)
            </Link>
            <Link to="/products/insurance" className="footer-link" style={linkStyle}>
              <RightOutlined style={{ fontSize: '0.7rem', color: 'var(--accent-color)' }} /> Insurance
            </Link>
          </div>
        </Col>

        {/* Column 3: Products */}
        <Col xs={24} sm={12} lg={6}>
          <div style={headerStyle}>PRODUCTS</div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Link to="/products/mutual-funds" className="footer-link" style={linkStyle}>
              <RightOutlined style={{ fontSize: '0.7rem', color: 'var(--accent-color)' }} /> Mutual Funds
            </Link>
            <Link to="/products/model-portfolio" className="footer-link" style={linkStyle}>
              <RightOutlined style={{ fontSize: '0.7rem', color: 'var(--accent-color)' }} /> Model Portfolio
            </Link>
            <Link to="/products/equity" className="footer-link" style={linkStyle}>
              <RightOutlined style={{ fontSize: '0.7rem', color: 'var(--accent-color)' }} /> Direct Equity & ETF's
            </Link>
            <Link to="/products/alternate-investment" className="footer-link" style={linkStyle}>
              <RightOutlined style={{ fontSize: '0.7rem', color: 'var(--accent-color)' }} /> Alternate-Investment-Fund
            </Link>
            <Link to="/products/loan" className="footer-link" style={linkStyle}>
              <RightOutlined style={{ fontSize: '0.7rem', color: 'var(--accent-color)' }} /> Loan Against Securities
            </Link>
            <Link to="/products/succession-planning" className="footer-link" style={linkStyle}>
              <RightOutlined style={{ fontSize: '0.7rem', color: 'var(--accent-color)' }} /> Succession Planning
            </Link>
          </div>
        </Col>

        {/* Column 4: Client Logins */}
        <Col xs={24} sm={12} lg={6}>
          <div style={headerStyle}>CLIENT LOGINS</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(238, 127, 26, 0.8)' }}
              style={loginButtonStyle}
            >
              NJ E-Wealth Login
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(238, 127, 26, 0.8)' }}
              style={loginButtonStyle}
            >
              NJ Client Desk Login
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(238, 127, 26, 0.8)' }}
              style={loginButtonStyle}
            >
              MOSL Login
            </motion.a>
          </div>
        </Col>
      </Row>

      {/* Bottom Bar */}
      <div style={{
        marginTop: '4rem',
        paddingTop: '2rem',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <Text style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          © 2025 VishwasDeshpande. All Rights Reserved.
        </Text>
        <Text style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          Handcrafted By <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Kuldip</span>
        </Text>
      </div>
    </footer>
  );
};

export default Footer;
