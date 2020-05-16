import React from "react";
import {HeaderButtons, Item} from "react-navigation-header-buttons";

import MealList from "../components/MealList";
import {MEALS} from "../data/dummy-data";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Color";

const FavoritesScreen = (props) => {
  const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
  props.navigation.setOptions({
    title: "Your favorite meals",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-menu"
          color={Colors.primaryColor}
          onPress={() => {
            props.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  });

  return (
    <MealList listData={favMeals} navigation={props.navigation} />
  );
};


export default FavoritesScreen;
