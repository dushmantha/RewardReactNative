import React, {ReactNode} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

interface ButtonProps {
  onPress: () => void;
  children: ReactNode;
}

const Button = ({onPress, children}: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

Button.defaultProps = {variant: 'default'};

export default Button;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
  },
});
