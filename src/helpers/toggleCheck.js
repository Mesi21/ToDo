const toggleCheck = (inp, currT) => {
  currT.completed = inp.checked;
  return currT;
};

export default toggleCheck;
