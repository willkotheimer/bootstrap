import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = id => {
    this.setState({
      movies: this.state.movies.filter(movie => {
        return id !== movie._id;
      })
    });
  };
  handleDeleteButton = id => {
    return (
      <button
        onClick={movie => {
          this.handleDelete(id);
        }}
        className="btn btn-danger btn-sm"
      >
        Delete
      </button>
    );
  };

  renderMovies = () => {
    if (this.state.movies.length === 0) return <p>There are no movies</p>;

    return this.handleMovies();
  };
  handleMovies = () => {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr>
                <td scope="row" key={movie}>
                  {movie.title}
                </td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>{this.handleDeleteButton(movie._id)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  render() {
    return <div>{this.renderMovies()}</div>;
  }
}

export default Movies;
