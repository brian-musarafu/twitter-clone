/** @format */
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { TweetType } from '../types';
import { Entypo, EvilIcons } from '@expo/vector-icons';
import IconButton from './IconButton';
import { Link } from 'expo-router';

type TweetProps = {
	tweet: TweetType;
};

const Tweet = ({ tweet }: TweetProps) => {
	return (
		<Link href={`/feed/tweet/${tweet.id}`} asChild>
			<Pressable style={styles.container}>
				<Image src={tweet.user.image} style={styles.userImage} />
				<View style={styles.mainContainer}>
					<View style={{ flexDirection: 'row' }}>
						<Text style={styles.name}>{tweet.user.name}</Text>
						<Text style={styles.username}>{tweet.user.username} · 2h</Text>
						<Entypo
							name='dots-three-horizontal'
							size={24}
							color='gray'
							style={{ marginLeft: 'auto' }}
						/>
					</View>

					<Text style={styles.content}>{tweet.content}</Text>

					{tweet.image && <Image src={tweet.image} style={styles.image} />}
					<View style={styles.footer}>
						{/* Comment Button */}
						<IconButton icon='comment' text={tweet.numberOfComments} />
						<IconButton icon='retweet' text={tweet.numberOfRetweets} />
						<IconButton icon='heart' text={tweet.numberOfLikes} />
						<IconButton icon='chart' text={tweet.impressions || 0} />
						<IconButton icon='share-apple' />
					</View>
				</View>
			</Pressable>
		</Link>
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
	name: { fontWeight: '600' },
	username: {
		color: 'gray',
		marginLeft: 5,
	},
	mainContainer: {
		marginLeft: 10,
		flex: 1,
	},
	content: {
		lineHeight: 20,
		marginTop: 5,
	},
	image: {
		width: '100%',
		aspectRatio: 16 / 9,
		marginVertical: 10,
		borderRadius: 15,
	},
	footer: {
		flexDirection: 'row',
		marginVertical: 5,
		justifyContent: 'space-between',
	},
});
