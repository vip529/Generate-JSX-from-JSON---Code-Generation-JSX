import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";


const toTitleCase =(str)=> {
  return str
    .replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    })
    .replace(" ", "");
}

function toCamelCase(str) {
  str = str.replace("-", " ");
  return str
    .replace(/\s(.)/g, function ($1) {
      return $1.toUpperCase();
    })
    .replace(/\s/g, "")
    .replace(/^(.)/, function ($1) {
      return $1.toLowerCase();
    });
}

const jsonToJSX = (data) =>{

  let initial = `<${toTitleCase(data.name)}`;
  
  if ( data.style !== undefined && Object.keys(data.style).length > 0) {
    let styleKeys = Object.keys(data.style);
    initial += " style={{";

    for(let i =0;i<styleKeys.length;i++){
      initial += `${toCamelCase(styleKeys[i])}:"${data.style[styleKeys[i]]}",`;
    }
    initial = `${initial.substr(0, initial.length - 1)}}}`;
  }
  

  
  if (data.children !== undefined && data.children.length > 0) {
    initial += ">\n";
    
    for(let i =0;i<data.children.length;i++){
        initial += jsonToJSX(data.children[i]);
    }

    initial += "</" + toTitleCase(data.name) + ">";
    
  } else {
    initial += "/>";
    
  }
  
  return initial;
}

// const jsonToJSX = (data) =>{

  
//   // let style = "";
//   let initial = `<${toTitleCase(data.name)}`;
//   if ( data.style !== undefined && Object.keys(data.style).length > 0) {
//     // let propArray = [];
//     // for (let key in data.style) {
//     //   if (data.style.hasOwnProperty(key)) {
//     //     let nKey = key.split("-");
//     //     if (nKey.length > 1) {
//     //       nKey[1] = nKey[1].charAt(0).toUpperCase() + nKey[1].slice(1);
//     //     }
//     //     nKey = nKey.join("");
//     //     propArray.push(`${nKey}:${Number.isInteger(data.style[key])?`${data.style[key]}`:`"${data.style[key]}"`}`);
//     //   }
//     // }
//     // let propString = propArray.join(", ");
//     // style = `style={{${propString}}}`;
//     let styleKeys = Object.keys(data.style);
//     initial += " style={{";

//     for(let i =0;i<styleKeys.length;i++){
//       initial += `${toCamelCase(styleKeys[i])}:"${data.style[styleKeys[i]]}",`;
//     }
//     initial = `${initial.substr(0, initial.length - 1)}}}`;
//   }


  
//   if (data.children !== undefined && data.children.length > 0) {
//     initial += ">\n";

//     for(let i =0;i<data.children.length;i++){
//         initial += jsonToJSX(data.children[i]);
//     }

//     initial += "</" + toTitleCase(data.name) + ">";

//     // let childArray = (data.children).map((childData) => {
//     //   return jsonToJSX(childData);
//     // });
//     // let childString = childArray.join(" ");

//     // return `
//     // <${data.name} ${style}> 
//     //     ${childString} 
//     // </${data.name}>`
    
//   } else {
//     initial += "/>";
//     return initial;
//     // return `<${data.name} ${style} />`
//   }
// }

function generateCodeFromObject(obj){
    
    
    return jsonToJSX(obj);    
}
   
module.exports=generateCodeFromObject;


// ReactDOM.render(<App />, document.getElementById("root"));