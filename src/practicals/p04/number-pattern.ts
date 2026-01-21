export {};
const arg = process.argv[2];
const n = Number(arg);

if (arg === undefined || Number.isNaN(n) || n < 0) process.exit(0);



for(let i=0;i<n;i++){
  let row = ""
  for(let y=i+1;y<n;y++){
    row+=" ";
  }
  for(let j=i+1;j>0;j--){
    row+=j;
  }
  console.log(row)
}