/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Journal } from '../../components';
import {
  editJournalEntry,
  getJournalEntries,
  getTraits,
} from '../../../../redux/actions';

const listData = [
  {
    id: 1,
    title: 'DailyEntry',
    heading: 'Daily Entry',
    screen: 'DailyEntry',
    isEmpty: true,
  },
  {
    id: 2,
    title: 'WeightLog',
    heading: 'Weight Log',
    screen: 'WeightLog',
    isEmpty: true,
  },
  {
    id: 3,
    title: 'CaloriesEntry',
    heading: 'Calories In/Out',
    screen: 'Calories',
    isEmpty: true,
  },
  {
    id: 4,
    title: 'SupplementLog',
    heading: 'Supplement Log',
    screen: 'SupplementLog',
    isEmpty: true,
  },
  {
    id: 5,
    title: 'WeeklyEntry',
    heading: 'Weekly Review',
    screen: 'WeeklyEntry',
    isEmpty: true,
  },
  {
    id: 6,
    title: 'QuarterlyEntry',
    heading: 'Quarterly Review',
    screen: 'QuarterlyEntry',
    isEmpty: true,
  },
];

let yearsList = [];

export default function JournalPage(props) {
  const { navigation, getAllJournalEntries, onEditEntry, getAllTraits } = props;
  const [loader, setLoader] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [pageDetail, setPageDetail] = useState({});
  const [permissionModal, setPermissionModal] = useState(false);
  const [datePickerModal, setDatePickerModal] = useState(false);
  const [isDateSelected, setIsDateSelected] = useState(false);
  const [date, setDate] = useState(new Date().getDate());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  const [daysInMonth, setDaysInMonth] = useState(0);

  useEffect(() => {
    getDaysInMonth(new Date().getMonth() + 1);
    getAllEntries(new Date());
    // getAllTraits();

    yearsList = [];

    for (let i = 0; i <= new Date().getFullYear() - 1900; i += 1) {
      yearsList.push({ id: i, value: `${1900 + i}` });
    }
  }, []);

  const getDaysInMonth = currentMonth => {
    const dt = new Date();
    const dtYear = dt.getFullYear();

    setDaysInMonth(new Date(dtYear, currentMonth, 0).getDate());
  };

  const getAllEntries = async JEDate => {
    setLoader(true);
    const d = new Date(JEDate);
    d.setHours(0, 0, 0, 0);

    setDate(d.getDate());
    setMonth(d.getMonth() + 1);
    setYear(d.getFullYear());

    getDaysInMonth(d.getMonth() + 1);
    await getAllJournalEntries(d.getTime());
    setLoader(false);
  };

  const incrementDate = () => {
    setIsDateSelected(true);

    const currentDayInMilli = new Date(
      moment(`${year}/${month}/${date}`),
    ).getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const nextDayInMilli = currentDayInMilli + oneDay;
    const nextDate = new Date(nextDayInMilli);

    getAllEntries(nextDate);
  };

  const decrementDate = () => {
    setIsDateSelected(true);

    const currentDayInMilli = new Date(
      moment(`${year}/${month}/${date}`),
    ).getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const previousDayInMilli = currentDayInMilli - oneDay;
    const previousDate = new Date(previousDayInMilli);

    getAllEntries(previousDate);
  };

  const onConfirmDatePicker = () => {
    setIsDateSelected(true);
    setDatePickerModal(false);

    const currentDayInMilli = new Date(
      moment(`${year}/${month}/${date}`),
    ).getTime();

    getAllEntries(currentDayInMilli);
  };

  const onCancelDatePicker = () => {
    setIsDateSelected(false);
    setDatePickerModal(false);
    getAllEntries(new Date());
  };

  const onDeleteJournalEntry = async () => {
    setLoader(true);
    setIsVisible(false);
    setPermissionModal(false);

    const d = new Date(pageDetail.date);
    d.setHours(0, 0, 0, 0);

    const entry = pageDetail.title;
    const { entryId } = pageDetail;

    delete pageDetail.heading;
    delete pageDetail.title;
    delete pageDetail.screen;
    delete pageDetail.date;
    delete pageDetail.entryId;

    const response = await onEditEntry(entryId, {
      [entry]: {
        ...pageDetail,
        entryDate: d.getTime(),
        isDeleted: true,
      },
    });

    if (response === true) {
      getAllEntries(d.getTime());
    }
  };

  return (
    <Journal
      {...props}
      navigation={navigation}
      loader={loader}
      listData={listData}
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      pageDetail={pageDetail}
      setPageDetail={setPageDetail}
      permissionModal={permissionModal}
      setPermissionModal={setPermissionModal}
      datePickerModal={datePickerModal}
      setDatePickerModal={setDatePickerModal}
      yearsList={yearsList}
      date={date}
      setDate={setDate}
      month={month}
      setMonth={setMonth}
      year={year}
      setYear={setYear}
      isDateSelected={isDateSelected}
      incrementDate={incrementDate}
      decrementDate={decrementDate}
      onDeleteJournalEntry={onDeleteJournalEntry}
      onConfirmDatePicker={onConfirmDatePicker}
      onCancelDatePicker={onCancelDatePicker}
      daysInMonth={daysInMonth}
    />
  );
}

JournalPage.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  getAllJournalEntries: PropTypes.func.isRequired,
  onEditEntry: PropTypes.func.isRequired,
  getAllTraits: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  journalEntries: state.journal?.allEntries,
  entryId: state.journal?.allEntries?.id,
});

const mapDispatchToProps = dispatch => ({
  getAllJournalEntries: date => dispatch(getJournalEntries(date)),
  onEditEntry: (id, data) => dispatch(editJournalEntry(id, data)),
  getAllTraits: () => dispatch(getTraits()),
});

export const JournalWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(JournalPage);
