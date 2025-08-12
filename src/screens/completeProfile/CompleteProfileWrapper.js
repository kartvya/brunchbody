import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CompleteProfileWrapper = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Icon name="rocket" size={30} color="#900" />
      <Text>CompleteProfileWrapper</Text>
    </View>
  );
};

export default CompleteProfileWrapper;
