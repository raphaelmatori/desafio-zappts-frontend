import { browser, by, element, logging } from 'protractor';
import { AuthPage } from './auth.po';
import * as chancejs from 'chance';


describe('Sign Up', () => {
  let page: AuthPage;
  const chance = new chancejs();

  beforeEach(() => {
    page = new AuthPage();
  });

  it('should display welcome message', async () => {
    await page.navigateTo(`${browser.baseUrl}/auth/sign-up`);
    expect(await page.getTitleSignUp()).toEqual('Getting Started');
  });

  it('should sign up with credentials properly', async () => {
    await page.navigateTo(`${browser.baseUrl}/auth/sign-up`);
    page.setFullName(chance.name({ middle: true }));
    page.setEmail(chance.email());
    page.setPassword(chance.string({ length: 6 }));
    expect(await page.hasErrors()).toBeFalsy();
  });

  it('should display an error when form is submited empty', async () => {
    await page.navigateTo(`${browser.baseUrl}/auth/sign-up`);
    await page.submitForm();
    expect(await page.hasErrors()).toBeTruthy()
  });

  it('should display an error about empty name', async () => {
    await page.navigateTo(`${browser.baseUrl}/auth/sign-up`);
    page.setPassword(chance.string({ length: 6 }));
    page.setEmail(chance.email());
    await page.submitForm();
    expect(await page.getErrorValue()).toEqual('Name can not be empty');
    expect(await page.hasErrors()).toBeTruthy();
  });

  it('should display an error about empty email', async () => {
    await page.navigateTo(`${browser.baseUrl}/auth/sign-up`);
    page.setFullName(chance.name({ middle: true }));
    page.setPassword(chance.string({ length: 6 }));
    await page.submitForm();
    expect(await page.getErrorValue()).toEqual('Email can not be empty');
    expect(await page.hasErrors()).toBeTruthy();
  });

  it('should display an error about invalid email', async () => {
    await page.navigateTo(`${browser.baseUrl}/auth/sign-up`);
    page.setFullName(chance.name({ middle: true }));
    page.setEmail(chance.string({ length: 12 }));
    page.setPassword(chance.string({ length: 6 }));
    await page.submitForm();
    expect(await page.getErrorValue()).toEqual('Please enter a valid email address');
    expect(await page.hasErrors()).toBeTruthy();
  });

  it('should display an error about empty password', async () => {
    await page.navigateTo(`${browser.baseUrl}/auth/sign-up`);
    page.setFullName(chance.name({ middle: true }));
    page.setEmail(chance.email());
    await page.submitForm();
    expect(await page.getErrorValue()).toEqual('Password can not be empty');
    expect(await page.hasErrors()).toBeTruthy();
  });

  it('should display an error about invalid password (less than 6 characters)', async () => {
    await page.navigateTo(`${browser.baseUrl}/auth/sign-up`);
    page.setFullName(chance.name({ middle: true }));
    page.setEmail(chance.email());
    page.setPassword(chance.string({ length: 5 }));
    await page.submitForm();
    expect(await page.getErrorValue()).toEqual('Password length must be at least 6');
    expect(await page.hasErrors()).toBeTruthy();
  });

  it('should navigate to sign in page through link', async () => {
    await page.navigateTo(`${browser.baseUrl}/auth/sign-up`);
    await page.clickLoginLink();
    expect(await page.getTitleSignIn()).toEqual('Welcome to Invision');
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
