import HomeHeader from "@/components/HomeHeader";
import AppColors from "@/constants/Colors";
import { Product } from "@/type";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const [featuredProducts, setProducts] = useState<Product[]>([]);

  return (
    <View style={styles.wrapper}>
      <HomeHeader />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: AppColors.background.primary,
    // flex: 1,
  },
});
