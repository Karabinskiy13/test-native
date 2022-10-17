import React from 'react';

import Image from '../styled/PhotoImage';
import { PhotoView, PhotoTitle } from '../styled/SinglePhoto';

interface Props {
  id: string;
  url: string;
  user: string;
  width: number;
  height: number;
}

export const SinglePhoto = ({ url, user, width, height }: Props) => (
  <PhotoView>
    <Image width={width} height={height} url={url} />
    <PhotoTitle>{user}</PhotoTitle>
  </PhotoView>
);
