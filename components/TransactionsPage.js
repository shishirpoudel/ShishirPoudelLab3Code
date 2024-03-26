import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux';

const TransactionsPage = ({ navigation, transactions }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({ title: "Transactions List" });
  }, [navigation]);

  const renderTransactionItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.transactionItem} 
      onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
    >
      <Text>{item.name}</Text>
      <View style={styles.row}>
        <Text style={styles.amount}>${item.amount}</Text>
        <AntDesign name="right" size={20} color="blue" />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList 
        data={transactions} 
        renderItem={renderTransactionItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: '#f0f0f0',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#999',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    marginVertical: 5,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amount: {
    marginRight: 10,
    fontSize: 16,
    color: 'blue',
    fontWeight: 'bold',
  },
});


const mapStateToProps = (state) => ({
  transactions: state.transactionsData, 
});

export default connect(mapStateToProps)(TransactionsPage); 
