module.exports = function check(str, bracketsConfig) {
  const arrayValue = bracketsConfig.map((element) => element.join(''))
  let flag;

  for (let i = 0; i < arrayValue.length;) {
    if (str.includes(arrayValue[i])) {
      str = str.replace(arrayValue[i], '')
      i = 0
    }
    else { i++ }
  }

  flag = str.length > 0 ? false : true;

  return flag;
}
