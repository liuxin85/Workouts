import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

const NewSetInput = () => {
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');

  const addSet = () => {
    console.warn('Add set', reps, weight);

    // save data in the database
    setReps('');
    setWeight('');
  };
  return (
    <View style={styles.container}>
      <TextInput
        keyboardType="numeric"
        value={reps}
        onChangeText={setReps}
        placeholder="Reps"
        style={styles.input}
      />
      <TextInput
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
        placeholder="Weight"
        style={styles.input}
      />
      <Button title="Add" onPress={addSet} />
    </View>
  );
};

export default NewSetInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    gap: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    flex: 1,
    borderRadius: 5,
    borderColor: 'gainsboro',
  },
});
