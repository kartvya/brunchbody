/* eslint-disable react/prop-types */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';
import { DashboardWrapper } from '../screens/dashboard';
import { JournalWrapper } from '../screens/journal';
import { SettingWrapper } from '../screens/setting';
import { NutritionWrapper } from '../screens/nutrition';
import CalendarNavigation from './CalendarNavigation';
import { RecreationWrapper } from '../screens/recreation';
import { colors } from '../resources';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator
      lazy={false}
      initialRouteName="Calendar"
      tabBarOptions={{
        activeTintColor: colors.icon,
        style: {
          height: 60,
          paddingTop: 5,
          paddingBottom: 5,
          borderTopWidth: 0,
          backgroundColor: colors.background,
        },
        labelStyle: {
          fontSize: RFValue(8),
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={DashboardWrapper}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={RFValue(25)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Journal"
        component={JournalWrapper}
        options={{
          tabBarLabel: 'Journal',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="notebook"
              color={color}
              size={RFValue(25)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarNavigation}
        options={{
          tabBarLabel: 'Calendar',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="calendar"
              color={color}
              size={RFValue(25)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Nutrition"
        component={NutritionWrapper}
        options={{
          tabBarLabel: 'Nutrition',
          tabBarIcon: ({ color }) => (
            <Icon name="restaurant" color={color} size={RFValue(25)} />
          ),
        }}
      />
      <Tab.Screen
        name="Recreation"
        component={RecreationWrapper}
        options={{
          tabBarLabel: 'Recreation',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="human-handsup"
              color={color}
              size={RFValue(25)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingWrapper}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <Icon name="settings" color={color} size={RFValue(25)} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
