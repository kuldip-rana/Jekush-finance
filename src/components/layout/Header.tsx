import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import logo from '../../assets/cropped-logo.webp';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      setIsDark(false);
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      setIsDark(false);
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      setIsDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
    window.dispatchEvent(new Event('themeChange'));
  };

  const aboutMenu: MenuProps['items'] = [
    { key: '1', label: <Link to="/about/company-profile" onClick={() => setMobileMenuOpen(false)}>Company Profile</Link> },
    { key: '2', label: <Link to="/about/our-teams" onClick={() => setMobileMenuOpen(false)}>Our Teams</Link> },
  ];

  const servicesMenu: MenuProps['items'] = [
    { key: '1', label: <Link to="/services/finance" onClick={() => setMobileMenuOpen(false)}>Financial Assessment</Link> },
    { key: '2', label: <Link to="/services/insurance" onClick={() => setMobileMenuOpen(false)}>Insurance Assessment</Link> },
    { key: '3', label: <Link to="/services/retirement" onClick={() => setMobileMenuOpen(false)}>Retirement Assessment</Link> },
  ];

  const productsMenu: MenuProps['items'] = [
    { key: '1', label: <Link to="/products/mutual-funds" onClick={() => setMobileMenuOpen(false)}>Mutual Funds</Link> },
    { key: '2', label: <Link to="/products/insurance" onClick={() => setMobileMenuOpen(false)}>Insurance</Link> },
    { key: '3', label: <Link to="/products/model-portfolio" onClick={() => setMobileMenuOpen(false)}>Model Portfolio</Link> },
    { key: '4', label: <Link to="/products/real-estate" onClick={() => setMobileMenuOpen(false)}>Real Estate (REITs)</Link> },
    { key: '5', label: <Link to="/products/equity" onClick={() => setMobileMenuOpen(false)}>Direct Equity & ETFs</Link> },
    { key: '6', label: <Link to="/products/portfolio-management" onClick={() => setMobileMenuOpen(false)}>Portfolio Management</Link> },
    { key: '7', label: <Link to="/products/alternate-investment" onClick={() => setMobileMenuOpen(false)}>Alternate Investment Fund</Link> },
    { key: '8', label: <Link to="/products/loan" onClick={() => setMobileMenuOpen(false)}>Loan Against Securities (LAS)</Link> },
    { key: '9', label: <Link to="/products/succession-planning" onClick={() => setMobileMenuOpen(false)}>Succession Planning</Link> },
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
        background: scrolled ? 'var(--nav-bg)' : 'transparent',
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

      {isMobile ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Button 
            onClick={toggleTheme} 
            icon={isDark ? <FiSun /> : <FiMoon />} 
            shape="circle" 
            type="text" 
            style={{ color: 'var(--text-primary)' }} 
          />
          <FiMenu 
            size={24} 
            style={{ color: 'var(--text-primary)', cursor: 'pointer' }} 
            onClick={() => setMobileMenuOpen(true)} 
          />
        </div>
      ) : (
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

          <Button 
            onClick={toggleTheme} 
            icon={isDark ? <FiSun /> : <FiMoon />} 
            shape="circle" 
            type="text" 
            style={{ color: 'var(--text-primary)' }} 
          />

          <Dropdown menu={{ items: loginMenu }} placement="bottomRight">
            <Button type="primary" shape="round" size="large" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              Client Login <DownOutlined style={{ fontSize: '12px' }}/>
            </Button>
          </Dropdown>
        </nav>
      )}

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '80%',
              maxWidth: '300px',
              background: 'var(--bg-card)',
              zIndex: 1001,
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              boxShadow: '-5px 0 15px rgba(0,0,0,0.1)',
              overflowY: 'auto'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <FiX 
                size={24} 
                style={{ color: 'var(--text-primary)', cursor: 'pointer' }} 
                onClick={() => setMobileMenuOpen(false)} 
              />
            </div>
            
            <Link to="/" style={navLinkStyle} onClick={() => setMobileMenuOpen(false)}>Home</Link>
            
            <Dropdown menu={{ items: aboutMenu }} placement="bottomLeft" trigger={['click']}>
              <div style={navLinkStyle}>About Us <DownOutlined style={{ fontSize: '10px' }}/></div>
            </Dropdown>

            <Dropdown menu={{ items: servicesMenu }} placement="bottomLeft" trigger={['click']}>
              <div style={navLinkStyle}>Services <DownOutlined style={{ fontSize: '10px' }}/></div>
            </Dropdown>

            <Dropdown menu={{ items: productsMenu }} placement="bottomLeft" trigger={['click']}>
              <div style={navLinkStyle}>Products <DownOutlined style={{ fontSize: '10px' }}/></div>
            </Dropdown>

            <Link to="/blogs" style={navLinkStyle} onClick={() => setMobileMenuOpen(false)}>Blogs</Link>
            <Link to="/contact" style={navLinkStyle} onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>

            <Dropdown menu={{ items: loginMenu }} placement="bottomLeft" trigger={['click']}>
              <Button type="primary" shape="round" size="large" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '1rem', width: '100%', justifyContent: 'center' }}>
                Client Login <DownOutlined style={{ fontSize: '12px' }}/>
              </Button>
            </Dropdown>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
