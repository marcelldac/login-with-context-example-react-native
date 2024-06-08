import React, {createContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';

export const AuthContext = createContext({})

function AuthProvider({children}){
    const [user, setUser] = useState({});
    const [isLogged, setIsLogged] = useState(false);
    const navigation = useNavigation();

    function signIn(email, password){
        if(email !== '' && password !== ''){
            setIsLogged(true);
            setUser({
                email: email,
                status: isLogged ? 'Ativo' : 'Inativo'
            })
            navigation.navigate("Home");
        } else {
            setIsLogged(false);
            Alert.alert("Ocorreu um erro!", "Todos os campos são obrigatórios");
        }
    }
    return(
        <AuthContext.Provider value={{ nome: "Marcell" , signIn, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;