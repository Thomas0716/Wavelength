const clc = require('cli-color');
const emoji = {
  info: ':information_source:',
  warning: ':small_orange_diamond:',
  error: ':small_red_triangle:',
  debug: ':robot_face:',
  success: '✓',
  timing: ':stopwatch:',
  test: ':test_tube:',
};
// eslint-disable-next-line prettier/prettier
export enum LogType {
  Info,
  Warning,
  Error,
  Debug,
  Success,
  Timing,
  Test,
}
module.exports = log(message: String, type: LogType) {
  switch (type) {
    case LogType.Warning:
      console.log(emoji.warning + clc.xterm(202)(` WARNING: ${message}`));
      break;
    case LogType.Error:
      console.log(emoji.error + clc.red(' ERROR: ') + clc.red(message));
      break;
    case LogType.Debug:
      console.log(`${emoji.debug} ${clc.yellow(message)}`);
      break;
    case LogType.Success:
      console.log(` ${clc.green(emoji.success)} ${clc.green(message)}`);
      break;
    case LogType.Timing:
      console.log(` ${clc.cyan(emoji.timing)} ${clc.cyan(`${message} seconds`)}`);
      break;
    case LogType.Test:
      console.log(` ${clc.yellow(emoji.info)}${clc.yellow(' Test: ')}${clc.yellow(message)}`);
      break;
    default:
      console.log(` ${clc.yellow(emoji.info)} ${clc.yellow(message)}`);
  }
}