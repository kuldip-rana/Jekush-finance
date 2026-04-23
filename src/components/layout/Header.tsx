import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import logo from '../../assets/cropped-logo.webp';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const aboutMenu: MenuProps['items'] = [
    { key: '1', label: <Link to="/about/company-profile">Company Profile</Link> },
    { key: '2', label: <Link to="/about/our-teams">Our Teams</Link> },
  ];

  const servicesMenu: MenuProps['items'] = [
    { key: '1', label: <Link to="/services/finance">Financial Assessment</Link> },
    { key: '2', label: <Link to="/services/insurance">Insurance Assessment</Link> },
    { key: '3', label: <Link to="/services/retirement">Retirement Assessment</Link> },
  ];

  const productsMenu: MenuProps['items'] = [
    { key: '1', label: <Link to="/products/mutual-funds">Mutual Funds</Link> },
    { key: '2', label: <Link to="/products/insurance">Insurance</Link> },
    { key: '3', label: <Link to="/products/model-portfolio">Model Portfolio</Link> },
    { key: '4', label: <Link to="/products/real-estate">Real Estate (REITs)</Link> },
    { key: '5', label: <Link to="/products/equity">Direct Equity & ETFs</Link> },
    { key: '6', label: <Link to="/products/portfolio-management">Portfolio Management</Link> },
    { key: '7', label: <Link to="/products/alternate-investment">Alternate Investment Fund</Link> },
    { key: '8', label: <Link to="/products/loan">Loan Against Securities (LAS)</Link> },
    { key: '9', label: <Link to="/products/succession-planning">Succession Planning</Link> },
  ];

  const loginMenu: MenuProps['items'] = [
    { key: '1', label: <a href="https://ewa.njindiaonline.com/ewa/login" target="_blank" rel="noreferrer">NJ E-Wealth</a> },
    { key: '2', label: <a href="https://www.njindiaonline.in/cdesk/login.fin" target="_blank" rel="noreferrer">NJ Client Desk</a> },
    { key: '3', label: <a href="https://invest.motilaloswal.com/" target="_blank" rel="noreferrer">MOSL Login</a> },
  ];

  const navLinkStyle = { color: 'var(--text-primary)', fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 'var(--nav-height)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 5%',
        zIndex: 1000,
        background: scrolled ? 'rgba(15, 23, 42, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ flex: 1 }}>
        <Link to="/">
          <img src={logo} alt="VDAS Logo" style={{ height: '50px', objectFit: 'contain' }} />
        </Link>
      </div>
      <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Link to="/" style={navLinkStyle}>Home</Link>
        
        <Dropdown menu={{ items: aboutMenu }} placement="bottom">
          <div style={navLinkStyle}>About Us <DownOutlined style={{ fontSize: '10px' }}/></div>
        </Dropdown>

        <Dropdown menu={{ items: servicesMenu }} placement="bottom">
          <div style={navLinkStyle}>Services <DownOutlined style={{ fontSize: '10px' }}/></div>
        </Dropdown>

        <Dropdown menu={{ items: productsMenu }} placement="bottom">
          <div style={navLinkStyle}>Products <DownOutlined style={{ fontSize: '10px' }}/></div>
        </Dropdown>

        <Link to="/blogs" style={navLinkStyle}>Blogs</Link>
        <Link to="/contact" style={navLinkStyle}>Contact Us</Link>

        <Dropdown menu={{ items: loginMenu }} placement="bottomRight">
          <Button type="primary" shape="round" size="large" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            Client Login <DownOutlined style={{ fontSize: '12px' }}/>
          </Button>
        </Dropdown>
      </nav>
    </motion.header>
  );
};

export default Header;
