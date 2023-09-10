import React from 'react';
import {StyleSheet, FlatList} from 'react-native';

import {Box} from '../../theme/Theme';
import {Reward} from '../../data/api/types/Reward';
import {RewardRaw} from '../atoms';

type RewardListProps = {
  rewards: Reward[];
};

const RewardList = ({rewards}: RewardListProps) => {
  const renderItem = React.useCallback(
    ({item}: {item: Reward}) => <RewardRaw item={item} />,
    [],
  );

  return (
    <Box style={styles.container}>
      <FlatList
        data={rewards}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        initialNumToRender={10}
        maxToRenderPerBatch={5}
        windowSize={10}
        removeClippedSubviews={true}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  );
};

RewardList.defaultProps = {variant: 'default'};

export default RewardList;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
  },
});
