import React, { Component } from 'react';
import { connect } from 'react-redux';
import { recipeUpdate, recipeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import RecipeForm from './RecipeForm';

class RecipeCreate extends Component {
	onButtonPress() {
		const { name, phone, shift } = this.props;

		this.props.recipeCreate({ name, phone, shift: shift || 'Monday' });
	}

	render() {
		return (
			<Card>
				<RecipeForm {...this.props} />
				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>Create</Button>
				</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.recipeForm;
	return { name, phone, shift };
};

export default connect(mapStateToProps, { recipeUpdate, recipeCreate })(RecipeCreate);
