/** @format */

import { StyleSheet, FlatList, Pressable } from 'react-native';
import { Text, View } from '../../components/Themed';
import tweets from '../../assets/data/tweets';
import Tweet from '../../components/Tweet';
import { Entypo } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function TabOneScreen() {
	return (
		<View style={styles.page}>
			<FlatList
				data={tweets}
				renderItem={({ item }) => <Tweet tweet={item} />}
			/>
			<Pressable style={styles.floatingButton}>
				<Link href='/new-tweet' asChild>
					<Entypo name='plus' size={24} color='white' />
				</Link>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: 'white',
	},
	floatingButton: {
		backgroundColor: '#1C9BF0',
		Width: 50,
		Height: 50,
		padding: 20,
		borderRadius: 100,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		right: 25,
		bottom: 15,

		shadowColor: '#000000',
		shadowOffset: {
			width: 0,
			height: 7,
		},
		shadowOpacity: 0.21,
		shadowRadius: 7.68,
		elevation: 10,
	},
});
