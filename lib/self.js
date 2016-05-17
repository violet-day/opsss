/**
 * Created by Nemo on 16/5/17.
 */

const os = require('os');

const getMyIp = () => {
  let {en0} = os.networkInterfaces();
  let ip;
  en0.forEach((item) => {
    if (item.family == 'IPv4') {
      ip = item.address;
    }
  });
  return ip;
};

/**
 * 获取当前用户信息
 * @return {*}
 */
const getCurrentUser = () => {
  return os.userInfo()
};

module.exports = {
  getMyIp,
  getCurrentUser
};