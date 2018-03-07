import React,{ Component } from 'react'
import { View , TextInput } from 'react-native'
import {Button,Card,CardSection} from './common'



class LoginForm extends Component{
    state={text:''}


    render(){
        return(
            <Card>
                <CardSection>
                    <TextInput
                        value={this.state.text} 
                        style={styles.textInputStyle} 
                        onChangeText={ text=>this.setState({text}) }
                    />
                </CardSection>
                <CardSection />

                <CardSection>
                    <Button>
                        log in
                    </Button>

                </CardSection>
            </Card>
        )
    }
}

styles = {
    textInputStyle:{
        height:20,
        flex:1,
        backgroundColor:'red',
    },
}

export default LoginForm 