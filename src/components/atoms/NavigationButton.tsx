import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

import {Theme, Box, Text} from '../../theme/Theme';

type NavigationButtonProps = {
  title?: string;
  name?: string;
  size: number;
  backgroundColor?: keyof Theme['colors'];
  align: 'center' | 'flex-start' | 'flex-end';
  onPress: () => void;
};

const NavigationButton = ({
  title,
  backgroundColor,
  align,
  onPress,
}: NavigationButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Box justifyContent="center" alignItems={align} style={{backgroundColor}}>
        <Text variant="button">{title}</Text>
      </Box>
    </TouchableOpacity>
  );
};

export default NavigationButton;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
  },
});
