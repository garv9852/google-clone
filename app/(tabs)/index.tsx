import { StyleSheet, ScrollView, View, Image, TouchableOpacity, TextInput } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
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
				<Ionicons name="funnel" size={28} color={"#a8c7fa"} />

				<ThemedView backgroundTheme="foreground" style={styles.searchTypeCont}>
					<TouchableOpacity onPress={() => setIsSearchTypeGoogle(true)}>
						{isSearchTypeGoogle ? (
							<ThemedView style={styles.seachType}>
								<Image
									source={require("@/assets/images/google-icon.png")}
									style={styles.googleIcon}
								/>
								{isSearchTypeGoogle && (
									<ThemedText style={styles.ml_5}>Search</ThemedText>
								)}
							</ThemedView>
						) : (
							<View style={styles.seachType}>
								<Image
									source={require("@/assets/images/google-icon.png")}
									style={styles.googleIcon}
								/>
								{isSearchTypeGoogle && (
									<ThemedText style={styles.ml_5}>Search</ThemedText>
								)}
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
								{!isSearchTypeGoogle && (
									<ThemedText style={styles.ml_5}>Gemini</ThemedText>
								)}
							</ThemedView>
						) : (
							<View style={styles.seachType}>
								<Image
									source={require("@/assets/images/google-gemini.png")}
									style={styles.googleIcon}
								/>
								{!isSearchTypeGoogle && (
									<ThemedText style={styles.ml_5}>Gemini</ThemedText>
								)}
							</View>
						)}
					</TouchableOpacity>
				</ThemedView>

				<Ionicons name="funnel" size={28} color={"#a8c7fa"} />
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
						<MaterialIcons name="search" size={26} color={"gray"} />
						<ThemedText style={styles.ml_10} size={28} darkColor="gray">
							Search
						</ThemedText>
					</View>

					<View style={styles.row}>
						<TouchableOpacity>
							<MaterialIcons name="mic" size={26} color={"gray"} />
						</TouchableOpacity>
						<TouchableOpacity>
							<MaterialCommunityIcons
								style={styles.ml_15}
								name="google-lens"
								size={26}
								color={"gray"}
							/>
						</TouchableOpacity>
					</View>
				</ThemedView>

				<View>

				</View>

			</ScrollView>
		</Screen>
	);
}

const styles = StyleSheet.create({
	head: {
		justifyContent: "space-between",
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
	row: {
		flexDirection: "row",
	},
	alignCenter: {
		alignItems: "center",
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
});

export default Home;
