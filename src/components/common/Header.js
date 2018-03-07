// importing libraries for import component
import React from 'react'
import ReactNative , {Text, View} from 'react-native'

// make a componxtent


const Header =(props)=>{

    const {textStyle,ViewStyle} = styles;
    return (
        <View style={ViewStyle}> 
            <Text style={textStyle} > {props.title}</Text>
        </View>
        
    )
}

const styles = {
    ViewStyle:{
        backgroundColor:'#F8F8F8',
        justifyContent:'center',
        alignItems:'center',
        height:60,
        paddingTop:10,
        shadowColor:'#000',
        shadowOffset:{ width :0,height:2},
        shadowOpacity:0.9,
        elevation:2,
        position:'relative'
    },
    textStyle:{
        fontSize:20
    }
}

// export this component from this file 

export {Header}