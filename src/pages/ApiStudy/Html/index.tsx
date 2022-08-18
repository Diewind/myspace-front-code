import React from 'react';

import Header from '../components/Header';
import Content from '../components/Content';


interface Props {

}

const Index: React.FC<Props> = (props) => {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}

export default Index;
