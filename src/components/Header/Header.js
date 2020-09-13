import React, {Component} from 'react';


export default class Header extends Component {

    state = {keyword : ''};

    onInputChangeHandler = (event) => {
        // console.log(event.target.value);
        // console.log(event);
        this.setState({keyword: event.target.value});
    
    }

    onKeywordClickedHandler = (event) => {
        // console.log(event);
        // console.log(this.state.keyword);
        // console.log(this.props.onKeywordChanged);
        this.props.onKeywordChanged(this.state.keyword);    
    }

    handleSubmit(e){
        e.preventDefault();
        this.onKeywordClickedHandler();
    }

    render(){

        const fontStyle = {
            // fontFamily: 'Fredoka One',
            fontFamily: 'Righteous'
        }

        return(
            <nav className="navbar navbar-expand
            navbar-light bg-light
            mb-3 p-3">
                <h2 className="mb-0" >
                    <span className="bg-dark text-white p-2 mr-2">猫</span>
                    <span className="d-none d-md-inline" style={fontStyle}>NekoTube</span>
                </h2>
                <form className="form-group form-inline my-2 my-lg-0 ml-sm-2 " onSubmit={e => this.handleSubmit(e)} >
                    <input
                        onChange={this.onInputChangeHandler} value={this.state.keyword}
                        className="form-control form-control-lg mr-sm-2" type="text" placeholder="検索..." aria-label="検索..." />
                    <button type="button" className="btn btn-primary mx-0 py-2" onClick={this.onKeywordClickedHandler}>実行</button>
                </form>
            </nav>
        );
}
}