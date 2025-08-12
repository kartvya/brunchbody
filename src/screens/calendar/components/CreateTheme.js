import React from 'react';
import {TouchableOpacity, View, TextInput} from 'react-native';
import {Modal, Portal, Text, Provider, Headline} from 'react-native-paper';
import PropTypes from 'prop-types';
import {colors, strings} from '../../../resources';
import styles from './style';
import ModalButton from './ModalButton';
import CloseIcon from './CloseIcon';

const CreateTheme = ({
  visibleCreateTheme,
  hideCreateTheme,
  showColorPicker,
  newColor,
  onChangeText,
  onCreateTheme,
  loader,
  value,
}) => (
  <Provider>
    <Portal>
      <Modal
        visible={visibleCreateTheme}
        onDismiss={hideCreateTheme}
        contentContainerStyle={styles.editModalContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Headline style={styles.headline}>
            {strings.createTheme.title}
          </Headline>
          <CloseIcon onPress={hideCreateTheme} />
        </View>
        <Headline style={styles.editTitle}>
          {strings.createTheme.newTheme}
        </Headline>
        <TextInput
          value={value}
          placeholder="Enter Name"
          placeholderTextColor={colors.grey}
          onChangeText={text => onChangeText(text)}
          style={styles.input}
        />
        <Headline style={styles.editTitle}>
          {strings.createTheme.themeColor}
        </Headline>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.modalTaskText}>{newColor}</Text>
          <TouchableOpacity onPress={showColorPicker}>
            <View
              style={{
                width: 40,
                height: 40,
                marginLeft: 10,
                borderWidth: 2,
                borderColor: colors.black,
                backgroundColor: newColor,
              }}
            />
          </TouchableOpacity>
        </View>
        <ModalButton
          loader={loader}
          onPress={onCreateTheme}
          label={strings.button.create}
        />
      </Modal>
    </Portal>
  </Provider>
);

CreateTheme.propTypes = {
  visibleCreateTheme: PropTypes.bool.isRequired,
  hideCreateTheme: PropTypes.func.isRequired,
  showColorPicker: PropTypes.func.isRequired,
  newColor: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onCreateTheme: PropTypes.func.isRequired,
  loader: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};
export default CreateTheme;
