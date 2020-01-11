import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Platform } from 'react-native'
import {CATEGORIES} from '../Data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'

const CategoriesScreen = props => {
    const renderListItems = (itemData) => {
        return (
           <CategoryGridTile 
                title = {itemData.item.title}
                onSelect = {() => props.navigation.navigate({
                    routeName : 'CategoryMeals',
                    params : {
                        CategoryId : itemData.item.id
                    }
                })}
                color = {itemData.item.color}
           />
        )
    }
    return (
        <FlatList 
            numColumns = {2}
            data = {CATEGORIES}
            renderItem = {renderListItems}
        />
    )
}

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        justifyContent : 'center',
        alignItems : "center"
    },
})

CategoriesScreen.navigationOptions = {
    headerTitle : "Home",
}

export default CategoriesScreen