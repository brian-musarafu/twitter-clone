/** @format */
import { useState } from 'react';
import { Link, useRouter } from 'expo-router';
import {
	View,
	StyleSheet,
	Image,
	Text,
	TextInput,
	Pressable,
	SafeAreaView,
} from 'react-native';

const user = {
	id: 'u1',
	username: 'dangwe_01',
	name: 'Brian Musarafu',
	image:
		'https://pbs.twimg.com/profile_images/1656610878475706376/QHJAlOJh_400x400.jpg',
};

export default function NewTweet() {
	const router = useRouter();
	const [text, setText] = useState('');

	const onTweetPress = () => {
		console.warn('Posting the tweet', text);
		setText('');
		router.back();
	};
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
			<View style={styles.container}>
				<View style={styles.buttonContainer}>
					<Link href='../' style={{ fontSize: 20 }}>
						Cancel
					</Link>
					<Pressable onPress={onTweetPress} style={styles.button}>
						<Text style={styles.buttonText}>Tweet</Text>
					</Pressable>
				</View>
				<View style={styles.inputContainer}>
					<Image src={user.image} style={styles.image} />
					<TextInput
						value={text}
						onChangeText={setText}
						placeholder="What's happening?"
						multiline
						numberOfLines={5}
						style={{ flex: 1 }}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		flex: 1,
	},
	buttonContainer: {
		flexDirection: 'row',
		marginVertical: 10,
		justifyContent: 'space-between',
	},
	button: {
		backgroundColor: '#1C98F0',
		padding: 10,
		paddingHorizontal: 20,
		borderRadius: 50,
	},
	buttonText: {
		color: 'white',
		fontWeight: '600',
		fontSize: 16,
	},
	inputContainer: {
		flexDirection: 'row',
	},
	image: {
		Width: 50,
		aspectRatio: 1,
		borderRadius: 50,
		marginRight: 10,
	},
});
