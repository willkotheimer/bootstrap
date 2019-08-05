import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    //use object destructuring to get this.props
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button
          onClick={() => {
            onReset();
          }}
          className="btm-primary btn-sm m-2"
        >
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={() => onDelete(counter.id)}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
