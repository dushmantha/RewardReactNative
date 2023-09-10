import React from 'react';

import {ScrollView, StyleSheet} from 'react-native';
import {
  Header,
  PersonalInfo,
  RewardsChat,
  ButtonsContainer,
} from '../components/organisms';
import {Box, useTheme} from '../theme/Theme';
// import useFetchData from '../data/api/hooks/useFetchData';
// import {Loader, ErrorView, EmptyView} from '../components/atoms';
import {EmptyView} from '../components/atoms';
import data from '../data/mocks/mock.json';
import profile from '../data/mocks/profile.json';
import {NavigationProps} from '../navigation/Navigation';
import {Reward} from '../data/api/types/Reward';

const Rewards = ({navigation}: NavigationProps<'Rewards'>) => {
  const theme = useTheme();

  // const {data, isLoading, error} = useFetchData(url);

  // if (isLoading) {
  //   return <Loader />;
  // }
  // if (error) {
  //   return <ErrorView />;
  // }

  return (
    <Box flex={1} backgroundColor="background">
      <Header title="Rewards" />

      <ScrollView
        style={styles.scrollViewcContent}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <PersonalInfo
          image={profile.profile.image}
          status={profile.profile.status}
          userName={profile.profile.userName}
        />
        {data &&
        data !== undefined &&
        (data.Earned.length !== 0 || data.Spent.length !== 0) ? (
          <Box>
            <RewardsChat earned={data.Earned} spent={data.Spent} />
            <ButtonsContainer
              reward={data.Earned}
              type="Inflow"
              color={theme.colors.earn}
              onPress={() =>
                navigation.navigate('Inflows', {
                  earn: data.Earned as Reward[],
                })
              }
            />
            <ButtonsContainer
              reward={data.Spent}
              type="Outflow"
              color={theme.colors.outflow}
              onPress={() =>
                navigation.navigate('Outflows', {
                  spent: data.Spent as Reward[],
                })
              }
            />
          </Box>
        ) : (
          <EmptyView />
        )}
      </ScrollView>
    </Box>
  );
};

export default Rewards;

const styles = StyleSheet.create({
  scrollViewcContent: {
    flexGrow: 1,
    marginBottom: 16,
  },
});
