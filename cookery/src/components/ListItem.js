import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {
	onRowPress() {
		Actions.recipeView({ recipe: this.props.recipe });
	}

	render() {
		const { name, cook, prep, servings } = this.props.recipe;

		return (
			<TouchableHighlight onPress={this.onRowPress.bind(this)}>

			<CardSection>
			<Text style={styles.titleStyle}>
				{name}
			</Text>
			<View >
				<Text>
					Prep Time: {prep}
				</Text>
				<Text>
					Cook Time: {cook}
				</Text>
				<Text>
					Servings: {servings}
				</Text>
			</View>
			</CardSection>

			</TouchableHighlight>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
};

export default ListItem;
