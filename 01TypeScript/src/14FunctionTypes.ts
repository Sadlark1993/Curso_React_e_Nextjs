//defining function types:
type MapStringsCallback = (item:string) => string;

//the default type would be CallabelFunction
export function mapStrings(sArray:string[], calbackfn: MapStringsCallback): string[]{
  const newArray: string[] = [];

  for(let i=0; i<sArray.length; i++){
    newArray.push(calbackfn(sArray[i]));
  }

  return newArray;
}

const sArray: string[] = ['a', 'be', 'cecilia'];
const sUpArray: string[] = mapStrings(sArray, (item)=>{
  return item.toUpperCase();
});

console.log(sArray);
console.log(sUpArray);
