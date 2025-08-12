/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from 'react';
import {NativeEventEmitter, NativeModules} from 'react-native';
import ReactNativeAN from 'react-native-alarm-notification';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigation from './BottomTabNavigation';
import {WelcomeWrapper} from '../screens/welcome';
import {SplashScreenWrapper} from '../screens/splashScreen';
import {SignUpWrapper} from '../screens/signup';
import {SignInWrapper} from '../screens/signin';
import {CompleteProfileWrapper} from '../screens/completeProfile/pages/completeProfile/CompleteProfile';
import {MyAccountWrapper} from '../screens/setting/pages/MyProfile/MyAccount';
import {DashboardWrapper} from '../screens/dashboard';
import {
  CaloriesWrapper,
  DailyEntryWrapper,
  QuarterlyEntryWrapper,
  SupplementLogWrapper,
  TraitDirectoryWrapper,
  WeeklyEntryWrapper,
  WeightLogWrapper,
} from '../screens/journal';
import {
  NutritionWrapper,
  SupplementWrapper,
  MealWrapper,
  MealsListWrapper,
  MealDirectoryWrapper,
  MealDetailWrapper,
} from '../screens/nutrition';
import {
  EditProgramWrapper,
  EditRoutineWrapper,
  MyExercisesWrapper,
  ProgramManagerWrapper,
  RoutineManagerWrapper,
} from '../screens/recreation';
import {
  ExportToCSVWrapper,
  MyProfileWrapper,
  TermsOfUseWrapper,
  PrivacyPolicyWrapper,
  AbbrevationsWrapper,
  TutorialsWrapper,
  MyVitalsWrapper,
  MyEmailWrapper,
  MyPasswordWrapper,
  DeleteAccountWrapper,
} from '../screens/setting';

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

export default function RootNavigation() {
  const {RNAlarmNotification} = NativeModules;
  const RNAlarmEmitter = new NativeEventEmitter(RNAlarmNotification);

  const dismissSubscription = RNAlarmEmitter.addListener(
    'OnNotificationDismissed',
    data => console.log(data),
  );

  const openedSubscription = RNAlarmEmitter.addListener(
    'OnNotificationOpened',
    data => {
      console.log('notification data --> ', data);
      ReactNativeAN.stopAlarmSound();
    },
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={screenOptions}
        initialRouteName="SplashScreen">
        <Stack.Screen
          name="CompleteProfile"
          component={CompleteProfileWrapper}
        />
        <Stack.Screen name="SplashScreen" component={SplashScreenWrapper} />
        <Stack.Screen name="SignUp" component={SignUpWrapper} />
        <Stack.Screen name="SignIn" component={SignInWrapper} />
        <Stack.Screen name="Welcome" component={WelcomeWrapper} />
        <Stack.Screen name="Home" component={BottomTabNavigation} />
        <Stack.Screen name="WeightLog" component={WeightLogWrapper} />
        <Stack.Screen name="QuarterlyEntry" component={QuarterlyEntryWrapper} />
        <Stack.Screen name="DailyEntry" component={DailyEntryWrapper} />
        <Stack.Screen name="WeeklyEntry" component={WeeklyEntryWrapper} />
        <Stack.Screen name="SupplementLog" component={SupplementLogWrapper} />
        <Stack.Screen name="Calories" component={CaloriesWrapper} />
        <Stack.Screen name="Nutrition" component={NutritionWrapper} />
        <Stack.Screen name="Supplement" component={SupplementWrapper} />
        <Stack.Screen name="Meal" component={MealWrapper} />
        <Stack.Screen name="MealsList" component={MealsListWrapper} />
        <Stack.Screen name="RoutineManager" component={RoutineManagerWrapper} />
        <Stack.Screen name="ProgramManager" component={ProgramManagerWrapper} />
        <Stack.Screen name="EditProgram" component={EditProgramWrapper} />
        <Stack.Screen name="EditRoutine" component={EditRoutineWrapper} />
        <Stack.Screen name="MyProfile" component={MyProfileWrapper} />
        <Stack.Screen name="MyVitals" component={MyVitalsWrapper} />
        <Stack.Screen name="MyAccount" component={MyAccountWrapper} />
        <Stack.Screen name="MyEmail" component={MyEmailWrapper} />
        <Stack.Screen name="MyPassword" component={MyPasswordWrapper} />
        <Stack.Screen name="DeleteAccount" component={DeleteAccountWrapper} />
        <Stack.Screen name="ExportToCSV" component={ExportToCSVWrapper} />
        <Stack.Screen name="TermsOfUse" component={TermsOfUseWrapper} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyWrapper} />
        <Stack.Screen name="Abbrevations" component={AbbrevationsWrapper} />
        <Stack.Screen name="Tutorials" component={TutorialsWrapper} />
        <Stack.Screen name="Dashboard" component={DashboardWrapper} />
        <Stack.Screen name="TraitDirectory" component={TraitDirectoryWrapper} />
        <Stack.Screen name="MealDirectory" component={MealDirectoryWrapper} />
        <Stack.Screen name="MealDetail" component={MealDetailWrapper} />
        <Stack.Screen name="MyExercises" component={MyExercisesWrapper} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
