import React, { useEffect, useState } from 'react';
import { Typography, Row, Col, Card, Spin, Tag, Button } from 'antd';
import { motion } from 'framer-motion';
import { CalendarOutlined, ArrowRightOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

interface RssItem {
  title: string;
  pubDate: string;
  link: string;
  thumbnail: string;
  description: string;
  content: string;
}

const Blogs: React.FC = () => {
  const [news, setNews] = useState<RssItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Using rss2json free API to convert LiveMint Money RSS feed to JSON
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://www.livemint.com/rss/money');
        const data = await response.json();
        
        if (data.status === 'ok') {
          // Take top 6 articles
          setNews(data.items.slice(0, 6));
        }
      } catch (error) {
        console.error('Error fetching finance news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Function to extract text from HTML description if necessary
  const stripHtml = (html: string) => {
    const tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  // Helper to extract a high-res image if thumbnail is missing
  const getThumbnail = (item: RssItem, index: number) => {
    if (item.thumbnail && item.thumbnail !== '') return item.thumbnail;
    
    // Fallback to high-quality Pexels images if the RSS feed doesn't provide a thumbnail
    const fallbacks = [
      'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg',
      'https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg',
      'https://images.pexels.com/photos/259165/pexels-photo-259165.jpeg',
      'https://images.pexels.com/photos/210990/pexels-photo-210990.jpeg',
      'https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg',
      'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg',
    ];
    return fallbacks[index % fallbacks.length];
  };

  return (
    <div style={{ padding: '6rem 5%', minHeight: '80vh' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Title level={1}>Latest Finance Updates</Title>
        <Paragraph style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', marginBottom: '4rem' }}>
          Stay informed with the latest market trends, financial news, and expert insights updated daily.
        </Paragraph>

        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem 0' }}>
            <Spin size="large" />
          </div>
        ) : (
          <Row gutter={[32, 32]}>
            {news.map((item, index) => (
              <Col xs={24} sm={12} lg={8} key={index}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  style={{ height: '100%' }}
                >
                  <Card 
                    hoverable 
                    className="glass-panel"
                    style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
                    bodyStyle={{ flex: 1, display: 'flex', flexDirection: 'column', padding: 0 }}
                  >
                    <div style={{ height: '200px', overflow: 'hidden' }}>
                      <img 
                        src={getThumbnail(item, index)} 
                        alt={item.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                      />
                    </div>
                    <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Tag color="var(--accent-color)" style={{ border: 'none' }}>Finance</Tag>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                          <CalendarOutlined style={{ marginRight: '0.5rem' }} />
                          {new Date(item.pubDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </span>
                      </div>
                      <Title level={4} style={{ marginBottom: '1rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {item.title}
                      </Title>
                      <Paragraph style={{ color: 'var(--text-secondary)', flex: 1, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {stripHtml(item.description)}
                      </Paragraph>
                      <Button 
                        type="link" 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ padding: 0, color: 'var(--accent-color)', fontWeight: 600, marginTop: '1rem', alignSelf: 'flex-start' }}
                      >
                        Read Full Article <ArrowRightOutlined />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        )}
      </motion.div>
    </div>
  );
};

export default Blogs;
