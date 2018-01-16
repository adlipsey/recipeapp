import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
//import Communications from 'react-native-communications';
import RecipeForm from './RecipeForm';
import { recipeUpdate, recipeSave, recipeDelete } from '../actions';
import { Card, CardSection, Button, ConfirmModal } from './common';

class RecipeEdit extends Component {
	state= { showModal: false };

	componentWillMount() {
		_.each(this.props.employee, (value, prop) => {
			this.props.recipeUpdate({ prop, value });
		});
	}

	onButtonPress() {
		const { name, phone, shift } = this.props;
		this.props.recipeSave({ name, phone, shift, uid: this.props.recipe.uid });
	}
	/*
	onTextPress() {
		const { phone, shift } = this.props;
		Communications.text(phone, `Your upcoming shift is on ${shift}`);
	}
	*/
	onAccept() {
		const { uid } = this.props.recipe;
		this.props.recipeDelete({ uid });
	}

	onDecline() {
		this.setState({ showModal: false });
	}

	render() {
		return (
			<Card>
			<RecipeForm />

			<CardSection>
			<Button onPress={this.onButtonPress.bind(this)}>
				Save Changes
			</Button>
			</CardSection>
			{/*}
			<CardSection>
			<Button onPress={this.onTextPress.bind(this)}>
				Text Schedule
			</Button>
			</CardSection>
			{*/}
			<CardSection>
			<Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
				Fire Employee
			</Button>
			</CardSection>

			<ConfirmModal 
				visible={this.state.showModal}
				onAccept={this.onAccept.bind(this)}
				onDecline={this.onDecline.bind(this)}
			>
			Are you sure you wish to delete this recipe?
			</ConfirmModal>
			</Card>
		);
	}
}

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.recipeForm;
	return { name, phone, shift };
};

export default connect(mapStateToProps, { recipeUpdate, recipeSave, recipeDelete })(RecipeEdit);
