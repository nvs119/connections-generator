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
                    "related to shakespearian titles": ["tempest", "merchant", "shrew", "dream"],
                    "office snacks": ["cheez-its", "goldfish", "doritos", "popcorn"],
                    "methods of sending money": ["wire", "check", "cash", "credit"],
                    "teas": ["jasmine", "oolong", "taro", "matcha"]}

const keys = Object.keys(categories);


export default function Grid({children}) {
  const [gridState, setGridState] = useState({
    selectedWords: [],
    objects: [
      {id:0}, 
      {id:1},
      {id:2}, 
      {id:3},
      {id:4}, 
      {id:5},
      {id:6}, 
      {id:7},
      {id:8}, 
      {id:9},
      {id:10}, 
      {id:11},
      {id:12}, 
      {id:13},
      {id:14}, 
      {id:15}
    ]
  })

  const [layout, setLayout] = useState([
    { i: "0", x: 0, y: 0, w: 1, h: 1 },
    { i: "1", x: 1, y: 0, w: 1, h: 1 },
    { i: "2", x: 2, y: 0, w: 1, h: 1 },
    { i: "3", x: 3, y: 0, w: 1, h: 1 },
    { i: "4", x: 0, y: 1, w: 1, h: 1 },
    { i: "5", x: 1, y: 1, w: 1, h: 1 },
    { i: "6", x: 2, y: 1, w: 1, h: 1 },
    { i: "7", x: 3, y: 1, w: 1, h: 1 },
    { i: "8", x: 0, y: 2, w: 1, h: 1 },
    { i: "9", x: 1, y: 2, w: 1, h: 1 },
    { i: "10", x: 2, y: 2, w: 1, h: 1 },
    { i: "11", x: 3, y: 2, w: 1, h: 1 },
    { i: "12", x: 0, y: 3, w: 1, h: 1 },
    { i: "13", x: 1, y: 3, w: 1, h: 1 },
    { i: "14", x: 2, y: 3, w: 1, h: 1 },
    { i: "15", x: 3, y: 3, w: 1, h: 1 }
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
    var currentCategories = pick(categories, selected);
    console.log(currentCategories);
    
    return currentCategories;
  }

  function Card({text}) {

    const handleClick = (e) => {
      console.log("test handle click", e.target.firstChild.data);
    }

    return (
            <button className="wordBox" onClick={handleClick}>
                {text}
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
        { gridState.objects.map((elements, index) => (
           <div className="react-grid-item" key={index}><Card text={words[index]} /></div>
        )) }
      </GridLayout>
  );
};