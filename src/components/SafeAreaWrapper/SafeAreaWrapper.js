import React from 'react';
import { View, StatusBar, Platform } from 'react-native';
import PropTypes from 'prop-types';

export default function SafeAreaWrapper({ children, style, backgroundColor = '#000000' }) {
  const statusBarHeight = Platform.OS === 'ios' ? 50 : StatusBar.currentHeight || 0;
  
  return (
    <View style={[{ flex: 1, backgroundColor, paddingTop: statusBarHeight }, style]}>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor={backgroundColor}
        translucent={true}
      />
      {children}
    </View>
  );
}

SafeAreaWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  backgroundColor: PropTypes.string,
};
