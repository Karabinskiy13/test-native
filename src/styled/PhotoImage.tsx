import React from 'react';
import styled from 'styled-components/native';

interface Props {
  width: number;
  height: number;
  url: string;
}

const Image = ({ width, height, url }: Props) => {
  const PhotoImage = styled.Image`
    width: ${width}%;
    height: ${height}px;
  `;
  return <PhotoImage source={{ uri: url }} />;
};

export default Image;
