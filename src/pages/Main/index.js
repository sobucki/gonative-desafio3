import React, { Component, Fragment } from 'react';
import { YellowBox } from 'react-native';

import Map from '~/components/Map';
import Modal from '~/components/Modal';

YellowBox.ignoreWarnings(['Warning: ...']);

export default class Main extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <Map />
        <Modal />
      </Fragment>
    );
  }
}
