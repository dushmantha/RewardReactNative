import React from 'react';
import {Box, Text, useTheme} from '../../theme/Theme';
import {Button} from '../atoms';
import {StyleSheet} from 'react-native';
import {Image} from 'react-native';
import {Reward} from '../../data/api/types/Reward';
import {getTotalAmount} from '../../utils/Utils';

export type ButtonContent = {
  type: string;
  value: string;
  color: string;
  onPress: () => void;
};

type ButtonsContainerProps = {
  reward?: Reward[];
  type: string;
  color: string;
  onPress: () => void;
};

const ButtonsContainer = ({
  reward,
  type,
  color,
  onPress,
}: ButtonsContainerProps) => {
  const totalReward = getTotalAmount(reward);
  const theme = useTheme();
  return (
    <Button onPress={onPress}>
      <Box
        padding="m"
        flexDirection="row"
        backgroundColor="background"
        borderRadius="l"
        borderColor="danger"
        alignItems="center"
        style={[styles.content, {borderColor: color}]}>
        <Box
          style={[styles.prefixColorView, {backgroundColor: color}]}
          flex={0.05}
          borderRadius="m">
          <></>
        </Box>
        <Box flexDirection="column" flex={1}>
          <Text
            variant="title3"
            textAlign="left"
            marginTop="s"
            style={{color: theme.colors.text}}>
            {type}
          </Text>
          <Text
            variant="title2"
            textAlign="left"
            marginTop="s"
            style={{color: theme.colors.text}}>
            {`$ ${totalReward}`}
          </Text>
        </Box>
        <Box
          style={styles.imageContainer}
          justifyContent="center"
          alignItems="flex-end"
          flex={1}>
          <Image
            source={require('./.././../assets/arrow.png')}
            resizeMode="contain"
            style={styles.image}
          />
        </Box>
      </Box>
    </Button>
  );
};

export default ButtonsContainer;

const styles = StyleSheet.create({
  prefixColorView: {
    width: 5,
    height: 50,
    margin: 8,
    marginRight: 16,
  },
  imageContainer: {
    height: 40,
  },
  image: {
    height: 20,
    width: 30,
    resizeMode: 'contain',
  },
  content: {
    borderWidth: 1,
    flex: 1,
  },
});
