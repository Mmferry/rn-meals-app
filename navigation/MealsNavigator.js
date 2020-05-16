import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Color";
import FavoritesScreen from "../screens/FavoritesScreen";
import FilterScreen from "../screens/FiltersScreen";

const Stack = createStackNavigator();
const Tab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const MealsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ gestureEnabled: false, headerBackTitle: "back" }}
    >
      <Stack.Screen
        name="Home"
        component={CategoriesScreen}
        options={{
          title: "Categories",
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.primaryColor : "transparent",
          },
          headerTintColor:
            Platform.OS === "android" ? "#fff" : Colors.primaryColor,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerMode: "screen",
        }}
      />
      <Stack.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={{
          title: "Category Meals",
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.primaryColor : "transparent",
          },
          headerTintColor:
            Platform.OS === "android" ? "#fff" : Colors.primaryColor,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          mode: "modal",
        }}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={{
          title: "Meal Detail",
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.primaryColor : "transparent",
          },
          headerTintColor:
            Platform.OS === "android" ? "#fff" : Colors.primaryColor,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
};

const FavNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "Favorite Meals",
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.primaryColor : "transparent",
          },
          headerTintColor:
            Platform.OS === "android" ? "#fff" : Colors.primaryColor,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerMode: "screen",
        }}
      />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

const androidTabBarOptions = {
  inactiveColor: "gray",
  activeColor: Colors.accentColor,
  shifting: true,
};

const iosTabBarOptions = {
  activeTintColor: Colors.primaryColor,
  inactiveTintColor: "gray",
};

const MealsFavTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={
        Platform.OS === "android" ? androidTabBarOptions : iosTabBarOptions
      }
      barStyle={{ backgroundColor: "#fff" }}
    >
      <Tab.Screen
        name="Meals"
        component={MealsNavigator}
        options={{
          tabBarLabel: "Meals",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-restaurant" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavNavigator}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-star" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const FiltersNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Filters"
        component={FilterScreen}
        options={{
          title: "Filters",
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.primaryColor : "transparent",
          },
          headerTintColor:
            Platform.OS === "android" ? "#fff" : Colors.primaryColor,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerMode: "screen",
        }}
      />
    </Stack.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="MealsFavs"
        component={MealsFavTabNavigator}
        options={{
          title: "Meals",
        }}
      />
      <Drawer.Screen name="Filters" component={FiltersNavigator} />
    </Drawer.Navigator>
  );
};

export default MainNavigation;
