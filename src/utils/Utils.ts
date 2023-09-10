import {Reward} from '../data/api/types/Reward';

const getTotalAmount = (rewards?: Reward[]) => {
  return rewards && rewards.length > 0
    ? rewards
        .map(o => o.amount)
        .reduce((a, c) => {
          return a + c;
        })
    : 0;
};

export {getTotalAmount};
