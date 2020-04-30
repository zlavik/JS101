for (let i = 1; i < 100; i += 1) {
  if (Math.abs(i) % 2 === 0) {
    console.log(i);
  } else {
    continue;
  }
}