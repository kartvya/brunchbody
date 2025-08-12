/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
import React from 'react';
import {SafeAreaView, View, Image, Dimensions, ScrollView} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import PropTypes from 'prop-types';
import {CustomHeader, Button} from '../../../../components';
import {images} from '../../../../resources';
import styles from './style';

export default function Tutorials({onBackPress, onNextPress, currentImage}) {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView contentContainerStyle={{flexGrow: 1, paddingBottom: 40}}>
        <CustomHeader onPress={onBackPress} />
        <View style={{flex: 1}}>
          <Image
            style={{width: Dimensions.get('window').width}}
            source={images.tutorialImages[currentImage]}
            resizeMode="contain"
          />
        </View>

        <View style={{marginHorizontal: 80}}>
          <Button
            onPress={onNextPress}
            style={{height: RFValue(32)}}
            title={
              currentImage === 0
                ? 'Get Started'
                : currentImage === images.tutorialImages.length - 1
                ? 'Completed'
                : 'Next'
            }
            titleStyle={{color: 'white', fontSize: RFValue(16)}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

Tutorials.propTypes = {
  onNextPress: PropTypes.func.isRequired,
  onBackPress: PropTypes.func.isRequired,
  currentImage: PropTypes.number.isRequired,
};
