import React from 'react';
import {Image} from 'react-native';
import {Box, Text} from '../../theme/Theme';

const INNER_RADIUS = 30;
const OUTER_RADIUS = 34;

type PersonalInfoProps = {
  image?: string;
  userName: string;
  status: string;
};

const PersonalInfo = ({image, userName, status}: PersonalInfoProps) => {
  return (
    <Box
      padding="m"
      paddingBottom="xl"
      flexDirection="row"
      justifyContent="space-between"
      backgroundColor="lightBlue"
      borderBottomRightRadius="l"
      borderBottomLeftRadius="l"
      alignItems="center">
      <Box flexDirection="column">
        <Text variant="title3" textAlign="left" marginTop="s" color="text">
          {status}
        </Text>
        <Text variant="title2" textAlign="left" marginTop="s" color="text">
          {userName}
        </Text>
      </Box>
      {image && (
        <Box
          style={{
            width: INNER_RADIUS * 2,
            height: INNER_RADIUS * 2,
            borderRadius: INNER_RADIUS,
          }}>
          <Image
            source={{uri: image}}
            style={{
              width: OUTER_RADIUS * 2 - 10,
              height: OUTER_RADIUS * 2 - 10,
              borderRadius: OUTER_RADIUS,
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default PersonalInfo;
