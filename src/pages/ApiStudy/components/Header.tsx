import React from 'react';
import { Row, Col, Input, Button } from 'antd';

type Props = {}

const Header = (props: Props) => {
  const handleLoad = () => {

  };
  return (
    <div style={{
      padding: 15.
    }}>
      <Row gutter={[8, 8]} align='middle' justify='center'>
        <Col>loadUrl：</Col>
        <Col span={18}>
          <Input />
        </Col>
        <Col>
          <Button type='primary' onClick={handleLoad}>
            加载
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default Header
