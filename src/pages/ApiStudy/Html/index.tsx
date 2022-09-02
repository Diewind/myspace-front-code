import React, { useState } from 'react';

import Header from '../components/Header';
import Content from '../components/Content';

const Index: React.FC = () => {
  const [loadUrl, setLoadUrl] = useState('');

  const handleLoad = (url: string) => {
    setLoadUrl(url);
  }
  return (
    <div>
      <Header handleLoad={handleLoad} setLoadUrl={setLoadUrl} loadUrl={loadUrl} />
      <Content loadUrl={loadUrl} />
    </div>
  );
}

export default Index;
