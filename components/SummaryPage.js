import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const SummaryPage = ({ transactions }) => {
  const getNumberOfTransactions = () => transactions.length;

  const getBalance = () => {
    return transactions.reduce((total, transaction) => total + parseFloat(transaction.amount), 0).toFixed(2);
  };

  const getExtremeSpendingTransaction = (isHighest = true) => {
    return transactions.reduce((extreme, transaction) => {
      const extremeAmount = parseFloat(extreme.amount);
      const currentAmount = parseFloat(transaction.amount);
      return isHighest ? (currentAmount > extremeAmount ? transaction : extreme) : (currentAmount < extremeAmount ? transaction : extreme);
    }, transactions[0]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.label}>Transactions</Text>
        <Text style={styles.value}>{getNumberOfTransactions()}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.label}>Balance</Text>
        <Text style={styles.value}>${getBalance()}</Text>
      </View>
      <View>
        <Text style={styles.subtitle}>High Spending</Text>
        <View style={styles.itemContainer}>
          <Text>{getExtremeSpendingTransaction().name}</Text>
          <Text style={styles.highSpendingBalance}>${getExtremeSpendingTransaction().amount}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.subtitle}>Low Spending</Text>
        <View style={styles.itemContainer}>
          <Text>{getExtremeSpendingTransaction(false).name}</Text>
          <Text style={styles.highSpendingBalance}>${getExtremeSpendingTransaction(false).amount}</Text>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    marginVertical: 10,
  },
  itemContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#aaa',
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'darkblue',
  },
  value: {
    fontSize: 16,
    color: 'green',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 15,
    color: 'darkblue',
    textAlign: 'center',
  },
  highSpendingBalance: {
    fontSize: 18,
    color: 'red',
    fontStyle: 'italic',
  },
});

const mapStateToProps = (state) => ({
  transactions: state.transactionsData,
});

export default connect(mapStateToProps)(SummaryPage); 
