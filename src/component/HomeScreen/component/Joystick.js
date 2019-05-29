import { ColorPalette } from '../../../common/Theme';

const { nipplejs } = window;

const getNippleSize = () => {
  // Use screen's width if in landscape
  let width = window.innerWidth;

  if (Math.abs(window.orientation) !== 90) {
    // Use screen's height if in potrait
    width = window.screen.height;
  }
  return width * 0.25;
};

const injectJoystick = ({ containerId, options, onMove, onEnd }) => {
  const defaultOptions = {
    zone: document.getElementById(containerId),
    mode: 'static',
    color: ColorPalette.main.secondary,
    position: { left: '50%', top: '50%' },
    size: getNippleSize(),
    shape: 'square'
  };

  const stick = nipplejs.create({ ...defaultOptions, ...options });

  if (typeof onMove === 'undefined' || typeof onEnd === 'undefined') {
    const errorString = 'injectJoystick: onEnd or onMove not provided';
    if (process.env.NODE_ENV !== 'production') {
      throw new Error(errorString);
    } else {
      console.error(errorString);
    }
  }

  stick.on('move', (event, data) => {
    onMove(data.instance.frontPosition);
  });
  stick.on('end', () => onEnd());

  return stick;
};

export default injectJoystick;
