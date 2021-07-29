import { reloadApp } from 'detox-expo-helpers';

describe('Home Screen Test', () => {

  beforeEach(async () => {
    await reloadApp();
  });

  it('should have home screen', async () => {
    // @ts-ignore
    await expect(element(by.id('homeContainer'))).toExist();
  });

  // it('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   // @ts-ignore
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });
  //
  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   // @ts-ignore
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
