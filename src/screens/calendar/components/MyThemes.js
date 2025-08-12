import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {
  Modal,
  Portal,
  Text,
  Provider,
  RadioButton,
  Headline,
} from 'react-native-paper';
import PropTypes from 'prop-types';
import {colors, strings} from '../../../resources';
import ModalButton from './ModalButton';
import CloseIcon from './CloseIcon';
import styles from './style';

const MyThemes = ({
  checkedTheme,
  setTheme,
  visibleMyTheme,
  hideMyTheme,
  openThemeModal,
}) => (
  <Provider>
    <Portal>
      <Modal
        visible={visibleMyTheme}
        onDismiss={hideMyTheme}
        contentContainerStyle={styles.editModalContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Headline style={styles.headline}>{strings.myThemes.title}</Headline>
          <CloseIcon onPress={hideMyTheme} />
        </View>
        <Headline style={styles.editTitle}>
          {strings.calendarMenu.select}
        </Headline>
        <RadioButton.Group
          value={checkedTheme}
          onValueChange={val => setTheme(val)}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{flexDirection: 'row'}}
            onPress={() => setTheme('create')}>
            <RadioButton.Android
              value="create"
              uncheckedColor={colors.nonEditableOverlays}
            />
            <Text style={styles.modalText}>{strings.myThemes.create}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{flexDirection: 'row'}}
            onPress={() => setTheme('manage')}>
            <RadioButton.Android
              value="manage"
              uncheckedColor={colors.nonEditableOverlays}
            />
            <Text style={styles.modalText}>{strings.myThemes.manage}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{flexDirection: 'row'}}
            onPress={() => setTheme('add/remove')}>
            <RadioButton.Android
              value="add/remove"
              uncheckedColor={colors.nonEditableOverlays}
            />
            <Text style={styles.modalText}>{strings.myThemes.addRemove}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{flexDirection: 'row'}}
            onPress={() => setTheme('clear')}>
            <RadioButton.Android
              value="clear"
              uncheckedColor={colors.nonEditableOverlays}
            />
            <Text style={styles.modalText}>{strings.myThemes.clear}</Text>
          </TouchableOpacity>
        </RadioButton.Group>
        <ModalButton onPress={openThemeModal} label={strings.button.next} />
      </Modal>
    </Portal>
  </Provider>
);

MyThemes.propTypes = {
  checkedTheme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
  visibleMyTheme: PropTypes.bool.isRequired,
  hideMyTheme: PropTypes.func.isRequired,
  openThemeModal: PropTypes.func.isRequired,
};
export default MyThemes;
