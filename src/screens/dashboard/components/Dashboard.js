/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {BannerAd, BannerAdSize} from '@react-native-firebase/admob';
import {CustomTopTabs} from '../../../components';
import Day from './Day';
import Week from './Week';
import Month from './Month';
import Year from './Year';
import style from './style';

export default function Dashboard(props) {
  const {tabs, selectedTab, adUnitId} = props;

  return (
    <SafeAreaView style={style.safeAreaView}>
      <View style={style.headingView}>
        <Text style={style.headingText1}>Dashboard</Text>
      </View>

      <View>
        <CustomTopTabs {...props} data={tabs} />
      </View>

      {selectedTab === 1 ? (
        <Day {...props} />
      ) : selectedTab === 2 ? (
        <Week {...props} />
      ) : selectedTab === 3 ? (
        <Month {...props} />
      ) : (
        <Year {...props} />
      )}

      <View style={style.bannerView}>
        <BannerAd
          unitId={adUnitId}
          size={BannerAdSize.BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
      </View>
    </SafeAreaView>
  );
}

Dashboard.propTypes = {
  selectedTab: PropTypes.number.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.any).isRequired,
  adUnitId: PropTypes.string.isRequired,
};
