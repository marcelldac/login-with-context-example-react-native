import {Button,Alert} from 'react-native'
import React, {useContext} from 'react'

import {Content, UserInfos, InputUserInfos} from './styles'
import {AuthContext} from '../../contexts/auth'

export default function UserProfile() {
  const {user, nome} = useContext(AuthContext)

  function editUser(){
    Alert.alert('teste')
  }

  return (
    <Content>
      <UserInfos>Nome:</UserInfos>
      <InputUserInfos
        value={nome}
      />
      <UserInfos>Email logado: </UserInfos>
      <InputUserInfos 
        value={user.email}
      />
      <UserInfos>Status: </UserInfos>
      <InputUserInfos 
        value={user.status}
      />
      <Button 
        title="Salvar"
        onPress={editUser}
      />
    </Content>
  )
}