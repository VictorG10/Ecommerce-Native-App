import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "@/components/HomeHeader";

const ShopScreen = () => {
  return (
    <SafeAreaView>
      <HomeHeader />
      <View>
        <Text>ShopScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({});
