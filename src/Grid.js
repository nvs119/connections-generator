import { useState } from 'react';
import GridLayout from "react-grid-layout";
import './Grid.css';
import {Dimensions} from "react-native";

var {height, width} = Dimensions.get('window');

const categories ={"fruit": ["mango", "pineapple", "grape", "orange"],
                    "types of pies": ["apple", "pecan", "pumpkin", "sheperd's"],
                    "words with double o's": ["book", "wool", "doom", "loop"],
                    "things with 'i' in front of them": ["hop", "phone", "pod", "touch"],
                    "taylor swift songs": ["clean", "seven", "delicate", "willow"],
                    "characters from harry potter": ["dudley", "hermione", "lavender", "bill"],
                    "things you climb": ["ladder", "rope", "stairs", "mountain"],
                    "languages": ["python", "french", "sign", "mandarin"],
                    "gen z slang": ["gas", "cap", "drip", "rizz"],
                    "related to shakespearian titles": ["tempest", "merchant", "shrew", "dream"]}

const keys = Object.keys(categories);


export default function Grid({children}) {
  const [layout, setLayout] = useState([
    { i: "a0", x: 0, y: 0, w: 1, h: 1 },
    { i: "b0", x: 1, y: 0, w: 1, h: 1 },
    { i: "c0", x: 2, y: 0, w: 1, h: 1 },
    { i: "d0", x: 3, y: 0, w: 1, h: 1 },
    { i: "a1", x: 0, y: 1, w: 1, h: 1 },
    { i: "b1", x: 1, y: 1, w: 1, h: 1 },
    { i: "c1", x: 2, y: 1, w: 1, h: 1 },
    { i: "d1", x: 3, y: 1, w: 1, h: 1 },
    { i: "a2", x: 0, y: 2, w: 1, h: 1 },
    { i: "b2", x: 1, y: 2, w: 1, h: 1 },
    { i: "c2", x: 2, y: 2, w: 1, h: 1 },
    { i: "d2", x: 3, y: 2, w: 1, h: 1 },
    { i: "a3", x: 0, y: 3, w: 1, h: 1 },
    { i: "b3", x: 1, y: 3, w: 1, h: 1 },
    { i: "c3", x: 2, y: 3, w: 1, h: 1 },
    { i: "d3", x: 3, y: 3, w: 1, h: 1 }
  ]);

  const pick = (obj, keys) => Object.keys(obj).filter(k => keys.includes(k)).reduce((res, k) => Object.assign(res, {[k]: obj[k]}), {});

  function generateNewCategories() {
    let selected = [];
    while(selected.length < 4){
            var r = Math.floor(Math.random() * keys.length);
            if(selected.indexOf(keys[r]) === -1) {
              console.log(r)
              let category = keys[r];
              console.log(category)
              selected.push(category);
            }
    }
    console.log(selected);
    var currentCategories = pick(categories, selected);
    console.log(currentCategories);
    
    return currentCategories;
  }

  function Card({text}) {
    const [buttonText, setButtonText] = useState(text);

    return (
            <button className="wordBox">
                {buttonText}
            </button>  
    )
  }

  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

  function randomizeWords() {
    let cats = generateNewCategories();
    console.log(cats.length);
    let wordArr = []
    for (let cat in cats) {
      console.log(cats[cat]);
      for (let word in cats[cat]) {
        wordArr.push(cats[cat][word]);
      }
    }
    shuffle(wordArr);
    return wordArr;
  }

  function isCorrect() {

  }

  function checkWork() {
    // if correct, then disappear the four tiles
    // check if there are no more tiles -- put congrats screen
    // if wrong, then get rid of the highlighting or whatever on the 
    // selected tiles
  }

  let words = randomizeWords();
  const [gameInProgress, setGameInProgress] = useState(true);

  return (
      <GridLayout 
      className="react-grid-layout"
      layout={layout} 
      cols={4}
      rowHeight={height/8}
      width={width / 2}
      maxRows={4}
      maxCols={4}>
          <div className="react-grid-item" key="a0"><Card text={words[0]} /></div>
          <div className="react-grid-item" key="b0"><Card text={words[1]} /></div>
          <div className="react-grid-item" key="c0"><Card text={words[2]} /></div>
          <div className="react-grid-item" key="d0"><Card text={words[3]} /></div>
          <div className="react-grid-item" key="a1"><Card text={words[4]} /></div>
          <div className="react-grid-item" key="b1"><Card text={words[5]} /></div>
          <div className="react-grid-item" key="c1"><Card text={words[6]} /></div>
          <div className="react-grid-item" key="d1"><Card text={words[7]} /></div>
          <div className="react-grid-item" key="a2"><Card text={words[8]} /></div>
          <div className="react-grid-item" key="b2"><Card text={words[9]} /></div>
          <div className="react-grid-item" key="c2"><Card text={words[10]} /></div>
          <div className="react-grid-item" key="d2"><Card text={words[11]} /></div>
          <div className="react-grid-item" key="a3"><Card text={words[12]} /></div>
          <div className="react-grid-item" key="b3"><Card text={words[13]} /></div>
          <div className="react-grid-item" key="c3"><Card text={words[14]} /></div>
          <div className="react-grid-item" key="d3"><Card text={words[15]} /></div>
      </GridLayout>
  );
};