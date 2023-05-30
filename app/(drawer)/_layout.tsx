/** @format */

import { withLayoutContext } from 'expo-router';
import {
	createDrawerNavigator,
	DrawerContentScrollView,
	DrawerItemList,
} from '@react-navigation/drawer';

const DrawerNavigator = createDrawerNavigator().Navigator;

const Drawer = withLayoutContext(DrawerNavigator);

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: '(tabs)',
};

function CustomDrawerContent(props) {
	return (
        <DrawerContentScrollView {...props}>
            
			<DrawerItemList {...props} />
		</DrawerContentScrollView>
	);
}

export default function DrawerLayout() {
	return (
		<Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
			<Drawer.Screen
				name='(tabs)'
				options={{ headerShown: false, title: 'Home' }}
			/>
			<Drawer.Screen name='bookmarks' options={{ title: 'Bookmarks' }} />
			<Drawer.Screen name='twitter-blue' options={{ title: 'Twitter Blue' }} />
			<Drawer.Screen name='profile' options={{ title: 'Profile' }} />
			<Drawer.Screen name='lists' options={{ title: 'Lists' }} />
			<Drawer.Screen
				name='twitter-circle'
				options={{ title: 'Twitter Circle' }}
			/>
			<Drawer.Screen name='topics' options={{ title: 'Topics' }} />
		</Drawer>
	);
}
