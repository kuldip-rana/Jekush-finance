import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CustomCursor from '../ui/CustomCursor';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CustomCursor />
      <Header />
      <main style={{ flex: 1, marginTop: 'var(--nav-height)' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
