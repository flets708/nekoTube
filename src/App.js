import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header';
import YSearch from 'youtube-api-search';
import Body from './components/Body/Body';
import List from './components/Video/List/List';
import Video from './components/Video/Video';

const YOUTUBE_API_KEY = 'AIzaSyAep3JlXJdjTZcstIQ2LMNKcOp3uhALrA4';

export default class App extends Component {

  // stateの初期化
  state = { videos: [],
            selectVideo: null,
            newTerm: '猫　きゅうり' 
          }

  componentDidMount(){
    YSearch({ key: YOUTUBE_API_KEY, term: this.state.newTerm}, (data) =>{
      this.setState({videos:data, selectVideo: data[2]});
    });

  };

  onVideoClickedHandler = (video) => {
    this.setState({ selectVideo: video})
  };

  newTermSetter = (keyword) => {
    let newTerm = '猫　' + keyword;
    if(keyword === ''){
      newTerm = "猫　きゅうり"
    }
    console.log('検索ワードは' + newTerm);
    return newTerm
  };

  onKeywordChangeHandler = (keyword) => {
    
    let newTerm = this.newTermSetter(keyword)
    YSearch({ key: YOUTUBE_API_KEY, term: newTerm}, (data) =>{
      this.setState({videos:data, selectVideo: data[2], newTerm:newTerm});
    });
    
    // this.setState({newTerm : newTerm}, () =>{
    //   YSearch({ key: YOUTUBE_API_KEY, term: this.state.newTerm}, (data) =>{
    //     this.setState({videos:data, selectVideo: data[2]});
    //   });
    // })
  }

  render(){

    return(
      <div className="App">
        <Header onKeywordChanged={this.onKeywordChangeHandler} />
        <Body newTerm={this.state.newTerm}>
          <Video video={this.state.selectVideo} />
          <List 
            videos={this.state.videos}
            onVideoClicked={this.onVideoClickedHandler} 
            selectVideo={this.state.selectVideo}/>
        </Body>
      </div>
    )
  }

  
}