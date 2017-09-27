import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Reducer from './Reducer/';

import Start from './Components/Start.jsx';






const store = createStore(Reducer, applyMiddleware(thunk));


 

ReactDOM.render(
    <Provider store = {store}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                        <Start/>
                </div>  
            </div>
            
        </div>
    </Provider>
    ,document.getElementById('root')); 