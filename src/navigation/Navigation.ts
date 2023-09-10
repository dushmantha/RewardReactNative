import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Reward} from '../data/api/types/Reward';

export interface NavigationProps<RouteName extends keyof AppRoutes> {
  navigation: NativeStackNavigationProp<AppRoutes, RouteName>;
  route: RouteProp<AppRoutes, RouteName>;
}

export type AppRoutes = {
  Rewards: undefined;
  Inflows: {
    earn: Reward[];
  };
  Outflows: {
    spent: Reward[];
  };
};
