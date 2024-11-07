import axiosInstance from '@/services/network';
import {routes} from '@/services/network/routes';

export const getDataProfile = () => {
  return axiosInstance.get(`${routes.profile.get}`);
};
