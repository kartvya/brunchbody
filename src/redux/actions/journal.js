import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  EDIT_JOURNAL_ENTRY,
  GET_ALL_JOURNAL_ENTRIES,
  GET_JOURNAL_ENTRIES,
  GET_TRAITS,
  SET_JOURNAL_ENTRY,
} from '../constants';
import {serverUrl} from '../../config';

export const getAllJournalEntries = () => async dispatch => {
  // const idToken = await AsyncStorage.getItem('auth_token');
  // const refreshToken = await AsyncStorage.getItem('refresh_token');
  // const lastUpdatedTime = await AsyncStorage.getItem('last_updated_time');
  // const lastFetchedTimeJournal = await AsyncStorage.getItem(
  //   'last_fetched_time_journal',
  // );
  // if (
  //   lastFetchedTimeJournal == null ||
  //   (lastUpdatedTime !== null &&
  //     parseInt(lastUpdatedTime, 10) - parseInt(lastFetchedTimeJournal, 10) > 0)
  // ) {
  //   console.log(
  //     'Inside getAllJournalEntries',
  //     lastFetchedTimeJournal - lastUpdatedTime,
  //   );

  //   const request = await axios({
  //     method: 'GET',
  //     baseURL: serverUrl,
  //     url: `api/user/getAllJournalEntries`,
  //     headers: {
  //       auth_token: idToken,
  //       refresh_token: refreshToken,
  //     },
  //   })
  //     .then(res => res.data)
  //     .catch(err => err.response.data);

  //   if (request.success) {
  await dispatch({type: GET_ALL_JOURNAL_ENTRIES});
  return true;
  // }

  //   return request.result ? request.result : 'Something went wrong.';
  // }
  // console.log('No new Data Found getAllJournalEntries');
  // return 'No new Data Found';
};

export const getJournalEntries = date => async dispatch => {
  // const idToken = await AsyncStorage.getItem('auth_token');
  // const refreshToken = await AsyncStorage.getItem('refresh_token');
  // const lastUpdatedTime = await AsyncStorage.getItem('last_updated_time');
  // const lastFetchedTimeEntries = await AsyncStorage.getItem(
  //   'last_fetched_time_journal_entries',
  // );
  // if (
  //   lastFetchedTimeEntries == null ||
  //   (lastUpdatedTime !== null &&
  //     parseInt(lastUpdatedTime, 10) - parseInt(lastFetchedTimeEntries, 10) > 0)
  // ) {
  //   console.log(
  //     'Inside getJournalEntries',
  //     lastFetchedTimeEntries - lastUpdatedTime,
  //   );

  //   const request = await axios({
  //     method: 'GET',
  //     baseURL: serverUrl,
  //     url: `api/user/getJournalEntries/${date}`,
  //     headers: {
  //       auth_token: idToken,
  //       refresh_token: refreshToken,
  //     },
  //   })
  //     .then(res => res.data)
  //     .catch(err => err.response.data);

  //   if (request.success) {
  //     if (request.result !== {}) {
  // console.log('request.result: ', request.result);
  await dispatch({type: GET_JOURNAL_ENTRIES, payload: {date}});
  await dispatch({type: GET_ALL_JOURNAL_ENTRIES});
  // await dispatch(getAllJournalEntries());
  //     } else dispatch({type: GET_JOURNAL_ENTRIES, payload: {}});
  //   }

  //   return request.result ? request.result : 'Something went wrong.';
  // }
  // console.log('No new Data Found getJournalEntries');
  // return 'No new Data Found';
};

export const addJournalEntry = (date, data) => async dispatch => {
  // const idToken = await AsyncStorage.getItem('auth_token');
  // const refreshToken = await AsyncStorage.getItem('refresh_token');

  // const request = await axios({
  //   method: 'POST',
  //   baseURL: serverUrl,
  //   url: 'api/user/addJournalEntry',
  //   data,
  //   headers: {
  //     auth_token: idToken,
  //     refresh_token: refreshToken,
  //   },
  // })
  //   .then(res => res.data)
  //   .catch(err => err.response.data);

  // if (request.success) {
  //   console.log('request.result[0]: ', request.result[0]);
  // dispatch({type: SET_JOURNAL_ENTRY, payload: request.result[0]});
  // dispatch(getAllJournalEntries());
  await dispatch({type: SET_JOURNAL_ENTRY, payload: {date, data}});
  return true;
  // }

  // return request.result ? request.result : 'Something went wrong.';
};

export const editJournalEntry = (id, data) => async dispatch => {
  // const idToken = await AsyncStorage.getItem('auth_token');
  // const refreshToken = await AsyncStorage.getItem('refresh_token');

  // const request = await axios({
  //   method: 'POST',
  //   baseURL: serverUrl,
  //   url: `api/user/editJournalEntry/${id}`,
  //   data,
  //   headers: {
  //     auth_token: idToken,
  //     refresh_token: refreshToken,
  //   },
  // })
  //   .then(res => res.data)
  //   .catch(err => err.response.data);

  // if (request.success) {
  //   dispatch({type: SET_JOURNAL_ENTRY, payload: request.result[0]});
  //   dispatch(getAllJournalEntries());
  await dispatch({type: EDIT_JOURNAL_ENTRY, payload: {id, data}});
  return true;
  // }

  // return request.result ? request.result : 'Something went wrong.';
};

export const getTraits = () => async dispatch => {
  const idToken = await AsyncStorage.getItem('auth_token');
  const refreshToken = await AsyncStorage.getItem('refresh_token');

  const request = await axios({
    method: 'GET',
    baseURL: serverUrl,
    url: `api/user/getTraits`,
    headers: {
      auth_token: idToken,
      refresh_token: refreshToken,
    },
  })
    .then(res => res.data)
    .catch(err => err.response.data);

  if (request.success) {
    dispatch({type: GET_TRAITS, payload: request.result});
    return true;
  }

  return request.result ? request.result : 'Something went wrong.';
};
