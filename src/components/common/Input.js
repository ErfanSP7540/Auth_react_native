import React from 'react'
import {View,Text,TextInput} from 'react-native'

const Input=({label, value , onChangeText ,placeholder , secureTextEntry=false})=>{
    
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}> {label} </Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                style={styles.inputStyle}
                value={value}
                onChangeText={ text=>onChangeText(text) }
                autoCorrect={false}
            />
        </View>
    )
}

styles = {
    inputStyle:{
        color:'#000',
        paddingRight:5,
        paddingLeft:20,
        fontSize:18, 
        lineHeight:40,
        flex:2,
    },
    labelStyle:{
        fontSize:18,
        flex:1,
        lineHeight:40,
        textAlign:'center',
    },
    containerStyle:{
        flex:1,
        height:40,
        flexDirection:'row',
    },
}

export  {Input};