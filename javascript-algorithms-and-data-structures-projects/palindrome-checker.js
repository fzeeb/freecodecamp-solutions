function palindrome(str) {
  str = str
    .replace(/\W/g, "")
    .replace(/_/g, "")
    .toLowerCase();
  var revStr = str
    .split("")
    .reverse()
    .join("");
  if (revStr === str) {
    return true;
  } else {
    return false;
  }
}
