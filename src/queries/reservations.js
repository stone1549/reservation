// @flow
export const GET_ALL_RESERVATIONS: string = 'query { reservations {id, name, hotelName, arrivalDate, departureDate} }';
export const BOOK_RESERVATION: string = `
mutation bookReservation($newRes: UnbookedReservationInput!){
  newReservation(newRes: $newRes) { id }
}`;
