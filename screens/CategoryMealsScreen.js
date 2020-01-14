import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import {CATEGORIES} from '../Data/dummy-data'
import {MEALS} from '../Data/dummy-data'
import MealItem from '../components/MealItem'

const CategoryMealsScreen = props => {
    const CategoryId = props.navigation.getParam('CategoryId');
    const meals = MEALS.filter( (meal) => meal.categoryIds.includes(CategoryId))
    const renderListItems = (itemData) => {
        return (
            <MealItem 
                title = {itemData.item.title}
                duration = {itemData.item.duration}
                complexity = {itemData.item.complexity.toUpperCase()}
                affordability = {itemData.item.affordability.toUpperCase()}
                image = {itemData.item.imageUrl}
                onSelect = { () => {props.navigation.navigate({
                    routeName : 'MealDetail',
                    params : {
                        mealId : itemData.item.id
                    }
                })} }
            />
        )
    }
    
    return (
        <FlatList 
            data = {meals}
            renderItem = {renderListItems}
            style = {{width : "100%"}}
        />
    )
}

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        justifyContent : 'center',
        alignItems : "center"
    }
})

CategoryMealsScreen.navigationOptions =  (navigationData) => {

    const CategoryId = navigationData.navigation.getParam('CategoryId');
    const category = CATEGORIES.find((category) => category.id === CategoryId)

    return {
        headerTitle : category.title,
    }
}

export default CategoryMealsScreen