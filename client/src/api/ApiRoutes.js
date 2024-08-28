import axiosInstance from './AxiosInstance';
import apiRoutes from '../Constant';

const service = {
  //Users
  createUser: async (userData, config) => await axiosInstance.post(apiRoutes.user + '/register', userData, config),
  loginUser: async (userData, config) => await axiosInstance.post(apiRoutes.user + '/login', userData, config),
  sendResetPasswordEmail: async (email) => await axiosInstance.post(apiRoutes.user + '/password-reset-email', email),
  resetPassword: async (token, password) => {
    const data = { password };
    return await axiosInstance.post(`${apiRoutes.user}/reset-password/${token}`, data);
  }
};

export default service;