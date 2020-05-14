import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform, TouchableNativeFeedbackComponent } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Color";
import FavoritesScreen from "../screens/FavoritesScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MealsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ gestureEnabled: false }}
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

const MealsFavTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.primaryColor,
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Meals"
        component={MealsNavigator}
        options={{
          tabBarLabel: "Meals",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-restaurant" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-star" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MealsFavTabNavigator;
