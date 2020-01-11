import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Platform } from 'react-native'
import {CATEGORIES} from '../Data/dummy-data'
import Colors from '../constants/Colors'

const CategoriesScreen = props => {
    const renderListItems = (itemData) => {
        return (
            <TouchableOpacity 
                onPress = {() => props.navigation.navigate({
                    routeName : 'CategoryMeals',
                    params : {
                        CategoryId : itemData.item.id
                    }
                })} 
                style = {styles.gridItem}
            >
                <View>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
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
    gridItem : {
        flex : 1,
        margin : 15,
        height : 150
    }
})

CategoriesScreen.navigationOptions = {
    headerTitle : "Home",
    headerStyle: {
        backgroundColor: Platform.OS == "Android" ? Colors.primary : '',
    },
    headerTintColor:  Platform.OS == "Android" ? Colors.light : Colors.primary,
}

export default CategoriesScreen