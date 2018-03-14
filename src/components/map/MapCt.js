import React, { PureComponent } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView, { UrlTile } from 'react-native-maps';

export default class MapCt extends PureComponent {
  render() {
    return (
      <View style={styles.ct}>
        <MapView
          style={styles.map}
          region={{
            latitude: 15.47083,
            longitude: -90.37083,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <UrlTile urlTemplate="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ct: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
