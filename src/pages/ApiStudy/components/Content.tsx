import React from 'react';
import { Row, Col} from 'antd';

import Left from './Left';
import Tip from './Tip';
import Middle from './Middle';

type Props = {}

const Content = (props: Props) => {
  return (
    <Row gutter={[8,8]}>
      <Col><Left /></Col>
      <Col><Middle /></Col>
      <Col><Tip /></Col>
    </Row>
  )
}

export default Content
