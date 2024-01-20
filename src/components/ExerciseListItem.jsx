import { StyleSheet, Text, View } from 'react-native';

function ExerciesListItem({ item }) {
  return (
    <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseName}>{item.name}</Text>
      <Text style={styles.exerciseSubtitle}>
        {item.muscle?.toUpperCase()} | {item.equipment}
      </Text>
    </View>
  );
}

export default ExerciesListItem;

const styles = StyleSheet.create({
  exerciseContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    gap: 5,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: '500',
  },
  exerciseSubtitle: { color: 'dimgray' },
});
