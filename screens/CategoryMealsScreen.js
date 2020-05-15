import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealsScreen = (props) => {
  const { categoryId } = props.route.params;
  const selectedCategory = CATEGORIES.find(
    (category) => category.id === categoryId
  );
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  props.navigation.setOptions({
    title: selectedCategory.title,
  });

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

const styles = StyleSheet.create({});

export default CategoryMealsScreen;
