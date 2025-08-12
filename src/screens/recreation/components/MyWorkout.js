import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {AddButton, CustomText} from '../../../components';
import styles from './style';

export default function MyWorkout(props) {
  const {
    myWorkout,
    onSelectWorkout,
    // setIsVisible,
    setHeading,
    setScreen,
    setBtnTitle,
    setSubText,
    setWorkoutModal,
    setDatePickerModal,
    setShowDeleteBtn,
    date,
    month,
    year,
    isDateSelected,
    incrementDate,
    decrementDate,
    getWeekOrDays,
  } = props;

  return (
    <View style={styles.setMargin}>
      <Text style={styles.textStyle1}>Daily Reminder</Text>
      <Text style={styles.textStyle2}>DON&apos;T FORGET TO STRETCH</Text>

      <View style={styles.dateView}>
        <TouchableOpacity activeOpacity={0.5} onPress={decrementDate}>
          <MaterialIcons
            name="keyboard-arrow-left"
            size={30}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            setDatePickerModal(true);
          }}>
          <Text style={styles.dateText}>
            {isDateSelected
              ? `${month}/${date}/${year}`
              : `${
                  new Date().getMonth() + 1
                }/${new Date().getDate()}/${new Date().getFullYear()}`}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onPress={incrementDate}>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={30}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
      </View>

      {myWorkout.map(item => (
        <TouchableOpacity
          key={item.id}
          activeOpacity={0.5}
          style={styles.textView}
          onPress={() => {
            setScreen('');
            setBtnTitle('View');
            setHeading(item.name);
            setShowDeleteBtn(true);
            onSelectWorkout(item);
            setSubText(
              `Week ${
                parseInt(item.week, 10) +
                getWeekOrDays(
                  new Date(item.createdAt).toLocaleDateString(),
                  new Date(`${month}/${date}/${year}`).toLocaleDateString(),
                  true,
                  parseInt(item.day, 10),
                )
              } Day ${getWeekOrDays(
                new Date(item.createdAt).toLocaleDateString(),
                new Date(`${month}/${date}/${year}`).toLocaleDateString(),
                false,
                parseInt(item.day, 10),
              )}`,
            );
          }}>
          <CustomText text={item.name} style={styles.setMargin3} />
          <CustomText
            text={
              parseInt(item.week, 10) +
              getWeekOrDays(
                new Date(item.createdAt).toLocaleDateString(),
                new Date(`${month}/${date}/${year}`).toLocaleDateString(),
                true,
                parseInt(item.day, 10),
              )
            }
            style={styles.customTextStyle}
          />
          <CustomText
            text={getWeekOrDays(
              new Date(item.createdAt).toLocaleDateString(),
              new Date(`${month}/${date}/${year}`).toLocaleDateString(),
              false,
              parseInt(item.day, 10),
            )}
            style={styles.customTextStyle}
          />
        </TouchableOpacity>
      ))}

      <View style={styles.setMargin2}>
        <AddButton
          onPress={() => {
            setWorkoutModal(true);
            setHeading('Add Workout');
            setSubText('Select');
            setBtnTitle('Next');
          }}
        />
      </View>
    </View>
  );
}

MyWorkout.propTypes = {
  myWorkout: PropTypes.arrayOf(PropTypes.any).isRequired,
  // setIsVisible: PropTypes.func.isRequired,
  onSelectWorkout: PropTypes.func.isRequired,
  setHeading: PropTypes.func.isRequired,
  setScreen: PropTypes.func.isRequired,
  setBtnTitle: PropTypes.func.isRequired,
  setSubText: PropTypes.func.isRequired,
  setWorkoutModal: PropTypes.func.isRequired,
  setDatePickerModal: PropTypes.func.isRequired,
  setShowDeleteBtn: PropTypes.func.isRequired,
  date: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  isDateSelected: PropTypes.bool.isRequired,
  incrementDate: PropTypes.func.isRequired,
  decrementDate: PropTypes.func.isRequired,
  getWeekOrDays: PropTypes.func.isRequired,
};
