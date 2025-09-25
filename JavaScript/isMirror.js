function isMirror(str1, str2) {
  
  const clean1 = str1.replace(/[^A-Za-z]/g, '');
  const clean2 = str2.replace(/[^A-Za-z]/g, '');
  
  
  const reversed = clean1.split('').reverse().join('');
  
  
  return reversed === clean2 && clean1 !== clean2;
}