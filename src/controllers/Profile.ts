import axiosInstance from '@/services/network';
import {routes} from '@/services/network/routes';

export const getDataProfile = (
  classId: number,
  type: number,
  timeStamp: number,
) => {
  return axiosInstance.get(`${routes.profile.get}`);
};
