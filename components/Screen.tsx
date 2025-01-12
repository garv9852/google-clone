import { useThemeColor } from "@/hooks/useThemeColor";
import { SafeAreaView, SafeAreaViewProps } from "react-native-safe-area-context";

const Screen: React.FC<React.PropsWithChildren<SafeAreaViewProps>> = ({ style, children, ...rest }) => {
	const backgroundColor = useThemeColor({}, "background");
	return (
		<SafeAreaView
			style={[
				{
					backgroundColor,
					flex: 1,
				},
				style,
			]}
			{...rest}
		>
			{children}
		</SafeAreaView>
	);
};

export default Screen;
