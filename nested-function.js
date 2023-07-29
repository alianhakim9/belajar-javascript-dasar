function outer() {
  console.info("outer");
  function inner() {
    console.info("inner");
  }
  inner();
}

outer();
