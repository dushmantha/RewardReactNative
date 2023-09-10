import React from 'react';
import {Header} from '../components/organisms';
import {Box} from '../theme/Theme';
import {NavigationProps} from '../navigation/Navigation';
import {RewardList} from '../components/molecules';

const Outflows = ({navigation, route}: NavigationProps<'Outflows'>) => {
  const {spent} = route.params;

  return (
    <Box flex={1} backgroundColor="background">
      <Header
        title="Inflows"
        right={{title: 'Cancel', onPress: () => navigation.goBack()}}
      />
      <RewardList rewards={spent} />
    </Box>
  );
};

export default Outflows;
