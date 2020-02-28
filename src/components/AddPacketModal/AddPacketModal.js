/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import PropTypes from 'prop-types'
import { TextInput } from 'react-native-paper'
import { View, StyleSheet } from 'react-native'

import Modal from '../Modal'
import { colors } from '../../styles/theme'

function AddPacketModal({ visible, onDismiss }) {
  return (
    <Modal
      title="Adicionar novo rastreio"
      visible={visible}
      onSubmit={() => console.log('Add a packet')}
      onDismiss={onDismiss}
    >
      <View style={styles.textInputContainer}>
        <TextInput
          theme={{
            colors: { primary: colors.blue, underlineColor: 'transparent' },
          }}
          dense
          placeholder="iPad"
          label="Nome do pacote"
          mode="outlined"
        />
      </View>
      <View>
        <TextInput
          theme={{
            colors: { primary: colors.blue, underlineColor: 'transparent' },
          }}
          autoCapitalize="characters"
          dense
          placeholder="PW086958101BR"
          label="Código de rastreio"
          mode="outlined"
        />
      </View>
    </Modal>
  )
}

AddPacketModal.defaultProps = {
  visible: false,
}

AddPacketModal.propTypes = {
  visible: PropTypes.bool,
  onDismiss: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  textInputContainer: {
    marginBottom: 8,
    marginTop: 16,
  },
})

export default AddPacketModal
