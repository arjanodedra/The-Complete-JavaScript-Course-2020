let billValue = prompt(`Enter Bill Amount..!!`);
let total;
let tip = (billValue > 0 && billValue <= 300) ? (15 * billValue) / 100 : (20 * billValue) / 100;

console.log(`The Bill Was ${billValue} , The Tip Was ${tip} and Total Value ${Number(billValue) + Number(tip)}`);

