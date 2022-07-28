import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/bannerStore';
import BannerContainer from '../containers/BannerContainer';

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
const BannerApp = (props) => (
  <Provider store={configureStore(props)}>
    <BannerContainer />
  </Provider>
);

export default BannerApp;
