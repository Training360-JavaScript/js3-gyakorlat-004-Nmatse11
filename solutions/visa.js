const checkVisa = (text) => {
  const pattern = /^4\d{15}$/;
  return pattern.exec(text) ? true : false;
};
export default checkVisa;



