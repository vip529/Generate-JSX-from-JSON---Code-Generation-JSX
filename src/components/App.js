import React, {Component, useState} from "react";
import '../styles/App.css';

const myData = {
    "type": "div",
    "name": "Clock",
    "root": true,
    "style": {
      "display": "flex",
      "flex-direction": "row",
      "justify-content": "center"
    },
    "children": [
      {
        "type": "div",
        "name": "Hour",
        "style": {},
        "children": []
      },
      {
        "type": "span",
        "name": "Minute",
        "style": {
          "color": "green",
          "font-size": 30
        },
        "children": []
      }
    ]
  }

class App extends Component {

    jsonToJSX(data) {
        let style = "";
        if (Object.keys(data.style).length !== 0) {
          let propArray = [];
          for (let key in data.style) {
            if (data.style.hasOwnProperty(key)) {
              propArray.push(`${key}:"${data.style[key]}"`);
            }
          }
          let propString = propArray.join();
          style = `style={{${propString}}}\r\n`;
        }
    
        if (data.children.length === 0) {
          return `
          <${data.name} ${style}/>
          `;
        } else {
          let childArray = (data.children || []).map((childData) => {
            return this.jsonToJSX(childData);
          });
          let childString = childArray.join("\r\n");
    
          return `
          <${data.name} ${style}>
              ${childString}
          <${data.name}/>
          `;
        }
      }
      render() {
        let result = this.jsonToJSX(myData);
        return `${result}`;
      }
}


export default App;
