import React,{ Component } from 'react'
import {Text} from 'react-native'
import {Button,Card,CardSection,Input, Spinner} from './common'
import axios from 'axios'
class LoginForm extends Component{
    state={email:'',password:'',error:'error',loading:false}



    onButtonPress(){
        const {password, email} = this.state;
        this.setState({error:'',loading:true})
        
        axios(
            { method: 'GET',
              url: 'http://localhost:3000/',
              headers: {autorizacion: 'werwerwerwerwer',
                        email,
                        password,
                    },
              data: { user: 'name' } 
            })
        .then(  r=>{
            console.log(r);
            
                    if(r.data.error){
                        this.setState({error:r.data.error,loading:false})
                    }else{
                        this.setState({error:'Found',loading:false})
                    }
        })
        .catch( e=> {console.log(e);this.setState({error:'Network error',loading:false})})
    }

    renderButton(){
        if( this.state.loading  ){
            return( <Spinner size={'large'}/> )
        }else{
            return(
                    <Button onPress={this.onButtonPress.bind(this)}>
                        log in
                    </Button>
                    )
        }
    }
    render(){
        return(
            <Card>
                <CardSection>
                    <Input  
                        placeholder={'user@gmail.com'}
                        label={'Email'}
                        value={this.state.email}
                        onChangeText={email=>this.setState({email})}
                    />
                </CardSection>

                <CardSection >
                    <Input  
                            secureTextEntry = {true}
                            placeholder={'password'}
                            label={'password'}
                            value={this.state.password}
                            onChangeText={password=>this.setState({password})}
                        />
                </CardSection>
                <Text style={styles.errorStyle}>{this.state.error}</Text>
                <CardSection> 
                    { this.renderButton() }
                </CardSection>

            </Card>
        )
    }
}


const styles={
    errorStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red'
    },
}


export default LoginForm 