import { useLocalSearchParams } from 'expo-router';
import { Text, ScrollView, View, StyleSheet, ActivityIndicator } from 'react-native';
import exercises from '../../assets/data/exercises.json';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { gql } from 'graphql-request';
import { useQuery } from '@tanstack/react-query';
import graphqlClient from '../graphqlClient';
import NewSetInput from '../components/NewSetInput';

const exerciseQuery = gql`
  query exercises($name: String) {
    exercises(name: $name) {
      name
      muscle
      equipment
      instructions
    }
  }
`;

export default function ExerciseDetailsScreen() {
  const { name } = useLocalSearchParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ['exercises', name],
    queryFn: () =>
      graphqlClient.request(exerciseQuery, {
        name,
      }),
  });

  const [isInstructionExpanded, setIsInstructionExpanded] = useState(false);

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Failed to fetch data</Text>;
  }

  const exercise = data.exercises[0];

  if (!exercise) {
    return <Text>Exercise not found</Text>;
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen options={{ title: exercise.name }} />
      <View style={styles.panel}>
        <Text style={styles.exerciseName}>{exercise.name}</Text>
        <Text style={styles.exerciseSubtitle}>
          <Text style={styles.subValue}>{exercise.muscle}</Text> |{' '}
          <Text style={styles.subValue}>{exercise.equipment}</Text>
        </Text>
      </View>

      <View style={styles.panel}>
        <Text style={styles.instrunctions} numberOfLines={!isInstructionExpanded ? 3 : 0}>
          {exercise.instructions}
        </Text>
        <Text
          onPress={() => setIsInstructionExpanded(!isInstructionExpanded)}
          style={styles.seeMore}>
          {!isInstructionExpanded ? 'See more' : 'See Less'}
        </Text>
      </View>

      <NewSetInput />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
  },
  panel: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: '500',
  },
  exerciseSubtitle: { color: 'dimgray' },

  subValue: {
    textTransform: 'capitalize',
  },
  instrunctions: {
    fontSize: 16,
    lineHeight: 22,
  },
  seeMore: {
    alignSelf: 'center',
    padding: 10,
    fontWeight: '600',
    color: 'gray',
  },
});
