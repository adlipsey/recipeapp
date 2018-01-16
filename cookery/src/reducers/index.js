//Import dependencies
import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import RecipeFormReducer from './RecipeFormReducer';
import RecipeReducer from './RecipeReducer';

//Combine and export all reducers as one object
export default combineReducers({
	auth: AuthReducer,
	recipeForm: RecipeFormReducer,
	recipes: RecipeReducer
});
