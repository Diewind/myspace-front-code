import React from 'react';
import { Row, Col, Input, Button } from 'antd';

type Props = {
  handleLoad: (val: string) => void,
  setLoadUrl: (val: string) => void,
  loadUrl: string,
}

const Header: React.FC<Props> = (props: Props) => {
  const {
    handleLoad,
    setLoadUrl,
    loadUrl,
  } = props;
  return (
    <div style={{
      padding: 15.
    }}>
      <Row gutter={[8, 8]} align='middle' justify='center'>
        <Col>loadUrl：</Col>
        <Col span={18}>
          <Input value={loadUrl} onChange={(e) => setLoadUrl(e.target.value)} />
        </Col>
        <Col>
          <Button type='primary' onClick={() => handleLoad('')}>
            重置
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default Header
