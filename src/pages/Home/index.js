import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {HomeView} from './styles';

export default function Home(){
	const navigation = useNavigation();
	return(
		<HomeView>
			<Text>teste</Text>
			<TouchableOpacity onPress={() => {navigation.push("UserProfile")}}>
				<AntDesign
				name="user"
				size={20}
				/>
			</TouchableOpacity>
		</HomeView>
  )
}
