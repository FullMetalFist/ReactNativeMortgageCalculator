/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight
} from 'react-native';

export default class MortgageCalculator extends Component {
  constructor(props) {
      super(props);
      //this.calculateMonthlyPayment = this.calculateMonthlyPayment.bind(this);
  }

  state = {
    monthlyPayment: 0,
    principal: 1,
    rate: 0.05,
    numberOfPayments: 12,
    downpayment: 0,
    tax: 0.03,
    taxPayment: 0
  };

  // calculateMonthlyPayment(value) {
  //   console.log(value);
  //   // const { principal, rate, numberOfPayments } = this.state;
  //   // const raisedToPower = (1 + rate) ** numberOfPayments;
  //   // const dividend = rate * raisedToPower;
  //   // const divisor = raisedToPower - 1;
  //   // const monthlyPayment = principal;
  //    this.state.monthlyPayment = value;
  //    this.setState(this.state);
  //
  // }

  // loan value
  calculatePrincipal(value) {
    // the principal is the loan amount
    //debugger;
    console.log(value);
    this.state.principal = parseInt(value);
    this.state.monthlyPayment = (this.state.principal - this.state.downpayment) * ((this.state.rate * ((1 + this.state.rate) ** this.state.numberOfPayments))/(((1 + this.state.rate) ** this.state.numberOfPayments) - 1));
    this.setState(this.state);
  }

  calculateRate(value) {
    // value is the percent
    console.log(value);
    this.state.rate = (parseFloat(value)/100)/12;
    this.state.monthlyPayment = (this.state.principal - this.state.downpayment) * ((this.state.rate * ((1 + this.state.rate) ** this.state.numberOfPayments))/(((1 + this.state.rate) ** this.state.numberOfPayments) - 1));
    this.setState(this.state);
  }

  calculateNumberOfPayments(value) {
    // value is in years, convert to months
    console.log(value);
    this.state.numberOfPayments = parseInt(value) * 12;
    this.state.monthlyPayment = (this.state.principal - this.state.downpayment) * ((this.state.rate * ((1 + this.state.rate) ** this.state.numberOfPayments))/(((1 + this.state.rate) ** this.state.numberOfPayments) - 1));
    this.setState(this.state);
  }

  calculateDownpayment(value) {
    console.log(value);
    this.state.downpayment = parseInt(value);
    this.state.monthlyPayment = (this.state.principal - this.state.downpayment) * ((this.state.rate * ((1 + this.state.rate) ** this.state.numberOfPayments))/(((1 + this.state.rate) ** this.state.numberOfPayments) - 1));
    this.setState(this.state);
  }

  calculateTax(value) {
    console.log(value);
    this.state.tax = parseInt(value) / 100;
    this.state.taxPayment = this.state.principal * this.state.tax;
    this.setState(this.state);
  }
  // http://www.wikihow.com/Calculate-Mortgage-Payments
  // http://www.wikihow.com/Calculate-Loan-Payments
  // --Mortgage--           --Loan--
  // purchase price  x      loan amount
  // down payment    x      loan term
  // mortgage term   x      interest rate
  // interest rate   x      first payment date
  // property tax    x
  // property insurance
  // first payment date

  // monthly payment result

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text>
            Mortgate Calculator
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>
            Home Value
          </Text>
          <TextInput
              style={styles.textInput}
              onChangeText={this.calculatePrincipal.bind(this)}
              keyboardType="numeric"
              placeholder=" Enter Home Value (1)">
          </TextInput>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>
            Downpayment
          </Text>
          <TextInput
              style={styles.textInput}
              onChangeText={this.calculateDownpayment.bind(this)}
              keyboardType="numeric"
              placeholder=" Enter Downpayment (1)">
          </TextInput>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>
          Interest Rate
          </Text>
          <TextInput
              style={styles.textInput}
              onChangeText={this.calculateRate.bind(this)}
              keyboardType="numeric"
              placeholder=" Enter Interest Rate (5)%">
          </TextInput>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>
          Number of Years
          </Text>
          <TextInput
              style={styles.textInput}
              onChangeText={this.calculateNumberOfPayments.bind(this)}
              keyboardType="numeric"
              placeholder=" Enter Number of Years (1)">
          </TextInput>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>
          Property Tax
          </Text>
          <TextInput
              style={styles.textInput}
              onChangeText={this.calculateTax.bind(this)}
              keyboardType="numeric"
              placeholder=" Enter property tax (3)%">
          </TextInput>
        </View>
        <View style={styles.row}>
          <Text>
            Monthly Payment: ${this.state.monthlyPayment.toFixed(2)}
          </Text>
        </View>
        <View style={styles.row}>
          <Text>
            Additional tax: ${this.state.taxPayment.toFixed(2)}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
},
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  label: {
    textAlign: 'right',
    color: '#60b7e2',
    margin: 10,
    flex: 1,
  },
  textInput: {
    textAlign: 'left',
    color: '#60b7e2',
    margin: 5,
    borderColor: '#60b7e2',
    borderWidth: 1,
    flex: 2,
  }

});

AppRegistry.registerComponent('MortgageCalculator', () => MortgageCalculator);
