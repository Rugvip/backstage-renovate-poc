import { PluginEnvironment } from './types';

describe('test', () => {
  it('unbreaks the test runner', () => {
    const breaker = {} as PluginEnvironment;
    expect(breaker).toBeTruthy();
  });
});
