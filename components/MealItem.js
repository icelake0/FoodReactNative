import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'

const MealItem = props => {   
    return (
        <View style = {styles.MealItem}>
            <TouchableOpacity onPress = {props.onSelect}>
                <View>
                    <View style = {{...styles.MealItemRow, ...styles.mealHeader}}>
                        <ImageBackground source = {{uri : props.image}} style = {styles.bgImage} >
                            <View style = {styles.titleContainer}>
                                <Text style = {styles.title} numberOfLines = {1}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View> 
                    <View style = {{...styles.MealItemRow, ...styles.mealDetail}}>
                        <Text>{props.duration}m</Text>
                        <Text>{props.complexity}</Text>
                        <Text>{props.affordability}</Text>
                    </View> 
                </View>

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer : {
        backgroundColor : 'rgba(0,0,0,0.6)',
        paddingVertical : 5,
        paddingHorizontal : 12,
    },
    title : {
        fontFamily : 'open-sans-bold',
        fontSize : 20,
        color : 'white',
        textAlign : "center"

    },
    MealItem : {
        height : 200,
        width : '100%',
        backgroundColor : '#f5f5f5',
        borderRadius : 10,
        overflow : 'hidden'
    },
    MealItemRow : {
        flexDirection : 'row',
    },
    mealHeader : {
        height : '85%',
    },
    bgImage : {
        width : '100%',
        height : '100%',
        justifyContent : 'flex-end'
    },
    mealDetail : {
        height : '15%',
        paddingHorizontal : 10,
        justifyContent : 'space-between',
        alignItems : "center"
    }
})

export default MealItem