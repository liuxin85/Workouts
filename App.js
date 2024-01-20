import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View } from 'react-native';
import exercises from './assets/data/exercises.json';
import ExerciesListItem from './src/components/ExerciseListItem';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ gap: 10 }}
        keyExtractor={(item, index) => item.name + index}
        data={exercises}
        renderItem={({ item }) => <ExerciesListItem item={item} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    justifyContent: 'center',
    padding: 10,
    paddingTop: 70,
  },
});
