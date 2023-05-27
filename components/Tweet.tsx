/** @format */
import { StyleSheet, Text, View, Image } from 'react-native';

const Tweet = ({ tweet }) => {
	return (
		<View style={styles.container}>
			<Image src={tweet.user.image} style={styles.userImage} />
			<View style={styles.mainContainer}>
				<Text style={styles.userName}>{tweet.user.name}</Text>
				<Text>{tweet.content}</Text>
			</View>
		</View>
	);
};
export default Tweet;
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 10,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: 'lightgray',
	},
	userImage: {
		width: 50,
		height: 50,
		borderRadius: 50,
	},
	userName: { fontWeight: '100' },
	mainContainer: {
		marginLeft: 10,
		flex: 1,
	},
});
