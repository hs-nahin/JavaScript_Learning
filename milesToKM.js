function milesToKilometers(miles) {
    // 1 mile is equal to 1.60934 kilometers
    const kilometers = miles * 1.60934;
    return kilometers;
  }
  
  // Example usage:
  let miles = 30;
  kilometers = milesToKilometers (miles);
  console.log (`${miles} Miles is equal to ${kilometers} Kilometers`); // `` is different than "" or ''
