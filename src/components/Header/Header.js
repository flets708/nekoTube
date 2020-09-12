import React, {Component} from 'react';


export default class Header extends Component {

    state = {keyword : ''};

    onInputChangeHandler = (event) => {
        // console.log(event.target.value);
        // console.log(event);
        this.setState({keyword: event.target.value});
    }

    render(){
        return(
        <div className='Header' style={{textAlign: 'center'}}>
            <div>
                <h2>NekoTube</h2>
            </div>
            <div>
                <input onChange={this.onInputChangeHandler} value={this.state.keyword}/>
            </div>
            {/* <div>{this.state.keyword}</div> */}
        </div>
        );
}
}