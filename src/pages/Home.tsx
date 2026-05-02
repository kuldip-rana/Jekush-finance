import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Row, Col, Card, Button, Statistic, Collapse, Avatar, Form, Input } from 'antd';
import { motion } from 'framer-motion';
import { SafetyCertificateOutlined, StockOutlined, UsergroupAddOutlined, ArrowRightOutlined, MessageOutlined, TrophyOutlined, BankOutlined, CheckCircleOutlined, PieChartOutlined, LockOutlined, AppstoreOutlined, LineChartOutlined, IdcardOutlined, WalletOutlined, TeamOutlined } from '@ant-design/icons';
import GrowthChart from '../components/charts/GrowthChart';
import ImageCarousel from '../components/ui/ImageCarousel';

const { Title, Text, Paragraph } = Typography;
const { Panel } = Collapse;

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        minHeight: '90vh', 
        display: 'flex', 
        alignItems: 'center', 
        position: 'relative',
        overflow: 'hidden',
        padding: '0 5%'
      }}>
        {/* Background ambient glow */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
          filter: 'blur(40px)',
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
          zIndex: 0
        }} />

        <Row style={{ width: '100%', zIndex: 1 }} align="middle">
          <Col xs={24} lg={14}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div style={{ display: 'inline-block', padding: '6px 12px', background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: '20px', marginBottom: '1.5rem' }}>
                <Text style={{ color: 'var(--accent-color)', fontWeight: 500, fontSize: '0.875rem' }}>SEBI Registered & RBI Compliant</Text>
              </div>
              <Title style={{ fontSize: '4rem', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Engineering <br/> <span className="gradient-text">Financial Freedom</span>
              </Title>
              <Paragraph style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '2.5rem' }}>
                A premium, data-driven approach to wealth management. 
                Experience 33+ years of expertise distilled into intelligent investment strategies.
              </Paragraph>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button type="primary" size="large" style={{ height: '54px', padding: '0 32px', fontSize: '1.1rem' }} onClick={() => navigate('/services/finance')}>
                  Start Your Assessment
                </Button>
                <Button size="large" style={{ height: '54px', padding: '0 32px', fontSize: '1.1rem', background: 'transparent', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} onClick={() => navigate('/products/model-portfolio')}>
                  View Performance
                </Button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              style={{ display: 'flex', gap: '3rem', marginTop: '4rem' }}
            >
              <div>
                <Title level={3} style={{ margin: 0 }}>5,000+</Title>
                <Text style={{ color: 'var(--text-secondary)' }}>Happy Clients</Text>
              </div>
              <div>
                <Title level={3} style={{ margin: 0 }}>30+</Title>
                <Text style={{ color: 'var(--text-secondary)' }}>Years of Experience</Text>
              </div>
              <div>
                <Title level={3} style={{ margin: 0 }}>1,500 cr.</Title>
                <Text style={{ color: 'var(--text-secondary)' }}>AUM</Text>
              </div>
            </motion.div>
          </Col>
          <Col xs={0} lg={10} style={{ position: 'relative', height: '600px' }}>
             {/* Physics-like floating elements using Framer Motion */}
             <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="glass-panel"
                style={{ position: 'absolute', top: '20%', right: '10%', padding: '2rem', width: '280px' }}
             >
                <StockOutlined style={{ fontSize: '2rem', color: 'var(--success-color)', marginBottom: '1rem' }} />
                <Title level={4} style={{ margin: 0 }}>Portfolio Growth</Title>
                <Text style={{ color: 'var(--text-secondary)' }}>+14.2% CAGR</Text>
             </motion.div>
             
             <motion.div
                animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="glass-panel"
                style={{ position: 'absolute', bottom: '25%', left: '0', padding: '1.5rem', width: '240px' }}
             >
                <SafetyCertificateOutlined style={{ fontSize: '1.8rem', color: 'var(--accent-color)', marginBottom: '1rem' }} />
                <Title level={5} style={{ margin: 0 }}>Zero Compromise</Title>
                <Text style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Bank-grade security</Text>
             </motion.div>
          </Col>
        </Row>
      </section>

      {/* About VDAS Section */}
      <section style={{ padding: '6rem 5%', background: 'var(--bg-base)' }}>
        <Row align="middle" gutter={[48, 48]}>
          <Col xs={24} lg={12}>
            <div style={{ paddingRight: '2rem' }}>
              <div style={{ 
                display: 'inline-block', 
                background: 'var(--accent-color)', 
                color: 'white', 
                padding: '8px 24px', 
                borderRadius: '30px', 
                fontSize: '1rem', 
                marginBottom: '1.5rem',
                boxShadow: '0 4px 10px rgba(238, 127, 26, 0.3)'
              }}>
                About Company
              </div>
              <Title level={2} style={{ fontSize: '2.8rem', lineHeight: 1.2, marginBottom: '2rem', fontWeight: 500 }}>
                Trusted Mutual Fund<br/>
                Distributor in Mumbai |<br/>
                30+ Years of Experience
              </Title>
              <Paragraph style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                With a strong presence in Mumbai, we have proudly served over 5,000 clients through mutual fund plans, insurance solutions, and tax-saving strategies. Recognized among the city's top 5 distributors, we partner with NJ India Invest and Motilal Oswal, and have consistently maintained a 5-year MDRT (USA) achievement.
              </Paragraph>
              <Paragraph style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem', lineHeight: 1.8 }}>
                Our signature offerings — Sampoorna Suraksha and the Goal Achievement Programme (GAP) — have helped over 3,500 families stay financially prepared for life's key milestones.
              </Paragraph>
              <Button type="primary" size="large" onClick={() => navigate('/about/company-profile')} style={{ background: '#0958d9', borderColor: '#0958d9', padding: '0 3rem', height: '54px', fontSize: '1.1rem', fontWeight: 600, borderRadius: '4px' }}>
                Know more
              </Button>
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div style={{ position: 'relative', padding: '2rem 2rem 2rem 0' }}>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                <img 
                  src="/digital_handshake_chart.png" 
                  alt="About VDAS" 
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    borderRadius: '8px', 
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)' 
                  }} 
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                style={{ 
                  position: 'absolute', 
                  bottom: '0', 
                  right: '0', 
                  background: 'var(--accent-color)', 
                  color: 'white', 
                  padding: '3rem 2rem', 
                  borderRadius: '8px',
                  boxShadow: '0 20px 40px rgba(238, 127, 26, 0.3)',
                  minWidth: '220px'
                }}
              >
                <Title level={2} style={{ color: 'white', margin: 0, fontSize: '3rem' }}>30+</Title>
                <Text style={{ color: 'white', fontSize: '1.2rem', display: 'block', lineHeight: 1.2 }}>Years of<br/>Experience</Text>
              </motion.div>
            </div>
          </Col>
        </Row>
      </section>

      {/* Services Section */}
      <section style={{ padding: '6rem 5%', background: 'var(--bg-card)' }}>
        <div style={{ marginBottom: '4rem' }}>
          <Title level={2}>Services We Offer</Title>
          <div style={{ width: '60px', height: '3px', background: 'var(--accent-color)', marginTop: '1rem' }}></div>
        </div>

        <Row gutter={[48, 48]} align="stretch">
          <Col xs={24} lg={8}>
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ height: '100%' }}>
              <img src="/pixar_businessman.png" alt="Growing Wealth" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', mixBlendMode: 'multiply' }} />
            </motion.div>
          </Col>
          <Col xs={24} lg={16}>
            <Row gutter={[24, 24]}>
              {[
                { title: '360° FINANCIAL ASSESSMENT', desc: 'Gain a complete analysis of your financial health to achieve your goals with confidence.', icon: <StockOutlined />, link: '/services/finance' },
                { title: 'INSURANCE ASSESSMENT', desc: 'Evaluate your coverage needs to ensure complete financial protection for you and your family.', icon: <SafetyCertificateOutlined />, link: '/services/insurance' },
                { title: 'RETIREMENT ASSESSMENT', desc: 'Ensure a stress-free retirement with our expert assessment—start planning today!', icon: <UsergroupAddOutlined />, link: '/services/retirement' },
                { title: 'PORTFOLIO MANAGEMENT', desc: 'Let our experts manage your portfolio for maximum growth and risk control—start today!', icon: <AppstoreOutlined />, link: '/products/portfolio-management' }
              ].map((service, idx) => (
                <Col xs={24} md={12} key={idx}>
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }} style={{ height: '100%' }}>
                    <Card 
                      bordered={false} 
                      className="glass-panel service-hover-card"
                      style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                      bodyStyle={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', height: '100%' }}
                    >
                      <div className="service-icon-container" style={{ 
                        width: '70px', height: '70px', 
                        marginBottom: '1.5rem',
                        borderRadius: '50%',
                        background: '#0958d9', // Blue inner circle
                        border: '3px solid var(--accent-color)', // Orange outer border
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '2rem', color: '#fff'
                      }}>
                        {service.icon}
                      </div>
                      <Title level={4} style={{ textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', color: 'var(--accent-color)', fontSize: '1.2rem' }}>{service.title}</Title>
                      <Text style={{ display: 'block', flexGrow: 1, fontSize: '1.05rem', color: 'var(--text-secondary)' }}>{service.desc}</Text>
                      <Button className="know-more-btn" size="large" onClick={() => navigate(service.link)}>
                        KNOW MORE
                      </Button>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </section>

      {/* Products Section */}
      <section style={{ padding: '6rem 5%', background: 'var(--bg-base)' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <Title level={2}>Products We Offer</Title>
          <div style={{ width: '60px', height: '3px', background: 'var(--accent-color)', margin: '1rem auto' }}></div>
        </div>
        <Row gutter={[24, 24]}>
          {[
            { title: 'Mutual Funds', desc: 'A range of fund options to help you plan and progress toward your future goals.', icon: <StockOutlined />, link: '/products/mutual-funds' },
            { title: 'Fixed Income', desc: 'Structured options that aim to deliver steady outcomes with minimal fluctuation.', icon: <LockOutlined />, link: '/products/fixed-income' },
            { title: 'Insurance', desc: 'Complete coverage solutions to safeguard your life, health, and long-term priorities.', icon: <SafetyCertificateOutlined />, link: '/products/insurance' },
            { title: 'Model Portfolio', desc: 'Ready-made combinations designed for different needs and timelines.', icon: <AppstoreOutlined />, link: '/products/model-portfolio' },
            { title: 'Direct Equity & ETF\'s', desc: 'Options to participate in listed markets through equity and fund-based instruments.', icon: <LineChartOutlined />, link: '/products/equity' },
            { title: 'PMS', desc: 'Specialized portfolio handling for individuals with larger capital and personalized planning needs.', icon: <IdcardOutlined />, link: '/products/portfolio-management' },
            { title: 'AIF', desc: 'Access exclusive market-linked opportunities that go beyond conventional instruments.', icon: <BankOutlined />, link: '/products/alternate-investment' },
            { title: 'LAS', desc: 'Enhance liquidity by using your existing investments as collateral for funding needs.', icon: <WalletOutlined />, link: '/products/loan' },
            { title: 'Succession Planning', desc: 'Ensure smooth legacy transfer with professionally guided planning and will documentation.', icon: <TeamOutlined />, link: '/products/succession-planning' }
          ].map((prod, idx) => (
            <Col xs={24} md={12} lg={8} key={idx}>
              <motion.div whileHover={{ y: -10 }} transition={{ type: 'spring', stiffness: 300 }} style={{ height: '100%' }}>
                <Card bordered={false} className="glass-panel" style={{ height: '100%', textAlign: 'center' }} bodyStyle={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '2.5rem 1.5rem' }}>
                  <div style={{ 
                    width: '90px', height: '90px', 
                    margin: '0 auto 1.5rem auto',
                    borderRadius: '50%',
                    background: '#0958d9', // Blue inner circle
                    border: '4px solid var(--accent-color)', // Orange outer border
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '2.5rem', color: '#fff',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                  }}>
                    {prod.icon}
                  </div>
                  <Title level={5} style={{ textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', color: idx === 1 ? 'var(--accent-color)' : 'var(--text-primary)' }}>{prod.title}</Title>
                  <Text style={{ color: 'var(--text-secondary)', flexGrow: 1, marginBottom: '2rem' }}>{prod.desc}</Text>
                  <div>
                    <Button type="primary" size="large" onClick={() => navigate(prod.link)} style={{ background: 'var(--accent-color)', borderColor: 'var(--accent-color)', fontWeight: 500, padding: '0 2rem' }}>
                      Learn more
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </section>

      {/* Data Visualization Section */}
      <section style={{ padding: '6rem 5%', background: 'var(--bg-card)' }}>
        <Row align="middle" gutter={[48, 48]}>
          <Col xs={24} lg={10}>
            <Title level={2}>The Power of Compounding</Title>
            <Paragraph style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem' }}>
              Make your money work smarter with the power of compounding. Use this interactive calculator to explore how small, consistent investments can grow significantly over time.
            </Paragraph>
            <Row gutter={[24, 24]} style={{ marginBottom: '2rem' }}>
              <Col span={12}>
                <Statistic title={<span style={{color: 'var(--text-secondary)'}}>Monthly Investment (₹)</span>} value={25000} valueStyle={{ color: 'var(--text-primary)' }} />
              </Col>
              <Col span={12}>
                <Statistic title={<span style={{color: 'var(--text-secondary)'}}>Expected Return Rate (p.a.) (%)</span>} value={12} valueStyle={{ color: 'var(--success-color)' }} />
              </Col>
              <Col span={12}>
                <Statistic title={<span style={{color: 'var(--text-secondary)'}}>Time Period (years)</span>} value={10} valueStyle={{ color: 'var(--text-primary)' }} />
              </Col>
              <Col span={12}>
                <Statistic title={<span style={{color: 'var(--text-secondary)'}}>Invested Amount</span>} value={"30,00,000"} prefix="₹" valueStyle={{ color: 'var(--text-primary)' }} />
              </Col>
              <Col span={12}>
                <Statistic title={<span style={{color: 'var(--text-secondary)'}}>Estimated Returns</span>} value={"28,08,477"} prefix="₹" valueStyle={{ color: 'var(--success-color)' }} />
              </Col>
              <Col span={12}>
                <Statistic title={<span style={{color: 'var(--text-secondary)'}}>Total Value</span>} value={"58,08,477"} prefix="₹" valueStyle={{ color: 'var(--accent-color)', fontWeight: 'bold' }} />
              </Col>
            </Row>
            <Button type="primary" size="large" onClick={() => navigate('/tools')}>Open SIP Calculator</Button>
          </Col>
          <Col xs={24} lg={14}>
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <GrowthChart />
            </div>
          </Col>
        </Row>
      </section>

      {/* Plan Better. Invest Smarter. Section */}
      <section style={{ padding: '6rem 5%', background: 'var(--bg-base)' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <Title level={2}>Plan Better. Invest Smarter.</Title>
        </div>
        <Row gutter={[32, 32]}>
          <Col xs={24} md={8}>
            <Card bordered={false} className="glass-panel" style={{ height: '100%', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', background: 'var(--accent-color)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', margin: '0 auto 1.5rem auto' }}>1</div>
              <Title level={4}>Understanding Your Financial Profile</Title>
              <Text style={{ color: 'var(--text-secondary)' }}>We start by analyzing your net worth and categorizing your assets and liabilities. This foundational step ensures a personalized strategy aligned with your financial reality.</Text>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card bordered={false} className="glass-panel" style={{ height: '100%', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', background: 'var(--accent-color)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', margin: '0 auto 1.5rem auto' }}>2</div>
              <Title level={4}>Goal-Based Planning & Asset Allocation</Title>
              <Text style={{ color: 'var(--text-secondary)' }}>With a clear picture of your financial standing, we map your short- and long-term goals and allocate assets accordingly—considering risk tolerance, cash flow needs, and investment horizon.</Text>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card bordered={false} className="glass-panel" style={{ height: '100%', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', background: 'var(--accent-color)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', margin: '0 auto 1.5rem auto' }}>3</div>
              <Title level={4}>SWP (Systematic Withdrawal Plan)</Title>
              <Text style={{ color: 'var(--text-secondary)' }}>For post-retirement planning, we design SWPs that provide steady income. We factor in inflation, lifestyle costs, and economic changes—ensuring your wealth continues to support your lifestyle.</Text>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Achievements Section */}
      <section style={{ padding: '6rem 5%', background: 'var(--bg-card)' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <Title level={2}>Our Achievements</Title>
          <Text style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Testament to our hard work, dedication and passion.</Text>
        </div>
        <Row gutter={[24, 24]} justify="center">
          {[
            { title: 'Equity Mania 2014', desc: 'by Reliance Mutual Fund' },
            { title: 'Business Impact 2023-24', desc: 'by Motilal Oswal' },
            { title: 'MDRT Program 2024', desc: 'by HDFC Life' },
            { title: 'Highest Net Equity Sales', desc: 'National Runner up' }
          ].map((ach, idx) => (
            <Col xs={24} sm={12} lg={6} key={idx}>
              <motion.div whileHover={{ y: -10 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Card bordered={false} className="glass-panel" style={{ textAlign: 'center', height: '100%' }}>
                  <TrophyOutlined style={{ fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '1rem' }} />
                  <Title level={4}>{ach.title}</Title>
                  <Text style={{ color: 'var(--text-secondary)' }}>{ach.desc}</Text>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </section>

      {/* Blogs Section Preview */}
      <section style={{ padding: '6rem 5%', background: 'var(--bg-base)' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <Title level={2}>Our Blogs</Title>
          <Text style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Our thoughts, View and everything Else</Text>
        </div>
        <Row justify="center">
          <Col xs={24} style={{ textAlign: 'center' }}>
            <Button size="large" onClick={() => navigate('/blogs')} style={{ background: 'transparent', borderColor: 'var(--accent-color)', color: 'var(--accent-color)' }}>Explore Blogs</Button>
          </Col>
        </Row>
      </section>

      {/* Testimonials Section */}
      <section style={{ padding: '6rem 5%', background: 'var(--bg-base)' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <Title level={2}>Our Testimonials</Title>
          <Text style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Together, we made financial dreams a reality.</Text>
        </div>
        <Row gutter={[24, 24]}>
          {[
            "Vishwas Deshpande Advisory Services Pvt Ltd has been rendering excellent & trustworthy services to me... Customer service is their forte.",
            "I find VDAS is highly professional & Most important is understanding client needs and addressing it properly.",
            "Provided right solution to my Financial needs bearing in mind my objectives and approach towards risk.",
            "VDAS has help me realize not only my short term or immediate goals but also secure my future well."
          ].map((quote, idx) => (
            <Col xs={24} md={12} key={idx}>
              <Card className="glass-panel" bordered={false} style={{ height: '100%' }}>
                <MessageOutlined style={{ fontSize: '2rem', color: 'var(--border-color)', marginBottom: '1rem' }} />
                <Paragraph style={{ fontSize: '1.1rem', fontStyle: 'italic' }}>"{quote}"</Paragraph>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '2rem' }}>
                  <Avatar icon={<UsergroupAddOutlined />} style={{ backgroundColor: 'var(--accent-color)' }} />
                  <div>
                    <Title level={5} style={{ margin: 0 }}>Satisfied Investor</Title>
                    <Text style={{ color: 'var(--success-color)', fontSize: '0.8rem' }}><CheckCircleOutlined /> Verified Client</Text>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* FAQs Section */}
      <section style={{ padding: '6rem 5%', background: 'var(--bg-card)' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <Title level={2}>Frequently Asked Questions</Title>
        </div>
        <Row justify="center">
          <Col xs={24} lg={16}>
            <Collapse 
              accordion 
              bordered={false} 
              className="glass-panel"
              style={{ background: 'transparent' }}
            >
              <Panel header={<Text style={{ fontSize: '1.1rem', fontWeight: 500 }}>What is SWP?</Text>} key="1">
                <Paragraph style={{ color: 'var(--text-secondary)' }}>Systemic Withdrawal Plan. According to inflation calculated return, fixed sum of money is credited to my bank account for my expenses, after my statement.</Paragraph>
              </Panel>
              <Panel header={<Text style={{ fontSize: '1.1rem', fontWeight: 500 }}>How can I systematically manage my home loan?</Text>} key="2">
                <Paragraph style={{ color: 'var(--text-secondary)' }}>This broadly depends on the loan amount, tenure, rate of interest, but we can plan & schedule our EMIs in such a way that we can re-pay the loan before the end of the tenure and hence manage future liability.</Paragraph>
              </Panel>
              <Panel header={<Text style={{ fontSize: '1.1rem', fontWeight: 500 }}>How much should a young investor invest?</Text>} key="3">
                <Paragraph style={{ color: 'var(--text-secondary)' }}>30-30-30 rule generally, and 40-30-20 for the young generation.</Paragraph>
              </Panel>
              <Panel header={<Text style={{ fontSize: '1.1rem', fontWeight: 500 }}>Do you guide investments for NRI?</Text>} key="4">
                <Paragraph style={{ color: 'var(--text-secondary)' }}>Yes, we guide NRIs for pathway to invest in India. We guide on how to invest through NRE/NRO account and its benefits.</Paragraph>
              </Panel>
            </Collapse>
          </Col>
        </Row>
      </section>

      {/* Enquiry Form Section */}
      <section style={{ padding: '6rem 5%', background: 'var(--bg-base)' }}>
        <Row justify="center">
          <Col xs={24} lg={12}>
            <Card className="glass-panel" bordered={false} bodyStyle={{ padding: '3rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <Title level={2}>Enquiry Form</Title>
                <Text style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Get in touch with us for personalized financial guidance.</Text>
              </div>
              <Form layout="vertical" size="large">
                <Form.Item label={<Text style={{ color: 'var(--text-primary)' }}>Name</Text>} name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
                  <Input placeholder="Your Name" style={{ background: 'var(--bg-dark)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                </Form.Item>
                <Form.Item label={<Text style={{ color: 'var(--text-primary)' }}>Email</Text>} name="email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}>
                  <Input placeholder="Your Email" style={{ background: 'var(--bg-dark)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                </Form.Item>
                <Form.Item label={<Text style={{ color: 'var(--text-primary)' }}>Phone No</Text>} name="phone" rules={[{ required: true, message: 'Please enter your phone number' }]}>
                  <Input placeholder="Your Phone Number" style={{ background: 'var(--bg-dark)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                </Form.Item>
                <Form.Item label={<Text style={{ color: 'var(--text-primary)' }}>Message</Text>} name="message" rules={[{ required: true, message: 'Please enter your message' }]}>
                  <Input.TextArea rows={4} placeholder="Your Message" style={{ background: 'var(--bg-dark)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                </Form.Item>
                <Form.Item style={{ marginBottom: 0, textAlign: 'center' }}>
                  <Button type="primary" size="large" htmlType="submit" style={{ width: '100%', maxWidth: '200px', height: '54px', fontSize: '1.1rem' }}>
                    Send
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Carousel Section */}
      <section style={{ padding: '4rem 5%', background: 'var(--bg-base)' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <Title level={3}>Market Insights & Visuals</Title>
        </div>
        <ImageCarousel />
      </section>
    </div>
  );
};

export default Home;
