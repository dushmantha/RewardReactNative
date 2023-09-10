import React from 'react';
import {Box} from '../theme/Theme';
import {Header} from '../components/organisms';
import {NavigationProps} from '../navigation/Navigation';
import {RewardList} from '../components/molecules';

const Inflows = ({route, navigation}: NavigationProps<'Inflows'>) => {
  const {earn} = route.params;
  return (
    <Box flex={1} backgroundColor="background">
      <Header
        title="Inflows"
        right={{title: 'Cancel', onPress: () => navigation.goBack()}}
      />
      <RewardList rewards={earn} />
    </Box>
  );
};

export default Inflows;
