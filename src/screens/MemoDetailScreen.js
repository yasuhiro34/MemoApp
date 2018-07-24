import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.memoheader}>
            <View style={styles.memoheaderContent}>
              <Text style={styles.memoheaderTitle}>
              講座のアイデア
              </Text>
              <Text style={styles.memoheaderDate}>
              2018/07/21
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.memoContent}>
          <Text>
           講座のアイデアです。
          </Text>
        </View>

        <CircleButton color="white" style={styles.editButton} onPress={() => { this.props.navigation.navigate('MemoEdit'); }}>
          {'\uf303'}
        </CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoheader: {
    height: 100,
    backgroundColor: '#17313C',
    justifyContent: 'center',
    padding: 10,
  },
  memoheaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  memoheaderDate: {
    fontSize: 12,
    color: '#fff',
  },
  memoContent: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  editButton: {
    top: 40,
  },
});

export default MemoDetailScreen;
