import React, { useState } from 'react';
import { Typography, Row, Col, Card, Form, Input, Button, message } from 'antd';
import { motion } from 'framer-motion';
import { PhoneOutlined, EnvironmentOutlined, MailOutlined, SendOutlined } from '@ant-design/icons';
import emailjs from '@emailjs/browser';

const { Title, Text } = Typography;
const { TextArea } = Input;

const ContactUs: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      // Replace these strings with your actual EmailJS credentials
      const serviceId = 'service_meck3u9';
      const templateId = 'template_ncgbi2i';
      const publicKey = 'BRzuHYmZiAl1vZV9v';

      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        phone: values.phone,
        message: values.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      message.success('Message sent successfully! Our team will contact you soon.');
      form.resetFields();
    } catch (error) {
      console.error('Email send failed:', error);
      message.error('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '6rem 5%', minHeight: '80vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Title level={1}>Contact Us</Title>
          <Text style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
            We're here to support your financial goals. Get in touch with our experts.
          </Text>
        </motion.div>
      </div>

      <Row gutter={[48, 48]} justify="center">
        <Col xs={24} lg={10}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <Title level={3} style={{ marginBottom: '2rem' }}>Get in Touch</Title>

            <Card className="glass-panel" bordered={false} style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'rgba(238, 127, 26, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--accent-color)', fontSize: '1.5rem' }}>
                  <PhoneOutlined />
                </div>
                <div>
                  <Text style={{ color: 'var(--text-secondary)', display: 'block' }}>Call Us</Text>
                  <a href="tel:+919321338325" style={{ color: 'var(--text-primary)', fontWeight: 600, display: 'block' }}>+91 93213 38325</a>
                  <a href="tel:+919321338322" style={{ color: 'var(--text-primary)', fontWeight: 600, display: 'block' }}>+91 93213 38322</a>
                </div>
              </div>
            </Card>

            <Card className="glass-panel" bordered={false} style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--success-color)', fontSize: '1.5rem' }}>
                  <MailOutlined />
                </div>
                <div>
                  <Text style={{ color: 'var(--text-secondary)', display: 'block' }}>Email Direct</Text>
                  <a href="mailto:vishwas@vishwasdeshpande.com" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>vishwas@vishwasdeshpande.com</a>
                </div>
              </div>
            </Card>

            <Card className="glass-panel" bordered={false}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'rgba(167, 139, 250, 0.1)', padding: '1rem', borderRadius: '50%', color: '#a78bfa', fontSize: '1.5rem' }}>
                  <EnvironmentOutlined />
                </div>
                <div>
                  <Text style={{ color: 'var(--text-secondary)', display: 'block' }}>Address</Text>
                  <Text style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                    158- Yashodhan, Bhalchandra Road,<br />
                    Hindu Colony, Dadar Mumbai, 400014
                  </Text>
                </div>
              </div>
            </Card>
          </motion.div>
        </Col>

        <Col xs={24} lg={12}>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <Card className="glass-panel" bordered={false} style={{ height: '100%' }}>
              <Title level={3} style={{ marginBottom: '2rem' }}>Send a Message</Title>
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                size="large"
              >
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item name="name" label={<span style={{ color: 'var(--text-primary)' }}>Your Name</span>} rules={[{ required: true, message: 'Please enter your name' }]}>
                      <Input placeholder="John Doe" style={{ background: 'var(--bg-dark)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item name="phone" label={<span style={{ color: 'var(--text-primary)' }}>Phone Number</span>} rules={[{ required: true, message: 'Please enter your phone number' }]}>
                      <Input placeholder="+91 98765 43210" style={{ background: 'var(--bg-dark)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item name="email" label={<span style={{ color: 'var(--text-primary)' }}>Email Address</span>} rules={[{ required: true, message: 'Please enter your email', type: 'email' }]}>
                  <Input placeholder="john@example.com" style={{ background: 'var(--bg-dark)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                </Form.Item>
                <Form.Item name="message" label={<span style={{ color: 'var(--text-primary)' }}>Your Message</span>} rules={[{ required: true, message: 'Please enter your message' }]}>
                  <TextArea rows={4} placeholder="How can we help you?" style={{ background: 'var(--bg-dark)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" loading={loading} icon={<SendOutlined />} style={{ width: '100%', height: '50px', fontSize: '1.1rem' }}>
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactUs;
