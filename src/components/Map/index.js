/* eslint-disable no-undef */
/* eslint-disable max-len */
import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import PropType from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as ModalActions } from '~/store/ducks/modal';
import { Creators as UserActions } from '~/store/ducks/user';

import style from './styles';

class Map extends Component {
  static propTypes = {
    showModal: PropType.func.isRequired,
    user: PropType.shape({
      data: PropType.arrayOf(
        PropType.shape({
          id: PropTypes.number,
          login: PropTypes.string,
          coordinate: PropTypes.shape({
            latitude: PropTypes.number,
            longitude: PropTypes.number,
          }),
          avatar_url: PropTypes.string,
          name: PropTypes.string,
          bio: PropTypes.string,
        }),
      ),
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      initialRegion: {
        latitude: -27.2177659,
        longitude: 49.6451598,
        latitudeDelta: 0.0042,
        longitudeDelta: 0.0031,
      },
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = parseFloat(position.coords.latitude);
        const longitude = parseFloat(position.coords.longitude);
        const initialRegion = {
          latitude,
          longitude,
          latitudeDelta: 0.0042,
          longitudeDelta: 0.0031,
        };

        this.setState({ initialRegion });
      },
      error => console(JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  testeFunction = () => {
    const { showModal } = this.props;
    showModal();
  };

  openModal = (coordinate) => {
    const { showModal } = this.props;
    const { initialRegion } = this.state;

    this.setState({
      initialRegion: {
        ...initialRegion,
        latitude: coordinate.latitude,
        longitude: coordinate.longitude,
      },
    });

    showModal(coordinate);
  };

  render() {
    const { initialRegion } = this.state;
    const { user } = this.props;
    // console.tron.log(this.props);
    return (
      <View style={style.container}>
        <MapView
          initialRegion={initialRegion}
          region={initialRegion}
          style={style.map}
          showsUserLocation
          loadingEnabled
          onLongPress={({ nativeEvent: { coordinate } }) => this.openModal(coordinate)}
          moveOnMarkerPress
        >
          {user.data.map(gitUser => (
            <Marker
              key={String(gitUser.id)}
              id={gitUser.id}
              coordinate={gitUser.coordinate}
              title={gitUser.login}
            >
              <Image source={{ uri: gitUser.avatar_url }} style={style.annotationContainer} />

              <Callout title={gitUser.login}>
                <View style={style.calloutContainer}>
                  <Text style={style.name}>{gitUser.name}</Text>
                  {gitUser.bio && <Text style={style.bio}>{gitUser.bio}</Text>}
                </View>
              </Callout>
            </Marker>
          ))}
        </MapView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
  user: state.user,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ModalActions, ...UserActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
