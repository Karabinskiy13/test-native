import axiosService from './axios.service';
import { IPicture } from '../interfaces';
import { urls } from '../constants';

export const photoService = {
  allPhotos: async () => await axiosService.get<IPicture[]>(urls.key).then((value) => value.data)
};
