import React from 'react';
import {View} from 'react-native';
import {
  Modal,
  Portal,
  Text,
  Provider,
  Title,
  Headline,
} from 'react-native-paper';
import PropTypes from 'prop-types';
import {strings} from '../../../resources';
import ModalButton from './ModalButton';
import styles from './style';
import CloseIcon from './CloseIcon';

const EditTask = ({visible, hideModal, openEditModal, todoTask}) => (
  <Provider>
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.modalContainer}>
        <View style={styles.modalHead}>
          <Headline style={styles.headline}>{strings.editTask.title}</Headline>
          <CloseIcon onPress={hideModal} />
        </View>
        <Title style={styles.title}>{todoTask.name}</Title>
        <View style={{flexDirection: 'row'}}>
          <Title style={styles.title}>{strings.editTask.note}</Title>
          <Text style={styles.modalTaskText}>{todoTask.notes}</Text>
        </View>
        <ModalButton onPress={openEditModal} label={strings.button.edit} />
      </Modal>
    </Portal>
  </Provider>
);

EditTask.propTypes = {
  visible: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
  openEditModal: PropTypes.func.isRequired,
  todoTask: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default EditTask;
