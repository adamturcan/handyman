import React, { useRef } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ImageInput from "./ImageInput";
import ServiceItem from "./ServiceItem";
import ListItemSeparator from "./ListItemSeparator";

export default function ServiceItemList({ services }) {
  const scrrollView = useRef();
  return (
    <View
      style={{
        backgroundColor: "white",
        borderRadius: 20,
        height: "80%",
      }}
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        data={services}
        style={{ borderRadius: 20 }}
        contentContainerStyle={{ flexGrow: 1 }}
        keyExtractor={(service) => service.category.toString()}
        renderItem={({ item }) => (
          <View>
            <Text
              style={{
                fontSize: 30,
                margin: 10,
                color: "red",
                borderRadius: 20,
              }}
            >
              {item.category}
            </Text>
            {item.list.map((serv) => {
              return (
                <View key={serv.id} style={{ marginBottom: 10 }}>
                  <ServiceItem service={serv} />
                  <ListItemSeparator />
                </View>
              );
            })}
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 20,
  },
  image: {
    marginRight: 10,
  },
});
