import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CircleButton from '../elements/CircleButton';

const dateString = (date) => {
  const str = date.toISOString();
  return str.split('T')[0];
};

class MemoDetailScreen extends React.Component {
  state = {
    memo: {},
  }

  componentWillMount() {
    const { params } = this.props.navigation.state;
    this.setState({ memo: params.memo });
  }

  returnMemo(memo) {
    this.setState({ memo });
  }

  render() {
    const { memo } = this.state;
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.memoheader}>
            <View style={styles.memoheaderContent}>
              <Text style={styles.memoheaderTitle}>
                {memo.body.substring(0, 10)}
              </Text>
              <Text style={styles.memoheaderDate}>
                {dateString(memo.createdOn)}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.memoContent}>
          <Text style={styles.memoBody}>
            {memo.body}
          </Text>
        </View>

        <CircleButton
          color="white"
          style={styles.editButton}
          onPress={() => { this.props.navigation.navigate('MemoEdit', { memo, returnMemo: this.returnMemo.bind(this) }); }}
        >
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
  memoBody: {
    lineHeight: 22,
    fontSize: 15,
  },
  editButton: {
    top: 35,
  },
});

export default MemoDetailScreen;
