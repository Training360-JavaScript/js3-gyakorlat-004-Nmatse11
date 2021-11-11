const checkIP = (text) => {
  const pattern = /^25[0-5](\.\d{3}){2}\.\d{2}$/;
  return pattern.exec(text) ? true : false;
};
export default checkIP;