import React, {createContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';

export const AuthContext = createContext({})

function AuthProvider({children}){
    const [user, setUser] = useState({});
    const navigation = useNavigation();

    function signIn(email, password){
        if(email !== '' && password !== ''){
            setUser({
                email: email,
                status: 'Ativo'
            })
            navigation.navigate("Home");
        } else {
            Alert.alert("Ocorreu um erro!", "Todos os campos são obrigatórios");
        }
    }
    return(
        <AuthContext.Provider value={{ nome: "Marcell Andrade", signIn, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;