import { browser, by, element } from 'protractor';

export class AuthPage {
  async navigateTo(url: string = browser.baseUrl): Promise<unknown> {
    return browser.get(url);
  }

  async getTitleSignIn(): Promise<string> {
    return element(by.css('app-sign-in-form h3')).getText();
  }

  async getTitleSignUp(): Promise<string> {
    return element(by.css('app-sign-up-form h3')).getText();
  }


  async getErrorValue(): Promise<string> {
    return element(by.css('mat-error')).getText();
  }

  async submitForm(): Promise<void> {
    return element(by.css('form')).submit();
  }

  async setFullName(name: string) {
    element(by.css('input[type="text"]')).sendKeys(name);
  }

  async setEmail(email: string) {
    element(by.css('input[type="email"]')).sendKeys(email);
  }

  async setPassword(password: string) {
    element(by.css('input[type="password"]')).sendKeys(password);
  }

  async clickCreateAccountLink(): Promise<void> {
    return element(by.css('a.createAccount')).click();
  }

  async clickLoginLink(): Promise<void> {
    return element(by.css('a.js-login')).click();
  }

  async hasErrors(): Promise<boolean> {

    return element.all(by.css('.mat-error')).isPresent();
  }
}
