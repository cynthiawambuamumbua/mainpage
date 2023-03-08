
let x= "extravaganza"
console.log(x[8],x[9],x[10],x[11]);
// const food = "The quick fox jumped over the lazy dog"
const b ="eat"
const food=`The quick fox jumped ${b} the lazy dog`
console.log(food)
// 1. "the"
// 2."brown"
// const story= "The quick brown fox jumps over the lazy dog"
const story ="The  quick fox jumped on the lazy dog"
const quick = (story.match(/the/g)||[]).length;
const fox=(story.match(/brown/g)||[]).lenght;
console.log(quick);
console.log(fox);
// 1. "are"
// const string1 = "The pupils are reading in the library";
// 2. "sitting"
// const string2 = "The child was sitting on the table before it fell"
const string1="Th pupils are reading in the library";
const library=string1.search("are");
console.log(library);
const string2="The child was sitting on the table before it fell"
const child=string2.search("sitting");
console.log(child);
// 1. UpperCase: "wonderful"
// 2. LowerCase: "amazing", "UndERneath"
// 3. Title case "A wonderful world"
const huge="wonderful"
const huger=huge.toUpperCase()
console.log(huger)
const less="amazing"
const lesser=less.toLowerCase()
console.assert(lesser)
const tiny="BEneath"
const tiner=tiny.toLowerCase()
console.log(tiner)
const title="A wonderful world"
const title2=title.toLocaleUpperCase()
console.log(title2)













