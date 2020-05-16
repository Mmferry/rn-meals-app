import React from "react";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealsScreen = (props) => {
  const { categoryId } = props.route.params;
  const selectedCategory = CATEGORIES.find(
    (category) => category.id === categoryId
  );

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  props.navigation.setOptions({
    title: selectedCategory.title,
  });

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <Text style={styles.text}>No meals found, may check your filter?</Text>
      </View>
    );
  }

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "open-sans-bold",
  },
});

export default CategoryMealsScreen;
