import { Text, View } from "react-native";
import { ReactNode } from "react";

type HomeProps = {
  children?: ReactNode;
};

export default function Home({ children }: HomeProps) {
  return <View style={{ flex: 1 }}>{children || <Text>Home</Text>}</View>;
}
