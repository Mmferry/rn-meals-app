import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

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

  const renderMealItem = ({ item }) => {
    return (
      <MealItem
        title={item.title}
        duration={item.duration}
        complexity={item.complexity.toUpperCase()}
        affordability={item.affordability.toUpperCase()}
        image={item.imageUrl}
        onSelectMeal={() => props.navigation.navigate("MealDetail", {
          mealId: item.id
        })}
        />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        style={{width: "90%",}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
