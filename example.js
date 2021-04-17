function slowAddUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

console.time();
fastAddUpTo(10000000000);
console.timeEnd();

function fastAddUpTo(n) {
  return (n * (n + 1)) / 2;
}
