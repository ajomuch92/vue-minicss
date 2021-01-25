export function getIntValue(number) {
  if(typeof number === 'number')
    return number;
  if(isNaN(number))
    return 0;
  if(typeof number === 'string')
    return parseInt(number);
}