import React from 'react';

type TestProps = {
  title: string;
};

function Test({ title }: TestProps) {
  return <div>{title}</div>;
}

export default Test;
