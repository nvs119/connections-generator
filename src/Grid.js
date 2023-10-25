import { useState } from 'react';
import GridLayout from "react-grid-layout";
import './Grid.css';
import Card from "./Card.js";

const Grid = () => {
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

    return (
        <GridLayout 
        className="react-grid-layout"
        layout={layout} 
        cols={4}
        rowHeight={185}
        width={900}
        maxRows={4}
        maxCols={4}>
            <div className="react-grid-item" key="a0"><Card /></div>
            <div className="react-grid-item" key="b0"><Card /></div>
            <div className="react-grid-item" key="c0"><Card /></div>
            <div className="react-grid-item" key="d0"><Card /></div>
            <div className="react-grid-item" key="a1"><Card /></div>
            <div className="react-grid-item" key="b1"><Card /></div>
            <div className="react-grid-item" key="c1"><Card /></div>
            <div className="react-grid-item" key="d1"><Card /></div>
            <div className="react-grid-item" key="a2"><Card /></div>
            <div className="react-grid-item" key="b2"><Card /></div>
            <div className="react-grid-item" key="c2"><Card /></div>
            <div className="react-grid-item" key="d2"><Card /></div>
            <div className="react-grid-item" key="a3"><Card /></div>
            <div className="react-grid-item" key="b3"><Card /></div>
            <div className="react-grid-item" key="c3"><Card /></div>
            <div className="react-grid-item" key="d3"><Card /></div>
        </GridLayout>
    );
  };

export default Grid;