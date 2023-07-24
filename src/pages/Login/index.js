import React, {useState, useContext} from 'react';
import {Text} from 'react-native';
import {AuthContext} from '../../contexts/auth';
import {Content, Input, Button, ButtonText} from './styles.js';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const {signIn} = useContext(AuthContext);

	function handleLogin(){
		signIn(email, password);
	}

	return(
		<Content>
			<Text>Seja bem-vindo(a)</Text>
			<Input
			value={email}
			onChangeText={(text) => setEmail(text)}
			placeholder='Digite seu e-mail'
			/>
			<Input
			value={password}
			onChangeText={(text) => setPassword(text)}
			placeholder='Digite sua senha'
			/>
			<Button onPress={handleLogin}>
				<ButtonText>Acessar</ButtonText>
			</Button>
		</Content>
	)
}
