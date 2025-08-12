import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {
  Modal,
  Portal,
  Text,
  Button,
  Provider,
  Headline,
} from 'react-native-paper';
import PropTypes from 'prop-types';
import {colors, strings} from '../../../resources';
import styles from './style';
import ModalButton from './ModalButton';
import CloseIcon from './CloseIcon';

const ClearTheme = ({
  visibleClearTheme,
  hideClearTheme,
  showWheelPicker,
  showDialog,
}) => (
  <Provider>
    <Portal>
      <Modal
        visible={visibleClearTheme}
        onDismiss={hideClearTheme}
        contentContainerStyle={styles.editModalContainer}>
        <View style={styles.modalHead}>
          <Headline style={styles.headline}>
            {strings.clearTheme.title}
          </Headline>
          <CloseIcon onPress={hideClearTheme} />
        </View>

        <Headline style={styles.editTitle}>
          {strings.clearTheme.selectRange}
        </Headline>
        <View style={{flexDirection: 'row'}}>
          <Button
            mode="contained"
            icon="chevron-down"
            onPress={showWheelPicker}
            style={styles.select}>
            {strings.calendarMenu.select}
          </Button>
          <TouchableOpacity style={{margin: 7}} onPress={showDialog}>
            <Text style={{color: colors.qccentError, fontSize: 20}}>
              {strings.button.delete}
            </Text>
          </TouchableOpacity>
        </View>
        <ModalButton label={strings.button.save} onPress={hideClearTheme} />
        <Button
          mode="contained"
          labelStyle={{
            color: colors.tertiary,
            fontSize: 20,
          }}
          style={{backgroundColor: colors.background, margin: 10}}
          uppercase={false}
          onPress={hideClearTheme}>
          {strings.button.cancel}
        </Button>
      </Modal>
    </Portal>
  </Provider>
);

ClearTheme.propTypes = {
  visibleClearTheme: PropTypes.bool.isRequired,
  hideClearTheme: PropTypes.func.isRequired,
  showWheelPicker: PropTypes.func.isRequired,
  showDialog: PropTypes.func.isRequired,
};
export default ClearTheme;
