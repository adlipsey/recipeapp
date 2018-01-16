//Import dependencies
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

//Create LoginForm component
class LoginForm extends Component {

	//When value of email input is changed
	onEmailChange(text) {
		//Calls the emailChanged action
		this.props.emailChanged(text);
	}

	//When password input is changed
	onPasswordChange(text) {
		//Calls the passwordChanged action
		this.props.passwordChanged(text);
	}

	//When Login button is pressed
	onButtonPress() {
		//Pulls email and password from props
		const { email, password } = this.props;
		//Calls the loginUser action
		this.props.loginUser({ email, password });
	}

	//Helper function to display error if error prop returns true
	renderError() {
		if (this.props.error) {
			return (
				<View style={{ backgroundColor: 'white' }}>
					<Text style={styles.errorText}>
					{this.props.error}
					</Text>
				</View>
			);
		}
	}

	//Helper function to display spinner if a request is pending or button if not
	renderButton() {
		if (this.props.loading) {
			return <Spinner size='large' />;
		}

		return (
			<Button
				onPress={this.onButtonPress.bind(this)}
			>Login</Button>
		);
	}

	//Render LoginForm to screen
	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label="Email"
						placeholder="email@gmail.com"
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}
					/>
				</CardSection>
				<CardSection>
					<Input
						label="Password"
						placeholder="password"
						secureTextEntry
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password}
					/>
				</CardSection>
					{this.renderError()}
				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorText: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

//Takes state props and returns them as component props
const mapStateToProps = state => {
	return {
		email: state.auth.email,
		password: state.auth.password,
		error: state.auth.error,
		loading: state.auth.loading
	};
};

//Connect talks to provider to get/manipulate state
//Combines mapStateToProps, any actions we need, and this component
export default connect(mapStateToProps, { 
	emailChanged, passwordChanged, loginUser 
})(LoginForm);
