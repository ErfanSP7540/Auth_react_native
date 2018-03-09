import React from 'react'
import {View , ActivityIndicator} from 'react-native'

const Spinner = ({size})=>{
    return (
        <View style={styles.ActivityIndicatorStyle}>
            <ActivityIndicator size={size || 'large'} color="#0000ff" />
        </View>
)}

const styles={
    ActivityIndicatorStyle:{
        flex:1
    },
}

export {Spinner}