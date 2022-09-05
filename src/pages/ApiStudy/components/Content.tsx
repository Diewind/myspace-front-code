import React from 'react';
import { Row, Col} from 'antd';

import Left from './Left';
import Tip from './Tip';
import Middle from './Middle';

type Props = {
  loadUrl: string,
}

const Content: React.FC<Props> = (props: Props) => {
  const {
    loadUrl
  } = props;
  return (
    <Row gutter={[8,8]} style={{
      height: '70vh',
    }}>
      <Col span={2}><Left /></Col>
      <Col span={18}><Middle loadUrl={loadUrl} /></Col>
      <Col span={4}><Tip /></Col>
    </Row>
  )
}

export default Content
