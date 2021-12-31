/* eslint no-console: 0 */

const { NODE_ENV } = process.env;

const flag = 'monkey';

export const log = (value) => {
  if (NODE_ENV !== 'production') {
    console.log(value);
  }
};

export const logDevHelper = (value) => {
  const devHelperStyles = [
    'padding-top: .1rem',
    'padding-bottom: .1rem',
    'padding-left: .1rem',
    'padding-right: .1rem',
    'color: black;',
    'background: lightblue',
    'width: 100%',
  ].join(';');
  if (NODE_ENV !== 'production') {
    console.info(` %c${flag}: ${value}`,
      devHelperStyles);
  }
};

export const logInfo = (value) => {
  const infoStyles = [
    'padding-top: .1rem',
    'padding-bottom: .1rem',
    'padding-left: .1rem',
    'padding-right: .1rem',
    'color: #333333;',
    'background: #c6f6d5',
  ].join(';');
  if (NODE_ENV !== 'production') {
    console.info(` %c${flag}: ${value}`,
      infoStyles);
  }
};

export const logDebug = (value) => {
  if (NODE_ENV !== 'production') {
    console.debug(`${flag}: %c${value}`,
      '');
  }
};

export const logWarn = (value) => {
  const warnStyles = [
    'color: red; font-weight: bolder;',
  ].join(';');
  if (NODE_ENV !== 'production') {
    console.warn(`${flag}: %c${value}`, warnStyles);
  }
};

export const logError = (value) => {
  const errorStyles = [
    'color: orange; font-weight: bolder;',
  ].join(';');
  if (NODE_ENV !== 'production') {
    console.error(`${flag}: %c${value}`,
      errorStyles);
  }
};
