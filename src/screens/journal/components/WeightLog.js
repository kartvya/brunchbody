import PropTypes from 'prop-types';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Button,
  CustomHeader,
  CustomModal,
  PermissionModal,
  TextButton,
} from '../../../components';
import { colors } from '../../../resources';
import styles from './style';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WeightLog(props) {
  const {
    loader,
    permissionModal,
    setPermissionModal,
    entryName,
    setEntryName,
    weight,
    setWeight,
    note,
    setNote,
    onSaveHandler,
    alertHeading,
    alertText,
    onDonePermissionModal,
    setCheck,
  } = props;

  console.log(entryName, 'entryNameentryName');

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView contentContainerStyle={styles.container}>
        <CustomHeader />

        <View style={styles.headingView}>
          <Text style={styles.headingText2}>Weight Log</Text>
        </View>

        <View style={styles.setMargin}>
          <Text style={styles.textStyle1}>Entry Name</Text>
          <TextInput
            value={entryName}
            editable={false}
            placeholder="<Date> Weight Log"
            placeholderTextColor={colors.grey}
            onChangeText={text => setEntryName(text)}
            style={[styles.textInputStyle, { color: colors.grey }]}
          />
        </View>

        <View style={styles.setMargin}>
          <Text style={styles.textStyle1}>Enter Weight (lbs)</Text>
          <TextInput
            value={weight}
            placeholder="lbs"
            placeholderTextColor={colors.grey}
            onChangeText={text => setWeight(text)}
            keyboardType="number-pad"
            style={styles.textInputStyle}
          />
        </View>

        <View style={styles.setMargin}>
          <Text style={styles.textStyle1}>Note</Text>
          <TextInput
            multiline
            value={note}
            placeholder="Notes"
            style={styles.textArea}
            placeholderTextColor={colors.grey}
            onChangeText={text => setNote(text)}
          />
        </View>

        <View style={styles.btnView}>
          <Button loader={loader} title="Save" onPress={onSaveHandler} />
        </View>

        <TouchableOpacity activeOpacity={0.5} style={styles.bottomTextView}>
          <TextButton
            title="Clear Entry"
            onPress={() => {
              setPermissionModal(true);
              setCheck('clearEntry');
            }}
          />
        </TouchableOpacity>
      </ScrollView>

      <CustomModal
        isVisible={permissionModal}
        onDismiss={() => {
          setPermissionModal(false);
          setCheck('');
        }}
        content={
          <PermissionModal
            heading={alertHeading}
            text={alertText}
            isCancelBtn={
              alertHeading !== 'Success!' && alertHeading !== 'Error!'
            }
            onDone={onDonePermissionModal}
            onCancel={() => {
              setPermissionModal(false);
              setCheck('');
            }}
          />
        }
      />
    </SafeAreaView>
  );
}

WeightLog.propTypes = {
  loader: PropTypes.bool.isRequired,
  permissionModal: PropTypes.bool.isRequired,
  setPermissionModal: PropTypes.func.isRequired,
  entryName: PropTypes.string.isRequired,
  setEntryName: PropTypes.func.isRequired,
  weight: PropTypes.number.isRequired,
  setWeight: PropTypes.func.isRequired,
  note: PropTypes.string.isRequired,
  setNote: PropTypes.func.isRequired,
  onSaveHandler: PropTypes.func.isRequired,
  alertHeading: PropTypes.string.isRequired,
  alertText: PropTypes.string.isRequired,
  onDonePermissionModal: PropTypes.func.isRequired,
  setCheck: PropTypes.func.isRequired,
};
