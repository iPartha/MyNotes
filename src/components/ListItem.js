import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class Item extends Component {

  constructor() {
    super();
  }
  removeNotes = () => {
    console.log('killl', this.props.item.key)
    this.props.removeNotes(this.props.item.key);
  }

  render() {
    return (
        <View style = { styles.listItem }>
          <Text>{ this.props.item.value }</Text>
          <TouchableOpacity
          style={styles.removeBtn}
          onPress={this.removeNotes}
        >
          <Image
            source={require('../../images/remove.png')}
            style={styles.btnImage}
          />
        </TouchableOpacity>
        </View>
    );
}
}



const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#eee',
    alignItems: 'flex-start'
  },

  removeBtn: {
      position: 'absolute',
      right: 13,
      width: 30,
      height: 30,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
  btnImage: {
      resizeMode: 'contain',
      width: '100%',
    },
});

