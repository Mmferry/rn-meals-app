import React from "react";
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealsScreen = (props) => {
  const { categoryId } = props.route.params;
  const selectedCategory = CATEGORIES.find(
    (category) => category.id === categoryId
  );

  const availableMeals = useSelector(state => state.meals.filteredMeals)

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  props.navigation.setOptions({
    title: selectedCategory.title,
  });

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};


export default CategoryMealsScreen;
