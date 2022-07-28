import { createStore } from 'redux';
import bannerReducer from '../reducers/bannerReducer';

const configureStore = (railsProps) => createStore(bannerReducer, railsProps);

export default configureStore;
