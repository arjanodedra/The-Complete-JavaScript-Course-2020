'use script';
const printTemprature = arr => {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]}°C For Day ${i + 1}`);
  }
};

printTemprature([17, 21, 23]);
printTemprature([12, 5, -5, 0, 4]);
