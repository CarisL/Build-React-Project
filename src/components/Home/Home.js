import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNews } from './actions';

class Home extends Component {
	render() {
		const { home } = this.props;
		return (
			<div>
				<button onClick={() => this.props.getNews()}>请求用户信息</button>
			</div>
		);
	}
}

export default connect(
	state => {
		return { home: state.home };
	},
	{ getNews }
)(Home);
