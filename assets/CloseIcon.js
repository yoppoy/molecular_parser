import React from 'react';
import Svg, {Path} from 'react-native-svg';

function CloseIcon(props) {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <Path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"/>
    </Svg>
  );
}

export default CloseIcon;
