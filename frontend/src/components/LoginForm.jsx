import React, { useState } from 'react';
import { Form, Input, Button, Card } from 'antd';

export default function LoginForm({ onLogin }) {
  const [loading, setLoading] = useState(false);

  const handleFinish = values => {
    setLoading(true);
    onLogin(values.username);
    setLoading(false);
  };

  return (
    <Card title="Select User" style={{ maxWidth: 360, margin: 'auto', marginTop: '20vh' }}>
      <Form layout="vertical" onFinish={handleFinish}>
        <Form.Item label="User Name" name="username" rules={[{ required: true, message: 'ユーザーを選択してください' }]}>
          <Input placeholder="ユーザー名を入力" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Enter
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}