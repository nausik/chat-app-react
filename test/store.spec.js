import store from '../src/store/store';
import expect from 'expect';

describe('Redux Store', () => {
  it('exists', () => {
    expect(store).toBeTruthy();
  });

  it('populates predefined state', () => {
    const state = store.getState();

    expect(Object.keys(state).length).toEqual(1);
    expect(state.messages).toBeTruthy();
    expect(state.messages.length).toEqual(2);
  });
});
