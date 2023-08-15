import React from "react";

export function Back({ back }) {
  return (
    <div className="col">
      <span className="nav-btns">
        <button className="back" onClick={() => back()}>
          {"<"}
        </button>
      </span>
    </div>
  );
}
export function Next({next}) {
  return (
    <div className="col">
      <span className="nav-btns">
        <button className="next" onClick={() => next()}>
          {">"}
        </button>
      </span>
    </div>
  );
}
