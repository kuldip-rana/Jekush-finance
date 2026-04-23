import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider, theme } from 'antd';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#EE7F1A',
          colorInfo: '#0C54A0',
          colorBgBase: '#0f172a',
          colorTextBase: '#f8fafc',
          colorBgContainer: '#1e293b',
          colorBorder: 'rgba(255, 255, 255, 0.1)',
          borderRadius: 8,
          fontFamily: "'Inter', sans-serif",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>,
);
