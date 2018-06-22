import React, { Component } from 'react';
import './App.css';
import superb from 'superb';
import _ from 'lodash';
import search from 'youtube-search';
import SearchBar from './components/searchBar';
import VideoDetail from './components/videoDetail';
import VideoList from './components/videoList';



const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const firstWord = superb();

class App extends Component {
  constructor (props) {
    super (props);
    
    this.state = {
      videos: [],
      selectedVideo: null,
    }
    
    this.videoSearch(firstWord);
  }
  
  
  videoSearch = (term) => {
    let opts = {
      maxResults: 21,
      key: API_KEY,
    };
    search(term ,opts, (err, res) => {
      if (err) {
        return console.log(err);
      }
      let firstVideo = res[0];
      res.shift();
      console.log(res);
      this.setState({
        videos: res,
        selectedVideo: firstVideo
      });
    });

  }
  
  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (
      <div className="container">
        <SearchBar onSearchTermChange={videoSearch} serched={firstWord} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
