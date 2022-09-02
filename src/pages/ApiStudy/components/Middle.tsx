import React from 'react'

type Props = {
  loadUrl: string,
}

const Middle: React.FC<Props> = (props: Props) => {
  const {
    loadUrl = '',
  } = props;
  return (
    <iframe width='100%' height='100%' src={loadUrl}>
      content
    </iframe>
  )
}

export default Middle
