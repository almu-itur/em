const filterArrayByChecked = (checked, sourceArray, value) => {
  const copyArray = [...sourceArray];
  if (checked) {
    copyArray.push(value);
    return copyArray;
  }
  return sourceArray.filter((element) => element !== value);
};

export default filterArrayByChecked;
