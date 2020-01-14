import React from 'react'
import MealItem from '../components/MealItem'
import {StyleSheet, FlatList, View} from 'react-native'

const MealList = props => {
    const meals = props.meals
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
        <View style = {styles.screen}>
            <FlatList 
                data = {meals}
                renderItem = {renderListItems}
                style = {{width : "100%"}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        justifyContent : 'center',
        alignItems : "center"
    }
})

export default MealList