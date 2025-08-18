/* eslint-disable react/prop-types */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RFValue } from 'react-native-responsive-fontsize';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../resources';
import { DashboardWrapper } from '../screens/dashboard';
import { JournalWrapper } from '../screens/journal';
import { NutritionWrapper } from '../screens/nutrition';
import { RecreationWrapper } from '../screens/recreation';
import { SettingWrapper } from '../screens/setting';
import CalendarNavigation from './CalendarNavigation';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      lazy={false}
      initialRouteName="Calendar"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.lightGreen,
        tabBarStyle: {
          borderTopWidth: 1,
          backgroundColor: colors.background,
        },
        tabBarLabelStyle: {
          fontSize: RFValue(8),
          marginTop: 3,
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
