import React from 'react';

import {HomeView} from './styles';

import UserProfile from '../UserProfile/index.js'

export default function Home(){
	return(
		<HomeView>
			<UserProfile />
		</HomeView>
  )
}
