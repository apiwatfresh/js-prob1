const numberlst = [];
function showPrimes(n) {
  for (let i = 2; i < n+1; i++) {
    if (isPrimes(i)) {
      numberlst.push(i);
    }
  }
}
function isPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}
while (true) {
  let n = prompt("Enter a positive integer");
  try {
    let num = parseInt(n);
    showPrimes(num);
    if (numberlst.length != 0) {
      alert("For n = " + n + " prime numbers are " + numberlst);
      break;
    }
  } catch (error) { }
}
