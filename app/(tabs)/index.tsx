import { StyleSheet, ScrollView, View, Image, TouchableOpacity, TextInput, FlatList } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { AntDesign, Entypo, FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";
import Screen from "@/components/Screen";
import { memo, useState } from "react";
import { useTheme } from "@react-navigation/native";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import NewsApi, { Article } from "@/services/News-api";

function Home() {
	const theme = useTheme();
	const [isSearchTypeGoogle, setIsSearchTypeGoogle] = useState<boolean>(true);

	return (
		<Screen>
			<ScrollView>
				<View style={styles.head}>
					<ThemedView backgroundTheme="foreground" style={styles.searchTypeCont}>
						<TouchableOpacity onPress={() => setIsSearchTypeGoogle(true)}>
							{isSearchTypeGoogle ? (
								<ThemedView style={styles.seachType}>
									<Image
										source={require("@/assets/images/google-icon.png")}
										style={styles.googleIcon}
									/>

									<ThemedText style={styles.ml_5}>Search</ThemedText>
								</ThemedView>
							) : (
								<View style={styles.seachType}>
									<Image
										source={require("@/assets/images/google-icon.png")}
										style={styles.googleIcon}
									/>
								</View>
							)}
						</TouchableOpacity>

						<TouchableOpacity onPress={() => setIsSearchTypeGoogle(false)}>
							{!isSearchTypeGoogle ? (
								<ThemedView style={styles.seachType}>
									<Image
										source={require("@/assets/images/google-gemini.png")}
										style={styles.googleIcon}
									/>

									<ThemedText style={styles.ml_5}>Gemini</ThemedText>
								</ThemedView>
							) : (
								<View style={styles.seachType}>
									<Image
										source={require("@/assets/images/google-gemini.png")}
										style={styles.googleIcon}
									/>
								</View>
							)}
						</TouchableOpacity>
					</ThemedView>
				</View>

				<View style={styles.center}>
					<Image
						source={
							theme.dark
								? require("@/assets/images/google-dark.png")
								: require("@/assets/images/google.png")
						}
						style={styles.google}
					/>
				</View>

				<ThemedView style={styles.searchCont} backgroundTheme="foreground">
					<View style={[styles.row, styles.alignCenter]}>
						<MaterialIcons name="search" size={24} color={"gray"} />
						<ThemedText
							style={[styles.ml_10, styles.mb4]}
							size={24}
							darkColor="gray"
							lightColor="gray"
						>
							Search
						</ThemedText>
					</View>

					<View style={styles.row}>
						<TouchableOpacity>
							<MaterialIcons name="mic" size={24} color={"gray"} />
						</TouchableOpacity>
						<TouchableOpacity>
							<MaterialCommunityIcons
								style={styles.ml_15}
								name="google-lens"
								size={24}
								color={"gray"}
							/>
						</TouchableOpacity>
					</View>
				</ThemedView>

				<View style={[styles.mh_10, styles.mv_15, styles.row, styles.justifyBetween]}>
					<TouchableOpacity style={[styles.feature, { backgroundColor: "#fac33745" }]}>
						<MaterialCommunityIcons
							name="image-search-outline"
							color={"#b58813"}
							size={24}
						/>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.feature, { backgroundColor: "#7495c96b" }]}>
						<Ionicons name="language" color={"#7495c9"} size={24} />
					</TouchableOpacity>
					<TouchableOpacity style={[styles.feature, { backgroundColor: "#b7cfbf52" }]}>
						<Entypo name="graduation-cap" color={"#94ab9b"} size={24} />
					</TouchableOpacity>
					<TouchableOpacity style={[styles.feature, { backgroundColor: "#db90907d" }]}>
						<MaterialCommunityIcons name="music-note-eighth" color={"#db9090"} size={24} />
					</TouchableOpacity>
				</View>

				<ThemedView style={styles.h_1} backgroundTheme="foreground" />

				<View>
					<NewsList />
				</View>
			</ScrollView>
		</Screen>
	);
}

const NewsList = () => {
	const articlesQuery = useInfiniteQuery({
		queryKey: ["articles"],
		queryFn: ({ pageParam }) => NewsApi.get_top_headlines(8, pageParam),
		initialPageParam: 1,
		getNextPageParam: (_, allpages) => allpages.length,
	});

	const articles = articlesQuery.data?.pages.map((page) => page.articles).flat();

	return <FlatList data={articles} renderItem={({ item }) => <NewsItem item={item} />} />;
};

const NewsItem: React.ExoticComponent<{ item: Article }> = memo(({ item }) => {
	return (
		<View style={styles.newsItem}>
			<Image source={{ uri: item.urlToImage }} style={styles.newsImage} />
			<ThemedText style={styles.newsTitle} type="defaultSemiBold" size={22}>
				{item.title}
			</ThemedText>

			<View>
				<ThemedText size={12}>{item.source.name}</ThemedText>
				<View>
					<AntDesign name="hearto"/>
				</View>
			</View>
			<ThemedView style={styles.h_1} backgroundTheme="foreground" />
		</View>
	);
});

const styles = StyleSheet.create({
	head: {
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "center",
		padding: 15,
	},
	searchTypeCont: {
		padding: 5,
		borderRadius: 10,
		flexDirection: "row",
	},
	seachType: {
		padding: 10,
		borderRadius: 8,
		flexDirection: "row",
		justifyContent: "center",
		marginRight: 2,
	},
	selectedSearchType: {
		marginRight: 5,
	},
	googleIcon: {
		width: 20,
		height: 20,
	},
	center: {
		justifyContent: "center",
		alignItems: "center",
	},
	google: {
		height: 45,
		width: 135,
		marginTop: 40,
	},
	ml_5: {
		marginLeft: 5,
	},
	ml_10: {
		marginLeft: 10,
	},
	ml_15: {
		marginLeft: 15,
	},
	m10: {
		margin: 10,
	},
	mb4: {
		marginBottom: 4,
	},
	row: {
		flexDirection: "row",
	},
	alignCenter: {
		alignItems: "center",
	},
	justifyBetween: {
		justifyContent: "space-between",
	},
	searchCont: {
		borderRadius: 40,
		padding: 18,
		marginTop: 30,
		marginHorizontal: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	feature: {
		flex: 1,
		height: 65,
		maxWidth: 90,
		borderRadius: 35,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "red",
	},
	h_1: {
		height: 1,
	},
	mh_10: {
		marginHorizontal: 10,
	},
	mv_15: {
		marginVertical: 15,
	},
	newsItem: {
		padding: 15,
	},
	newsImage: {
		height: 250,
		borderRadius: 20,
		flex: 1,
	},
	newsTitle:{
		marginTop:10,
		lineHeight:30
	}
});

export default Home;
