import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { addSong } from "../actions/songActions";

class songList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newSong: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();

    const addedSong = {
      title: this.state.newSong,
    };

    this.props.addSong(addedSong);
    this.setState({ newSong: "" });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name);
  }
  render() {
    const { songs } = this.props.songs;

    return (
      <div>
        <ul>
          {songs.map((song, i) => {
            return (
              <Fragment key={songs.title}>
                <li>{song.title}</li>
              </Fragment>
            );
          })}
          <form onSubmit={this.onSubmit}>
            <input type="text" name="newSong" onChange={this.onChange} />
            <input type="submit" value="Add Song" />
          </form>
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  songs: state.songs,
});

export default connect(mapStateToProps, {
  addSong,
})(songList);
