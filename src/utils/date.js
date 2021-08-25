export default {
  yyyyMMdd(date) {
    if(date.constructor !== Date)
      return '';
    return `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;
  },
  dateTimeLocal(date) {
    if(date.constructor !== Date)
      return '';
    return `${this.yyyyMMdd(date)}T${this.time(date)}`;
  },
  time(date) {
    if(date.constructor !== Date)
      return '';
    return `${addZero(date.getHours())}:${addZero(date.getMinutes())}`;
  }
}

function addZero(number) {
  return `${number < 10? '0': ''}${number}`;
}