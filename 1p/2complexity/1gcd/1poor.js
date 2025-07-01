function gcd(a, b) {
    let k = 0;
    let u = a;
    let v = b;
    let r = 0;
    while (u > 0) {
      if (u < v) {
        r = u;
        u = v;
        v = r;
      }
      k++;
      u -= v;
    }
    console.log("steps: ",k);
    return v;
  }
  
  //console.log("print here how much time it took");
  
  //then try
  console.time("toma");
  console.log(gcd(3, 2));
  console.timeEnd("toma");
  //console.log(gcd(1000000005, 9))
  //can we do better ? (yes/no)
  