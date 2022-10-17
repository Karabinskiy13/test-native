import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { FlatList } from 'react-native';

import store, { RootState } from '../redux/store';
import { getPhotos } from '../redux/ducks/pictures';

import { SinglePhoto } from './SinglePhoto';

export const PhotosList = () => {
  const { photos } = useSelector((state: RootState) => state.photoReducer);
  useEffect(() => {
    store.dispatch(getPhotos());
  }, []);

  return (
    <FlatList
      data={photos}
      renderItem={({ item }) => (
        <SinglePhoto
          id={item.id}
          url={item.urls.small}
          user={item.user.name}
          width={90}
          height={400}
        />
      )}
    />
  );
};
