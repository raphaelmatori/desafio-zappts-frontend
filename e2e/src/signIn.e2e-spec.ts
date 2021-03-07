import { browser, logging, element, by } from 'protractor';
import { AuthPage } from './auth.po';
import * as chancejs from 'chance';


describe('Sign In', () => {
  let page: AuthPage;
  const chance = new chancejs();

  beforeEach(() => {
    page = new AuthPage();
  });

  it('should display welcome message', async () => {
    await page.navigateTo();
    expect(await page.getTitleSignIn()).toEqual('Welcome to Invision');
  });

  it('should sign in with credentials properly', async () => {
    await page.navigateTo();
    page.setEmail(chance.email());
    page.setPassword(chance.string({ length: 6 }));
    expect(await page.hasErrors()).toBeFalsy();
  });

  it('should display an error when form is submited empty', async () => {
    await page.navigateTo();
    await page.submitForm();
    expect(await page.hasErrors()).toBeTruthy()
  });

  it('should display an error about empty email', async () => {
    await page.navigateTo();
    page.setPassword(chance.string({ length: 6 }));
    await page.submitForm();
    expect(await page.getErrorValue()).toEqual('Email can not be empty');
    expect(await page.hasErrors()).toBe(true);
  });

  it('should display an error about invalid email', async () => {
    await page.navigateTo();
    page.setEmail(chance.string({ length: 12 }));
    page.setPassword(chance.string({ length: 6 }));
    await page.submitForm();
    expect(await page.getErrorValue()).toEqual('Please enter a valid email address');
    expect(await page.hasErrors()).toBe(true);
  });

  it('should display an error about empty password', async () => {
    await page.navigateTo();
    page.setEmail(chance.email());
    await page.submitForm();
    expect(await page.getErrorValue()).toEqual('Password can not be empty');
    expect(await page.hasErrors()).toBe(true);
  });

  it('should navigate to sign up page through link', async () => {
    await page.navigateTo();
    await page.clickCreateAccountLink();
    expect(await page.getTitleSignUp()).toEqual('Getting Started');
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
