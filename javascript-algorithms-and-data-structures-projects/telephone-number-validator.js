function telephoneCheck(str) {
  // Good luck!
  var regex = /^1?\s?(\(\d{3}\)\s?|\d{3}[-\s]?)\d{3}-?\s?\d{4}$/g;
  return regex.test(str);
}
