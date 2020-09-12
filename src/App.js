import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header';
import YSearch from 'youtube-api-search';
import Body from './components/Body/Body';
import List from './components/Video/List/List';

const YOUTUBE_API_KEY = 'AIzaSyCFoXb-oCvBBuAHTRNuHNjFUp3XR1oH9ZE';

export default class App extends Component {

  // stateの初期化
  state = {videos: []}

  componentDidMount(){
    YSearch({ key: YOUTUBE_API_KEY, term: '猫　きゅうり'}, (data) =>{
      this.setState({videos:data});
    });

  };

  render(){

    return(
      <div className="App">
        <Header />
        <Body><List videos={this.state.videos}/></Body>
      </div>
    )
  }

  
}