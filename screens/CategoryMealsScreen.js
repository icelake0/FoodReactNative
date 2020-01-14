import React from 'react'
import {CATEGORIES} from '../Data/dummy-data'
import {MEALS} from '../Data/dummy-data'
import MealList from '../components/MealList'

const CategoryMealsScreen = props => {
    const CategoryId = props.navigation.getParam('CategoryId');
    const meals = MEALS.filter( (meal) => meal.categoryIds.includes(CategoryId))
    
    return (
        <MealList 
            meals = {meals}
            navigation = {props.navigation}
        />
    )
}

CategoryMealsScreen.navigationOptions =  (navigationData) => {

    const CategoryId = navigationData.navigation.getParam('CategoryId');
    const category = CATEGORIES.find((category) => category.id === CategoryId)

    return {
        headerTitle : category.title,
    }
}

export default CategoryMealsScreen