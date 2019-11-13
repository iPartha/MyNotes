import React, { Component } from 'react';
import { AppRegistry,TouchableOpacity, View, StyleSheet, ScrollView, Image, LayoutAnimation, Button, FlatList} from 'react-native';
import Item from './src/components/Item.js'
import ListItem from './src/components/ListItem.js'
import { TextInput } from 'react-native'
import { connect } from 'react-redux';
import * as notesAction from './src/actions/notesAction';

class App extends Component {

  constructor( props ){
    super( props );
    console.log(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      notes: '',
      key: '',
      notesList: []
    }
  }



  afterAnimationComplete = () => {
    this.index += 1;
    this.setState({ disabled: false });
  }

  
handleChange = (value) => {
  this.setState({
    notes: value
  });    
}

  handleSubmit(e){
    console.log(this.state.notes)
    this.props.add(this.state.notes);
  }


  removeNotes(key) {
    console.log('killl000000', key)
    this.props.remove(key);
  }
  
  placesOutput = () => {
   return (
    <FlatList style = { styles.listContainer }
      data = { this.props.notesList }
      keyExtractor={(item, index) => index.toString()}
      renderItem = { info => (
        <ListItem 
          item={ info.item }
          removeNotes={(key) => this.removeNotes(key)}
        />
      )}
    />
  )
}





render() {
  return (
    <View style={ styles.container }>
      <View style = { styles.inputContainer }>
        <TextInput
          placeholder = "Enter notes"
          style = { styles.placeInput }
          value = { this.state.notes }
          onChangeText = { this.handleChange }
        ></TextInput>
        <Button title = 'Add' 
          style = { styles.placeButton }
          onPress = { this.handleSubmit }
        />
        </View>
        <View style = { styles.listContainer }>
          { this.placesOutput() }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  },
  listContainer: {
    width: '100%'
  }
});

const mapStateToProps = state => {
  return {
    notesList: state.notesList.notesList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: (notes) => {
      dispatch(notesAction.addNotes(notes))
    },
    remove: (key) => {
      dispatch(notesAction.removeNotes(key))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)