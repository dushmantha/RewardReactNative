import React from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';

import {Box, useTheme} from '../../theme/Theme';

const Loader = () => {
  const theme = useTheme();
  return (
    <Box style={styles.container}>
      <ActivityIndicator color={theme.colors.primary} />
    </Box>
  );
};

Loader.defaultProps = {variant: 'default'};

export default Loader;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
  },
});
