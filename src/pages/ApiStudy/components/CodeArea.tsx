import React from 'react';
import { Row, Col } from 'antd';

type Props = {}

const CodeArea: React.FC<Props> = (props: Props) => {
  return (
    <Row className='codearea'>
      <Col span={12}>codeEdit</Col>
      <Col span={12}>codePreview</Col>
    </Row>
  )
}

export default CodeArea;
