import React, {Component} from 'react';
import Header from './components/Header/Header';
import {connect} from 'react-redux';
import * as actions from './store/actions';
import counterReducer from './store/reducers/counterReducer';

 class App extends Component {


    incCounter = () => {
        this.setState({counter: this.state.counter + 1});
    }

    componentDidMount() {
        console.log(this.props.counterReducer)
    }

    render() {
        console.log('fff');
        return(
            <div>
                <Header />
                <h1>Counter: {this.props.counterReducer.counter}</h1>
                <button onClick={this.props.onIncrement}>INC</button>
            </div>
        )
    }
}

const mapStateToPros = (state) => {
    return {
        counterReducer: state.counterReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => {
            return dispatch({
                type: actions.INC_COUNTER
            })
        }
    }
}
export default connect(mapStateToPros,mapDispatchToProps)(App);