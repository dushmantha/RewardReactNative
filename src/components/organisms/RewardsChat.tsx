import React from 'react';
import {PieChart} from 'react-native-gifted-charts';
import {StyleSheet} from 'react-native';
import {Box, Text, useTheme} from '../../theme/Theme';
import {Reward} from '../../data/api/types/Reward';
import {getTotalAmount} from '../../utils/Utils';

type RewardChatProps = {
  earned?: Reward[];
  spent?: Reward[];
};

const RewardsChat = ({earned, spent}: RewardChatProps) => {
  const totalEarned = getTotalAmount(earned);
  const totalSpent = getTotalAmount(spent);

  const totalSaving = totalEarned - totalSpent;
  const totalSavingPrecentage = Math.ceil((totalSaving / totalEarned) * 100);
  const totalSpentPrecentage = Math.ceil((totalSpent / totalEarned) * 100);

  const theme = useTheme();

  const rewardsData = [
    {
      value: totalSavingPrecentage,
      color: theme.colors.inflow,
      gradientCenterColor: theme.colors.info,
      focused: true,
    },
    {
      value: totalSpentPrecentage,
      color: theme.colors.outflow,
      gradientCenterColor: theme.colors.info,
    },
  ];

  const renderDot = (color: string) => {
    return <Box style={[styles.dot, {backgroundColor: color}]} />;
  };

  const centerLabelComponent = () => {
    return (
      <Box style={styles.pieChartTextWrapper}>
        <Text color="text" variant="body">
          ${totalSavingPrecentage}%
        </Text>
        <Text color="text" variant="body">
          Saving
        </Text>
      </Box>
    );
  };

  const detailsComponent = (color: string, title: string, value: string) => {
    return (
      <Box style={styles.textContent}>
        {renderDot(color)}
        <Box>
          <Text color="text" variant="body">
            {title}
          </Text>
          <Text color="text" variant="body">
            {value}
          </Text>
        </Box>
      </Box>
    );
  };

  return (
    <Box style={styles.container} backgroundColor="chartBackground">
      <Box>
        <Text color="text" variant="title2">
          {`$ ${totalSaving}`}
        </Text>
        <Text color="text" variant="body">
          Available Balance
        </Text>
      </Box>

      <Box flexDirection="row" marginVertical="l">
        <Box>
          <Box style={styles.detailsContentWrapper}>
            {detailsComponent(theme.colors.earn, 'Earned', `$ ${totalEarned}`)}
            {detailsComponent(theme.colors.outflow, 'Spent', `$ ${totalSpent}`)}
          </Box>
        </Box>
        <Box style={styles.pieChartContainer}>
          <PieChart
            data={rewardsData}
            donut
            showGradient
            sectionAutoFocus
            radius={90}
            innerRadius={60}
            innerCircleColor={theme.colors.primaryBackground}
            centerLabelComponent={centerLabelComponent}
          />
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  container: {
    margin: 8,
    padding: 16,
    borderRadius: 20,
    flexGrow: 1,
  },
  pieChartContainer: {
    padding: 16,
    alignItems: 'center',
  },
  pieChartTextWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContentWrapper: {
    justifyContent: 'center',
    marginBottom: 10,
  },
  textContent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 120,
    marginRight: 20,
    marginBottom: 8,
  },
});

export default RewardsChat;
