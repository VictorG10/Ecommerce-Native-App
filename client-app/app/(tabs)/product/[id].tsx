import { Platform, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import CommonHeader from "@/components/CommonHeader";
import AppColors from "@/constants/Colors";
import { Product } from "@/type";
import { getProduct } from "@/libs/api";

const SingleProductScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchProductData = async () => {
      setLoading(true);
      try {
        const data = await getProduct(Number(id));
        setProduct(data);
      } catch (error) {
        setError("Failed to fetch product data");
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchProductData();
  }, [id]);

  console.log("SPA: ", product);

  return (
    <View
      style={{
        paddingTop: Platform.OS === "ios" ? 30 : 0,
        backgroundColor: AppColors.background.primary,
      }}
    >
      <CommonHeader />
    </View>
  );
};

export default SingleProductScreen;

const styles = StyleSheet.create({});
