function rot13(str) {
  // LBH QVQ VG!
  var solution = "";
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 91) {
      solution += String.fromCharCode(str.charCodeAt(i));
      continue;
    }
    if (str.charCodeAt(i) < 78) {
      solution += String.fromCharCode(str.charCodeAt(i) + 13);
    } else {
      solution += String.fromCharCode(str.charCodeAt(i) - 13);
    }
  }
  return solution;
}
