# reservation

A simple hotel reservation app made with React Native and GraphQL (Apollo).

## Limitations

Currently hardcoded to connect to reservation-service at localhost:4000.

iOS only

Ignorant of timezones. Days are displayed and input in the device TZ. 

No logging, no comments, no tests, no metrics, no security, minimal error handling.

## Run

First get reservation-service up and running on localhost:

```
git clone https://github.com/stone1549/reservation-service.git

cd reservation-service

yarn

yarn start
```

Then in a separate terminal:

```
git clone https://github.com/stone1549/reservation.git

cd reservation-service

yarn

react-native run-ios
```
