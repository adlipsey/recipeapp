import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { ListView } from 'react-native';
import { recipesFetch } from '../actions';
import ListItem from './ListItem';

class RecipeList extends Component {
	componentWillMount() {
		this.props.recipesFetch();
		this.createDataSource(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.createDataSource(nextProps);
	}

	createDataSource({ recipes }) {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.dataSource = ds.cloneWithRows(recipes);
	}

	renderRow(recipe) {
		return <ListItem recipe={recipe} />;
	}

	render() {
		return (
			<ListView
				enableEmptySections
				dataSource={this.dataSource}
				renderRow={this.renderRow}
			/>
		);
	}
}

const mapStateToProps = state => {
	const recipes = _.map(state.recipes, (val, uid) => {
		return { ...val, uid };
	});

	return { recipes };
};

export default connect(mapStateToProps, { recipesFetch })(RecipeList);
