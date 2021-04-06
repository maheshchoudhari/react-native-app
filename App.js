import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{ padding: 25 }} >
      <View style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
        <TextInput
          placeholder="Course Goal"
          style={{ width: '80%', borderColor: 'green', borderWidth: 5, padding: 20 }}
        />
        <TextInput
          placeholder="Your Life Goal 2"
          style={{ width: '80%', borderColor: 'blue', borderWidth: 5, padding: 20 }}
        />
        <Button title="Add" />
      </View>
        <View
        style={{
          padding: 25,
          flexDirection: 'column',
          width: '80%',
          height: '50%',
          justifyContent: 'space-around',
          alignItems: 'stretch',
        }}
        >
          <View
          style={{
            backgroundColor: 'red',
            flex: 1,
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}
          >
          <Text>Red Flex</Text>
          </View>
          <View
          style={{
            backgroundColor: 'yellow',
            flex: 1,
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}
          >
            <Text>Yellow Flex</Text>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({});