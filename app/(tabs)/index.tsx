import { StyleSheet, ScrollView, View, Image, TouchableOpacity, TextInput } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { Entypo, FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";
import Screen from "@/components/Screen";
import { useState } from "react";
import { useTheme } from "@react-navigation/native";

function Home() {
	const theme = useTheme();
	const [isSearchTypeGoogle, setIsSearchTypeGoogle] = useState<boolean>(true);

	return (
		<Screen>
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

			<ScrollView>
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

				<View style={[styles.mh_10, , styles.mv_15, styles.row, styles.justifyBetween]}>
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

				<ThemedView style={styles.h_2} backgroundTheme="foreground" />
			</ScrollView>
		</Screen>
	);
}

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
		height: 65,
		width: 90,
		borderRadius: 35,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "red",
	},
	h_2: {
		height: 2,
	},
	mh_10: {
		marginHorizontal: 10,
	},
	mv_15: {
		marginVertical: 15,
	},
});

export default Home;
