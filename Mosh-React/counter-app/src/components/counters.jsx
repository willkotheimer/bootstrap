import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 4 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };

  handleDelete = counterId => {
    console.log("Event Handler Called", counterId);
    const countertemp = this.state.counters.filter(counter => {
      return counter.id != counterId;
    });
    this.setState({ counters: countertemp });
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={() => this.handleDelete(counter.id)}
            value={counter.value}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
