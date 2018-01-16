import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { recipeUpdate } from '../actions';
import { CardSection, Input } from './common';

class RecipeForm extends Component {


	render() {
		return (
			<View>
				<CardSection>
					<Input 
					label='Name' 
					placeholder='Jane' 
					value={this.props.name}
					onChangeText={value => this.props.recipeUpdate({ prop: 'name', value })} 
					/>
				</CardSection>
				<CardSection>
				<Input 
				label='Phone' 
				placeholder='555-5555' 
				value={this.props.phone} 
				onChangeText={value => this.props.recipeUpdate({ prop: 'phone', value })}
				/>
				</CardSection>
				<CardSection style={{ flexDirection: 'column' }}>
				<Text style={styles.pickerText}>Shift Day</Text>
				<Picker
					//style={{ flex: 1 }}
					selectedValue={this.props.shift}
					onValueChange={day => this.props.recipeUpdate({ prop: 'shift', value: day })}
				>
					<Picker.Item label='Sunday' value='sunday' />
					<Picker.Item label='Monday' value='monday' />
					<Picker.Item label='Tuesday' value='tuesday' />
					<Picker.Item label='Wednesday' value='wednesday' />
					<Picker.Item label='Thursday' value='thursday' />
					<Picker.Item label='Friday' value='friday' />
					<Picker.Item label='Saturday' value='saturday' />
				</Picker>
				</CardSection>
			</View>
		);
	}
}

const styles = {
	pickerText: {
		fontSize: 18,
		paddingLeft: 20
	}
};

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.recipeForm;
	return { name, phone, shift };
};

export default connect(mapStateToProps, { recipeUpdate })(RecipeForm);
