import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {CATEGORIES} from '../Data/dummy-data'

const CategoryMealsScreen = props => {
    const CategoryId = props.navigation.getParam('CategoryId');
    const category = CATEGORIES.find((category) => category.id === CategoryId)
    return (
        <View style = {styles.screen}>
            <Text>{category.title}</Text>
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

CategoryMealsScreen.navigationOptions =  (navigationData) => {

    const CategoryId = navigationData.navigation.getParam('CategoryId');
    const category = CATEGORIES.find((category) => category.id === CategoryId)

    return {
        headerTitle : category.title,
    }
}

export default CategoryMealsScreen