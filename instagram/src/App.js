import React from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
// import dummyData from './dummy-data';
import Authenticate from './components/Authentication/Authenticate';

const App = () => {
	return <PostsPage />;
};

export default Authenticate(App);
