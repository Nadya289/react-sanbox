import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as actions from './actions';


const store = createStore(reducer);
const {dispatch} = store;


const {inc, dec, rnd} = bindActionCreators(actions, dispatch);

const payload = Math.floor(Math.random()*10);


document
    .getElementById('inc')
    .addEventListener('click', inc);
document
    .getElementById('dec')
    .addEventListener('click', dec);
document
    .getElementById('rnd')
    .addEventListener('click', () => {
        rnd(payload);

    });
const update = () => {
    document
        .getElementById('counter')
        .innerHTML = store.getState();
};

store.subscribe(update);
