import { View, Text } from 'react-native'
import React, {useContext} from 'react'

import {AuthContext} from '../../contexts/auth'

export default function Pedidos() {
  const {user, nome} = useContext(AuthContext)

  return (
    <View>
      <Text>Pedidos</Text>
      <Text>Nome: {nome}</Text>
      <Text>Email logado: {user.email}</Text>
      <Text>Status: {user.status}</Text>
    </View>
  )
}