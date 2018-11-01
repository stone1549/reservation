// @flow
import React from 'react';
import { View, DatePickerIOS, Text, ScrollView } from 'react-native';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Actions } from 'react-native-router-flux';
import moment from 'moment';
import { BOOK_RESERVATION } from '../queries/reservations';
import { ThrottledButton } from '../components/common/ThrottledButton';
import { InputText } from '../components/common/InputText';
import { BLUEISH, WHITEISH } from '../colors';

type AddReservationViewState = {
  unbookedReservation: {
    name: string,
    hotelName: string,
    arrivalDate: Date,
    departureDate: Date,
  },
};

class AddReservationView extends React.Component {
  state: AddReservationViewState;
  constructor(props) {
    super(props);
    this.state = {
      unbookedReservation: {
        name: null,
        hotelName: null,
        arrivalDate: moment().startOf('day').add(1, 'days').toDate(),
        departureDate: moment().startOf('day').add(2, 'days').toDate(),
      },
    };
  }

  updateUnbookedReservation = (key: string, value: string|Date) => {
    if (key === 'arrivalDate') {
      const { departureDate } = this.state.unbookedReservation;
      if (value.getTime() === departureDate.getTime()) {
        this.setState({
          unbookedReservation: {
            ...this.state.unbookedReservation,
            departureDate: moment(departureDate.getTime()).add(1, 'days').startOf('day').toDate(),
            [key]: value,
          }
        });
        return;
      }
    }
    this.setState({
      unbookedReservation: {
        ...this.state.unbookedReservation,
        [key]: value,
      }
    })
  };

  bookReservation = () => {
    const { name, hotelName, arrivalDate, departureDate } = this.state.unbookedReservation;
    this.props.bookReservationMutation({
      variables: {
        newRes: {
          name,
          hotelName,
          arrivalDate: arrivalDate.getTime(),
          departureDate: departureDate.getTime(),
        },
      },
    })
      .then(() => {
        Actions.pop();
      })
      .catch(err => {
        console.log('err:', err);
      })
  };

  validateUnbookedRes = (): boolean => {
    const { name, hotelName, arrivalDate, departureDate } = this.state.unbookedReservation;

    if (!name || !name.trim()) {
      return false;
    }

    if (!hotelName || !hotelName.trim()) {
      return false;
    }

    if (!arrivalDate || !arrivalDate.getTime()) {
      return false;
    }

    if (!departureDate || !departureDate.getTime()) {
      return false;
    }

    return arrivalDate.getTime() < departureDate.getTime();
  };

  onChangeCustomerNameText = (text: string): void => this.updateUnbookedReservation('name', text);
  onChangeHotelText = (text: string): void => this.updateUnbookedReservation('hotelName', text);
  onChangeArrivalDate = (date: Date): void => this.updateUnbookedReservation('arrivalDate', date);
  onChangeDepartureDate = (date: Date): void => this.updateUnbookedReservation('departureDate', date);

  render() {
    const { name, hotelName, arrivalDate, departureDate } = this.state.unbookedReservation;
    const formValid = this.validateUnbookedRes();
    return (
      <ScrollView style={style.container} keyboardShouldPersistTaps="always" >
        <InputText
          value={name}
          title="Customer Name"
          onChangeText={this.onChangeCustomerNameText}
        />
        <InputText
          value={hotelName}
          title="Hotel Name"
          onChangeText={this.onChangeHotelText}
        />
        <Text style={style.datePickerLabel} >Arrival Date</Text>
        <View style={style.datePickerContainer} >
          <DatePickerIOS
            mode="date"
            minimumDate={moment().startOf('day').add(1, 'days').toDate()}
            maximumDate={departureDate}
            date={arrivalDate}
            onDateChange={this.onChangeArrivalDate}
          />
        </View>
        <Text style={style.datePickerLabel}>Departure Date</Text>
        <View style={style.datePickerContainer} >
          <DatePickerIOS
            mode="date"
            minimumDate={moment(arrivalDate.getTime()).startOf('day').add(1, 'days').toDate()}
            date={departureDate}
            onDateChange={this.onChangeDepartureDate}
          />
        </View>
        <ThrottledButton onPress={this.bookReservation} disabled={!formValid}>
          Book Reservation
        </ThrottledButton>
        <View style={style.padding} />
      </ScrollView>
    );
  }
}

export default compose(
  graphql(gql`${BOOK_RESERVATION}`, {
    name : 'bookReservationMutation',
  })
)(AddReservationView)

const style = {
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
    backgroundColor: WHITEISH,
  },
  title: {
    color: BLUEISH,
  },
  datePickerLabel: {
    color: BLUEISH,
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 0,
  },
  datePickerContainer: {
    flex: 1,
  },
  padding: {
    height: 110,
  }
};
