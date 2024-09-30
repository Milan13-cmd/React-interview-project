import React, { useState } from "react";
import data from "./data";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiple, setEnableMultiple] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingle(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);

    // console.log(getCurrentId)
  }

  function handleMultiple(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findexIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
    if(findexIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findexIndexOfCurrentId, 1);
    setMultiple(cpyMultiple);
  }
  console.log(selected, multiple)

  // console.log(selected)
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiple(!enableMultiple)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataitem) => (
            <div className="item" key={dataitem.id}>
              <div
                className="title"
                onClick={
                  enableMultiple
                    ? () => handleMultiple(dataitem.id)
                    : () => handleSingle(dataitem.id)
                }
              >
                <h1>{dataitem.title}</h1>
                <span>+</span>
              </div>

              {
                enableMultiple ? 
                multiple.indexOf(dataitem.id) !== -1 &&  
                <p className="content">{dataitem.content}</p>:
                selected === dataitem.id  &&   <p className="content">{dataitem.content}</p>
              }
              {/* {selected === dataitem.id ||  multiple.indexOf(dataitem.id)!== -1  ?  (
                <p className="content">{dataitem.content}</p>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
