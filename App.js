import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      button: 'START',
      last: null
    };

    this.timer = null;

    this.start = this.start.bind(this);
    this.clear = this.clear.bind(this);
  }

  start() {

    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;

      this.setState({ button: 'START' });
    } else {

      this.timer = setInterval(() => {
        this.setState({ number: this.state.number + 0.1 })
      }, 100);

      this.setState({ button: 'PAUSE' });
    }

  }

  clear() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      last: this.state.number,
      number: 0,
      button: 'START'
    })
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.btnLogo}>
          <View style={styles.btnLetra}>
            <Image source={require('./assets/c.png')} style={styles.letra} />
            <Image source={require('./assets/r.png')} style={styles.letra} />
            <Image source={require('./assets/o.png')} style={styles.letra} />
            <Image source={require('./assets/n.png')} style={styles.letra} />
            <Image source={require('./assets/o.png')} style={styles.letra} />
          </View>
          <View style={styles.btnLetra}>
            <Image source={require('./assets/r.png')} style={styles.letra} />
            <Image source={require('./assets/o.png')} style={styles.letra} />
            <Image source={require('./assets/c.png')} style={styles.letra} />
            <Image source={require('./assets/k.png')} style={styles.letra} />
            <Image source={require('./assets/e.png')} style={styles.letra} />
            <Image source={require('./assets/t.png')} style={styles.letra} />
          </View>
        </View>

        <Image
          source={require('./assets/rocket.png')}
          style={styles.rocket}
        />

        <Text style={styles.timer}> {this.state.number.toFixed(1)} </Text>

        <View style={styles.btnArea}>

          <TouchableOpacity style={styles.btn} onPress={this.start}>
            <Text style={styles.btnTexto}> {this.state.button} </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.clear}>
            <Text style={styles.btnTexto}>STOP</Text>
            <Text style={styles.btnTexto}>CLEAR</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.areaLast}>
          <Text style={styles.timeLast}>
            {this.state.last > 0 ? 'Last time: ' + this.state.last.toFixed(2) + 's' : ''}
          </Text>
        </View>


      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#715eef'
  },
  btnLetra: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnLogo: {
    marginTop: 30,
    alignItems: 'center',
  },
  letra: {
    width: 60,
    height: 60,
  },
  rocket: {
    width: 400,
    height: 400,
    marginTop: -50
  },
  timer: {
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold',
    marginTop: -100,
    elevation: 3,

    textShadowColor: '#000',
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 1
  },
  btnArea: {
    flexDirection: 'row',
    height: 40
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    height: 115,
    width: 80,
    margin: 40,
    borderRadius: 100
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  areaLast: {
    marginTop: 160
  },
  timeLast: {
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#FFF'
  }
});

export default App;