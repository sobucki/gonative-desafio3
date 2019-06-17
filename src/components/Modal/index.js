/* eslint-disable max-len */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as ModalActions } from '~/store/ducks/modal';
import { Creators as UserActions } from '~/store/ducks/user';

import {
  View, TextInput, TouchableOpacity, Text, Modal as ModalComponent,
} from 'react-native';

import style from './styles';

class Modal extends Component {
  static propTypes = {
    hideModal: PropTypes.func.isRequired,
    addUserRequest: PropTypes.func.isRequired,
    modal: PropTypes.shape({
      visible: PropTypes.bool,
    }).isRequired,
  };

  state = { inputUser: '' };

  submitForm = () => {
    const { inputUser } = this.state;
    const {
      addUserRequest,
      modal: { coordinate },
    } = this.props;

    if (!inputUser) return;

    addUserRequest(inputUser, coordinate);
    this.setState({ inputUser: '' });
  };

  closeModal = () => {
    const { hideModal } = this.props;
    hideModal();
  };

  render() {
    const { modal } = this.props;
    const { inputUser } = this.state;
    return (
      <ModalComponent animationType="fade" visible={modal.visible}>
        <View style={style.container}>
          <View style={style.contentContainer}>
            <Text style={style.title}>Adicionar novo local</Text>

            <TextInput
              style={style.input}
              value={inputUser}
              onChangeText={text => this.setState({ inputUser: text })}
              placeholder="Usuário no Github"
              autoCorrect={false}
              autoCapitalize="none"
              placeholderTextColor={style.placeholder.color}
            />

            <View style={style.buttonContainerView}>
              <TouchableOpacity
                onPress={this.closeModal}
                style={[style.buttonContainer, style.cancel]}
              >
                <Text style={style.buttonText}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[style.buttonContainer, style.save]}
                onPress={this.submitForm}
              >
                <Text style={style.buttonText}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ModalComponent>
    );
  }
}
const mapStateToProps = state => ({
  modal: state.modal,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ModalActions, ...UserActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
