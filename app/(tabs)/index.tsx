import { Text, View, StyleSheet, StatusBar } from "react-native";
import Home from "../home";

export default function Index() {
  return (
    <Home>
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor="#000"
        />
        <Text style={styles.title}>홈 화면</Text>
        <Text style={styles.subtitle}>메인 탭의 첫 번째 화면입니다</Text>
      </View>
    </Home>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666666",
  },
});
