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
                    "teas": ["jasmine", "oolong", "taro", "matcha"]
                    }

const keys = Object.keys(categories);

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

function getAllWords(currentCategories) {
  let wordArr = []
  for (let cat in currentCategories) {
    console.log(currentCategories[cat]);
    for (let word in currentCategories[cat]) {
      wordArr.push(currentCategories[cat][word]);
    }
  }
  return wordArr;
}

function randomizeWords(currentCategories) {
  let wordArr = getAllWords(currentCategories);
  shuffle(wordArr);
  return wordArr;
}

const currentCategories = generateNewCategories();
const justCategories = Object.keys(currentCategories);
const unshuffledWords = getAllWords(currentCategories);
const firstGroup = unshuffledWords.slice(0, 4);
const secondGroup = unshuffledWords.slice(4, 8);
const thirdGroup = unshuffledWords.slice(8, 12);
const fourthGroup = unshuffledWords.slice(12, );


console.log(justCategories);
for (let word in unshuffledWords) {
  console.log(unshuffledWords[word]);
}


const words = randomizeWords(currentCategories);

export default function Grid() {
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

  function toggleActiveWords(index) {
    let newSelectedWords = Array.from(gridState.selectedWords);

    if (newSelectedWords.length === 4) {
      return;
    }

    if (!newSelectedWords.includes(gridState.objects[index])) {
      newSelectedWords.push(gridState.objects[index]);
    }
    else {
      alert("you already clicked this");
    }
    setGridState({
      ...gridState,
      selectedWords: newSelectedWords
    });

    console.log(gridState.selectedWords);
  }

  function toggleActiveWordsStyle(index) {
    let selected = Array.from(gridState.selectedWords);
    if (selected.includes(gridState.objects[index])) {
      return "wordBox-active";
    }
    else {
      return "wordBox-inactive";
    }
  }

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

  function Card({text, classNameProp}) {

    const handleClick = (e) => {
      console.log("test handle click", e.target.firstChild.data);
    }

    return (
            <button className={classNameProp} onClick={handleClick}>
                {text}
            </button>  
    )
  }

  const [itemVisibility, setItemVisibility] = useState("react-grid-item-visible")
  function checkWork(indexes) {
    // if correct, then disappear the four tiles
    // check if there are no more tiles -- put congrats screen
    // if wrong, then get rid of the highlighting or whatever on the 
    // selected tiles

    if (gridState.selectedWords.length !== 4) {
      alert("you need to select exactly 4 words to check!")
      return;
    }

    let wordsToCheck = [];
    
    let arr1 = currentCategories[0];
    console.log("ARRay 1: " + arr1);

    for (let ind in indexes) {
      let wordToCheck = document.getElementById(Object.values(indexes[ind]).toString()).textContent;
      console.log(wordToCheck);
      wordsToCheck.push(wordToCheck);
    }

    let correct = false;
    let whichGroup = -1;
    if (wordsToCheck.sort().join(',') === firstGroup.sort().join(',')){
      correct = true;
      whichGroup = 0;
    }
    else if (wordsToCheck.sort().join(',') === secondGroup.sort().join(',')){
      correct = true;
      whichGroup = 1;
    }
    else if (wordsToCheck.sort().join(',') === thirdGroup.sort().join(',')){
      correct = true;
      whichGroup = 2;
    }
    else if (wordsToCheck.sort().join(',') === fourthGroup.sort().join(',')){
      correct = true;
      whichGroup = 3;
    }
    else {
      correct = false;
    }

    if (correct) {
      alert("nice! the category you found was: " + justCategories[whichGroup]);
      for (let ind in indexes) {
        document.getElementById(Object.values(indexes[ind]).toString()).style.visibility="hidden";
        setGridState({...gridState, selectedWords:[]});
      }
      return;
    }
    alert("sorry, those aren't a connected group!")
    for (let ind in indexes) {
      document.getElementById(Object.values(indexes[ind]).toString()).className=".wordBox-inactive";
      setGridState({...gridState, selectedWords:[]});
    }
  }

  return (
    <>
      <GridLayout 
      className="react-grid-layout" 
      layout={layout} 
      cols={4}
      rowHeight={height/8}
      width={width / 2}
      maxRows={4}
      maxCols={4}>
        { gridState.objects.map((_, index) => (
           <div onClick={() => toggleActiveWords(index)} className="react-grid-item-visible" key={index} id={index}>
            <Card classNameProp={toggleActiveWordsStyle(index)} text={words[index]} />
          </div>
        )) }
      </GridLayout>
      <button onClick={() => checkWork(gridState.selectedWords)} className="checkButton">
        <p><b>check!</b></p> 
      </button>
    </>
  );
};