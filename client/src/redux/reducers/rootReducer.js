import { combineReducers } from 'redux';
import sampleReducer from './sampleReducer';

/**
 * 
 *      TO BE USED LIKE: 
 * 
 *       import authReducer from './authReducer';
 *       import errorReducer from './errorReducer';
 * 
 *       combineReducers({
 *          auth: authReducer,
 *          errors: errorReducer
 *       })
 * 
 */

export default combineReducers({
    sample: sampleReducer
})