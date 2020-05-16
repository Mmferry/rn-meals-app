import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'

import MealItem from "./MealItem";

const MealList = props => {

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
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        style={{width: "90%",}}
      />
    </View>
  )
}

export default MealList

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
