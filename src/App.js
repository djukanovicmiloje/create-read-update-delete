import React, { Component } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import SignUpForm from './components/SignUpForm/SignUpForm';
import { HashRouter, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm';
import PostsPage from './components/PostsPage/PostsPage';
import CreatePostPage from './components/CreatePostPage/CreatePostPage';
import MyPosts from './components/MyPosts/MyPosts';

class App extends Component {
	// constructor() {
	// 	this.state = {
	// 		loading: true
	// 	};
	// }

	// componentDidMount() {
	// 	persistStore(
	// 		store,
	// 		{
	// 			storage: storage
	// 		},
	// 		() => {
	// 			this.setState({ loading: false });
	// 	)	}
	// 	;
	// }
	render() {
		// if (loading) {
		// 	return <h1>Loading ...</h1>;
		// }
		return (
			<Provider store={store}>
				<HashRouter>
					<Route exact path="/posts" component={PostsPage} />
					<Route exact path="/login" component={LoginForm} />
					<Route exact path="/register" component={SignUpForm} />
					<Route exact path="/new" component={CreatePostPage} />
					<Route exact path="/myPosts" component={MyPosts} />
				</HashRouter>
			</Provider>
		);
	}
}

export default App;
