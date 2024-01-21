import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { gql } from 'graphql-request';
import { useQuery } from '@tanstack/react-query';
import graphqlclient from '../graphqlClient';

const setsQuery = gql`
  query exercises {
    sets {
      documents {
        _id
        exercise
        reps
        weight
      }
    }
  }
`;

const SetsList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['sets'],
    queryFn: () => graphqlclient.request(setsQuery),
  });
  if (isLoading) {
    return <ActivityIndicator />;
  }
  console.log(data.sets);
  return (
    <FlatList
      data={data.sets.documents}
      renderItem={({ item }) => (
        <Text
          style={{
            backgroundColor: 'white',
            marginVertical: 5,
            padding: 10,
            borderRadius: 5,
            overflow: 'hidden',
          }}>
          {item.reps} x {item.weight}
        </Text>
      )}
    />
  );
};

export default SetsList;

const styles = StyleSheet.create({});
