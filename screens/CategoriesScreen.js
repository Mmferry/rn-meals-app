import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import HeaderButton from  "../components/HeaderButton";
import Colors from "../constants/Color";

const CategoriesScreen = (props) => {
  props.navigation.setOptions({
    title: "Categories Meal",
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

  const renderGridItem = ({ item }) => {
    return (
      <CategoryGridTile 
      title={item.title}
      color={item.color}
      onSelect={() => {
        props.navigation.navigate("CategoryMeals", {
          categoryId: item.id
        });
      }} />
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
