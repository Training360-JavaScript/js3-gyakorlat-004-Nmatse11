const checkMac = (text) => {
  const pattern = /^([0-9A-Fa-f]{2}[\:]){5}([0-9A-Fa-f]{2})$/;
  return pattern.exec(text) ? true : false;
};
export default checkMac;