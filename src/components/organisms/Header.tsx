import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View, StyleSheet} from 'react-native';

import {Box, Text} from '../../theme/Theme';
import {NavigationButton} from '../atoms';

interface HeaderProps {
  left?: {
    title?: string;
    onPress: () => void;
  };
  title: string;
  right?: {
    title?: string;
    onPress: () => void;
  };
}

const Header = ({title, left, right}: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const color = 'text';
  return (
    <Box
      flexDirection="row"
      backgroundColor="lightBlue"
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
      alignItems="center"
      justifyContent="space-between">
      {left ? (
        <NavigationButton
          size={44}
          title={left.title}
          onPress={left.onPress}
          align={'center'}
        />
      ) : (
        <View style={styles.header} />
      )}
      <Text variant="title1" {...{color}}>
        {title.toUpperCase()}
      </Text>
      {right ? (
        <NavigationButton
          size={44}
          title={right.title}
          onPress={right.onPress}
          align={'center'}
        />
      ) : (
        <View style={styles.header} />
      )}
    </Box>
  );
};

Header.defaultProps = {
  dark: false,
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default Header;
