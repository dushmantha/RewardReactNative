import React from 'react';
import {StyleSheet} from 'react-native';

import {Box, useTheme, Text} from '../../theme/Theme';

const EmptyView = () => {
  const theme = useTheme();
  return (
    <Box style={styles.container}>
      <Text variant="body" style={{color: theme.colors.text}}>
        Empty
      </Text>
    </Box>
  );
};

EmptyView.defaultProps = {variant: 'default'};

export default EmptyView;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
