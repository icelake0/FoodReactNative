import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MEALS } from '../Data/dummy-data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId')
    const meal = MEALS.find(meal => meal.id === mealId)
    return (
        <View style = {styles.screen}>
            <Text>{meal.title}</Text>
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

MealDetailScreen.navigationOptions =  (navigationData) => {

    const mealId = navigationData.navigation.getParam('mealId')
    const meal = MEALS.find(meal => meal.id === mealId)
    return {
        headerTitle : meal.title,
        headerRight : () => 
            <HeaderButtons HeaderButtonComponent = {CustomHeaderButton}>
                <Item 
                    title = 'Favorite'
                    iconName = "ios-star"
                    onPress = {() => {}}
                />
            </HeaderButtons>
    }
}


export default MealDetailScreen