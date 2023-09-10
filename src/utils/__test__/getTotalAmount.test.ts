import {Reward} from '../../data/api/types/Reward';
import {getTotalAmount} from '../Utils'; // Import the function to be tested

describe('getTotalAmount', () => {
  it('should return 0 when rewards array is empty', () => {
    const rewards: Reward[] = [];
    const result = getTotalAmount(rewards);
    expect(result).toBe(0);
  });

  it('should return the total amount when rewards array is not empty', () => {
    //@ts-ignore
    const rewards: Reward[] = [{amount: 10}, {amount: 20}, {amount: 30}];
    const result = getTotalAmount(rewards);
    expect(result).toBe(60); // 10 + 20 + 30 = 60
  });

  it('should handle rewards array with negative amounts', () => {
    //@ts-ignore
    const rewards: Reward[] = [{amount: -10}, {amount: -20}, {amount: 30}];
    const result = getTotalAmount(rewards);
    expect(result).toBe(0); // -10 + -20 + 30 = 0
  });

  it('should handle undefined rewards', () => {
    const result = getTotalAmount();
    expect(result).toBe(0);
  });
});
