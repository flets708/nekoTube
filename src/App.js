import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header';
import YSearch from 'youtube-api-search';

const YOUTUBE_API_KEY = 'AIzaSyCFoXb-oCvBBuAHTRNuHNjFUp3XR1oH9ZE';

export default class App extends Component {

  // stateの初期化
  state = {videos: []}

  // 本来は必要ない部分
  // componentWillMount(){
  //   console.log("componentWillMountでーす");
  // }

  componentDidMount(){
    YSearch({ key: YOUTUBE_API_KEY, term: '猫　きゅうり'}, (data) =>{
      this.setState({videos:data});
    });

  //   console.log("componentDidMountでーす");
  };

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('更新前のstate:' + this.state.videos);
  //   console.log('更新後のstate:' + nextState.videos);

  //   return true;
  // }

  // componentWillUpdate(){
  //   console.log('componentWillUpdateでーす');
  // }

  // componentDidUpdate(){
  //   console.log('componentDidUpdateでーす');
  // }

  render(){

    return(
      <div className="App">
        <Header />
      </div>
    )
  }

  
}