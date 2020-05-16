import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet } from "react-native";

import MealList from "../components/MealList";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Color";

const FavoritesScreen = (props) => {
  const favMeals = useSelector(state => state.meals.favoriteMeals)

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

  if( favMeals.length === 0 || !favMeals){
    return (
      <View style={styles.content}>
        <Text style={styles.text}>No favorite meals found. start adding some!</Text>
      </View>
    )
  }

  return <MealList listData={favMeals} navigation={props.navigation} />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontFamily: "open-sans-bold",
  }
})

export default FavoritesScreen;
