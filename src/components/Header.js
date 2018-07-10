import React from 'react';
import { Text} from 'react-native';

const Header = (props) => {
  return(
      <Text>{props.headerText}</Text>
  );
};

export default Header;
