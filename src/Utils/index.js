export const formatPrice = number => {
  let res = number % 1000 === 0 ? "000" : number % 1000;
  return number < 1000 ? `$${number}` : `$${Math.floor(number / 1000)},${res}`;
}

export const getGrossYield = (monthlyRent, ListPrice) => (monthlyRent * 12 / ListPrice * 100).toFixed(1);

export const getAddress = ({ address1, city, state, zip }) => `${address1} ${city} ${state}, ${zip}`;

export const getPropertyPhysicalInfo = ({ bathRooms, bedRooms, lotSize, yearBuilt }) => `${bedRooms}bd, ${bathRooms}ba | ${lotSize}sqft | Built in ${yearBuilt}`;
