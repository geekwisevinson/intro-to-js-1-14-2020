const text2putinbrowser=
`
navigator.geolocation.getCurrentPosition((res)=>{console.log(res)})//returns GPS Coords
let notes={"later":"Book: You don't know JS,"notes":"Let it be in the backburner"};
`


const fs=require('fs');
const files=fs.readFileSync('./index.html','utf-8');
console.log(files);
