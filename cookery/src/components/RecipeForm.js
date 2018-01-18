import React, { Component } from 'react';
import { ScrollView, View, Alert } from 'react-native';
import { 
  FormLabel, 
  FormInput, 
  FormValidationMessage,  
  CheckBox 
} from 'react-native-elements';// 0.19.0
import { connect } from 'react-redux';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput'; // 5.0.0
import { recipeUpdate } from '../actions';

//import "@expo/vector-icons"; // 6.2.2


class RecipeForm extends Component {

  
  render() {
    console.log(this.props);
    return (
      
        <View style={styles.container}>
         
          <FormLabel>Recipe Name</FormLabel>
          <FormInput 
            style={styles.formInput}
            value={this.props.name}
            onChangeText={text => this.props.recipeUpdate({ prop: 'name', value: text })}
            placeholder='Name of Recipe'
          />
          <FormValidationMessage>{'This field is required'}</FormValidationMessage>
          
          <FormLabel>Ingredients</FormLabel>
            <AutoGrowingTextInput
              value={this.props.ingredients}
              onChangeText={text => this.props.recipeUpdate({ prop: 'ingredients', value: text })}
              style={styles.textInput}
              placeholder='Enter ingredients here:'
              placeholderTextColor='#66737C'
              maxHeight={200}
              minHeight={45}
              enableScrollToCaret
              /*ref={(r) => { this._textInput = r; }}*/
            />

            
            <FormLabel>Steps</FormLabel>
            <AutoGrowingTextInput
              value={this.props.steps}
              onChangeText={text => this.props.recipeUpdate({ prop: 'steps', value: text })}
              style={styles.textInput}
              placeholder='Enter cooking steps here:'
              placeholderTextColor='#66737C'
              maxHeight={200}
              minHeight={45}
              enableScrollToCaret
              /*ref={(r) => { this._textInput = r; }}*/
            />

          <FormLabel>Serving Size</FormLabel>
          <FormInput
            value={this.props.servings}
            onChangeText={value => this.props.recipeUpdate({ prop: 'servings', value })}
          />
          
          <FormLabel>Prep Time</FormLabel>
          <FormInput 
            value={this.props.prep}
            onChangeText={value => this.props.recipeUpdate({ prop: 'prep', value })}
          />
          
          <FormLabel>Cook Time</FormLabel>
          <FormInput 
            value={this.props.cook}
            onChangeText={value => this.props.recipeUpdate({ prop: 'cook', value })}
          />
          
          <FormLabel>Nutrition Information</FormLabel>
          <FormLabel>Calories</FormLabel>
          <FormInput 
            value={this.props.cals}
            onChangeText={value => this.props.recipeUpdate({ prop: 'cals', value })}
          />
           <FormLabel>Carbs</FormLabel>
          <FormInput 
            value={this.props.carbs}
            onChangeText={value => this.props.recipeUpdate({ prop: 'carbs', value })}
          />
           <FormLabel>Protein</FormLabel>
          <FormInput 
            value={this.props.protein}
            onChangeText={value => this.props.recipeUpdate({ prop: 'protein', value })}
          />
           <FormLabel>Fat</FormLabel>
          <FormInput 
            value={this.props.fat}
            onChangeText={value => this.props.recipeUpdate({ prop: 'fat', value })}
          />
          
          <FormLabel>Dietary Info</FormLabel>
          <CheckBox
              title='Vegan' 
              checked={this.props.vegan}
              onPress={() => this.props.recipeUpdate({ prop: 'vegan', value: !this.props.vegan })}
          />
          <CheckBox
              title='Vegetarian' 
              checked={this.props.vegetarian}
              onPress={() => this.props.recipeUpdate({ prop: 'vegetarian', value: !this.props.vegetarian })}
          />
          <CheckBox
              title='Gluten Free' 
              checked={this.props.glutenfree}
              onPress={() => this.props.recipeUpdate({ prop: 'glutenfree', value: !this.props.glutenfree })}
          />
          <CheckBox
              title='Dairy Free' 
              checked={this.props.dairyfree}
              onPress={() => this.props.recipeUpdate({ prop: 'dairyfree', value: !this.props.dairyfree })}
          />
          
          <FormLabel>Notes</FormLabel>
            <AutoGrowingTextInput
              value={this.props.notes}
              onChangeText={text => this.props.recipeUpdate({ prop: 'notes', value: text })}
              style={styles.textInput}
              placeholder='Any notes about your recipe here:'
              placeholderTextColor='#66737C'
              maxHeight={200}
              minHeight={45}
              enableScrollToCaret
              /*ref={(r) => { this._textInput = r; }}*/
            />
          </View>
    );
  }
}

const styles = {
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingBottom: 100,
  },
  
  formInput: {
    padding: 15
  },
  /*button: {
    marginTop: 50,
    paddingBottom: 300
  },*/
  textInput: {
    width: 300,
    backgroundColor: '#F8F8F8'
  }
};


const mapStateToProps = (state) => {
  const { 
      name, 
      ingredients, 
      steps, 
      servings, 
      prep, 
      cook, 
      notes, 
      cals, 
      carbs, 
      protein, 
      fat, 
      vegetarian, 
      vegan, 
      glutenfree, 
      dairyfree 
    } = state.recipeForm;
console.log(vegan);
  return { 
      name, 
      ingredients, 
      steps, 
      servings, 
      prep, 
      cook, 
      notes, 
      cals, 
      carbs, 
      protein, 
      fat, 
      vegetarian, 
      vegan, 
      glutenfree, 
      dairyfree };
};

export default connect(mapStateToProps, { recipeUpdate })(RecipeForm);
