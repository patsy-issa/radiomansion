import { helper } from '@ember/component/helper';

export function secondsToHuman([duration = 0]) {
  let date = new Date(null);
  date.setMilliseconds(duration);
  let timeString = date.toISOString().substr(11, 8);
  return timeString
}

export default helper(secondsToHuman);
