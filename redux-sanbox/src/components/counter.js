import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions';

const Counter = ({counter = 0, inc, dec, rnd}) => {
    return(
      <div  class="jumbotron">
        <h2>{counter}</h2>
        <button
            onClick = {dec}
            className ="btn btn-primary btn-lg">DEC
        </button>
        <button 
            onClick = {inc}
            className ="btn btn-primary btn-lg">INC
            </button>
        <button 
            onClick = {rnd}
            className ="btn btn-primary btn-lg">RND
        </button>
     </div>
    );
};

const matStateToProps = (state) => {
    return{
        counter: state
    };
};

const mapDispatchToProps = (dispatch) => {
    const {inc, dec, rnd} = bindActionCreators(actions, dispatch);
    
    return{
        inc,
        dec,
        rnd: ()=> {
            const randomValue = Math.floor(Math.random()*10);
            rnd(randomValue);
        }
    }
};

export default connect(matStateToProps, mapDispatchToProps)(Counter);