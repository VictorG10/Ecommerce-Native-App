import HomeHeader from "@/components/HomeHeader";
import LoadingSpinner from "@/components/LoadingSpinner";
import Wrapper from "@/components/Wrapper";
import AppColors from "@/constants/Colors";
import { useProductsStore } from "@/store/productStore";
import { Product } from "@/type";
import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const {
    products,
    categories,
    loading,
    error,
    fetchCategories,
    fetchProducts,
  } = useProductsStore();

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);
  console.log(products);

  useEffect(() => {
    if (products.length > 0) {
      const reverseProducts = [...products].reverse();
      setFeaturedProducts(reverseProducts as Product[]);
    }
  }, [products]);

  if (!loading) {
    return (
      // <Wrapper>
      //   <LoadingSpinner fullScreen />
      // </Wrapper>
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <LoadingSpinner fullScreen />
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Error: {error}</Text>
        </View>
      </SafeAreaView>
    );
  }
  return (
    <View style={styles.wrapper}>
      <HomeHeader />

      <View>
        <ScrollView>
          <View>
            <View>
              <Text>Categories</Text>
              1:28:11
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: AppColors.background.primary,
  },
  contentContainer: {
    // paddingHorizontal: 20,
    paddingLeft: 20,
  },
  scrollContainerView: {
    paddingBottom: 300,
  },
  container: {
    flex: 1,
    backgroundColor: AppColors.background.primary,
  },
  title: {
    fontFamily: "Inter-Bold",
    fontSize: 28,
    color: "white",
    marginBottom: 24,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    paddingRight: 20,
  },
  sectionTitle: {
    fontFamily: "Inter-SemiBold",
    fontSize: 18,
    color: AppColors.text.primary,
  },
  seeAllText: {
    fontFamily: "Inter-Medium",
    fontSize: 14,
    color: AppColors.primary[500],
  },
  categoriesSection: {
    marginTop: 10,
    marginBottom: 16,
  },

  categoryButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: AppColors.background.secondary,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    minWidth: 100,
    marginLeft: 5,
  },
  categoryText: {
    fontFamily: "Inter-Medium",
    fontSize: 14,
    color: AppColors.text.primary,
    marginLeft: 8,
  },
  featuredSection: {
    marginVertical: 16,
  },
  featuredProductsContainer: {},
  featuredProductContainer: {
    // marginHorizontal: 8,
  },
  newestSection: {
    marginVertical: 16,
    marginBottom: 32,
  },
  productsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingRight: 20,
  },
  productContainer: {
    width: "48%",
  },
  errorContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  errorText: {
    fontFamily: "Inter-Medium",
    fontSize: 16,
    color: AppColors.error,
    textAlign: "center",
  },
});
