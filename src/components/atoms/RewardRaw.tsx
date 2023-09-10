import React from 'react';
import {StyleSheet} from 'react-native';

import {Box, Text} from '../../theme/Theme';
import {Reward} from '../../data/api/types/Reward';

interface RewardProps {
  item: Reward;
}

const RewardRaw: React.FC<RewardProps> = ({item}) => {
  return (
    <Box
      style={styles.container}
      padding="m"
      margin="m"
      backgroundColor="background"
      borderRadius="l"
      borderColor="lightBlue">
      <Box flexDirection="row" justifyContent="space-between" margin="m">
        <Box flexDirection="column" justifyContent="space-between">
          <Text variant="body">{item.source}</Text>
          <Text variant="body">{item.amount}</Text>
        </Box>
        <Text variant="body">{item.date}</Text>
      </Box>
    </Box>
  );
};

export default RewardRaw;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
    borderWidth: 1,
  },
});
