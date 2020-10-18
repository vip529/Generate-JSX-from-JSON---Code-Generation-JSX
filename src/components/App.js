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
        "children": [
            {
                "type": "div",
                "name": "Hour",
                "style": {},
                "children": [
                    {
                        "type": "div",
                        "name": "Hour",
                        "style": {},
                        "children": [
                            {
                                "type": "div",
                                "name": "Hour",
                                "style": {},
                                "children": [
                                    {
                                        "type": "div",
                                        "name": "Hour",
                                        "style": {},
                                        "children": [],
                                      },
                                ],
                              },
                        ],
                      },
                ],
              },
        ],
      },
      {
        "type": "span",
        "name": "Minute",
        "style": {
          "color": "green",
          "font-size": 30
        },
        "children": []
      },
      {
        "type": "div",
        "name": "Hour",
        "style": {},
        "children": []
      },
      {
        "type": "div",
        "name": "Hour",
        "style": {},
        "children": []
      },
      {
        "type": "div",
        "name": "Hour",
        "style": {},
        "children": []
      },
      {
        "type": "div",
        "name": "Hour",
        "style": {},
        "children": []
      },
    ]
  }

  export default function App(props){
    const jsonToJSX = (data) =>{
      let style = "";
      if (Object.keys(data.style).length !== 0) {
        let propArray = [];
        for (let key in data.style) {
          if (data.style.hasOwnProperty(key)) {
            let nKey = key.split("-");
            if (nKey.length > 1) {
              nKey[1] = nKey[1].charAt(0).toUpperCase() + nKey[1].slice(1);
            }
            nKey = nKey.join("");
            propArray.push(`${nKey}:"${data.style[key]}"`);
          }
        }
        let propString = propArray.join(", ");
        style = `style={{${propString}}}`;
      }
  
      if (data.children.length === 0) {
        return `<${data.name} ${style}/>`;
      } else {
        let childArray = (data.children || []).map((childData) => {
          return jsonToJSX(childData);
        });
        let childString = childArray.join(" ");
  
        return `<${data.name} ${style}> ${childString} <${data.name}/>`;
      }
    }
    return jsonToJSX(props);
  }
