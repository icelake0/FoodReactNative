import React from 'react'
import {MEALS} from '../Data/dummy-data'
import MealList from '../components/MealList'

const FavoritiesScreen = props => {
    const meals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
    return (
        <MealList 
            meals = {meals}
            navigation = {props.navigation}
        />
    )
}

FavoritiesScreen.navigationOptions =  (navigationData) => {
    return {
        headerTitle : 'My Favorite'
    }
}

export default FavoritiesScreen