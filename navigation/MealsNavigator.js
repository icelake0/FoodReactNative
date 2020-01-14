import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritiesScreen from '../screens/FavoritiesScreen'
import Colors from '../constants/Colors'
import { Platform } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

const MealsNavigator = createStackNavigator({
    Categories : CategoriesScreen,
    CategoryMeals : CategoryMealsScreen,
    MealDetail : MealDetailScreen
},{
    defaultNavigationOptions : {
        headerStyle: {
            backgroundColor: Platform.OS == "Android" ? Colors.primary : '',
        },
        headerTintColor:  Platform.OS == "Android" ? Colors.light : Colors.primary,
    }
})

const tabScreenConfig = {
    Meals : {
        screen : MealsNavigator,
        navigationOptions : {
            tabBarIcon : (tabInfo) => {
                return <Ionicons name = 'ios-restaurant' size = {25} color = {tabInfo.tintColor}/>
            },
            tabBarColor : Colors.primary//android only
        },
    },
    Favorities :  {
        screen : FavoritiesScreen,
        navigationOptions : {
            tabBarLabel : "My Favorities",
            tabBarIcon : (tabInfo) => {
                return <Ionicons name = 'ios-star' size = {25} color = {tabInfo.tintColor}/>
            },
            tabBarColor : Colors.accent//android only
        }
    }
}
const mealsFavTabNavigator = Platform.OS !== 'Android' ? 
    createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor : 'white',
        shifting : true
    })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions : {
            activeTintColor : Colors.accent,
            
        }
    })

export default createAppContainer(mealsFavTabNavigator)