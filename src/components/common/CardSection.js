import React from 'react'
import ReactNative,{View} from 'react-native'

const CardSection = (props)=>{
    return (
        <View style={style.containStyle}>
            {props.children}
        </View>
    )
}

const style ={
    containStyle:{
        borderBottomWidth:1,
        padding:5,
        backgroundColor:'#fff',
        justifyContent:'flex-start',
        flexDirection:'row',
        borderColor:'#ddd',
        position:'relative'
    }
}
export  {CardSection};