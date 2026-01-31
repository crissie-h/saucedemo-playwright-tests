import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { MESSAGES, USERS } from '../../utils/testData.ts';

test.describe('Login Tests', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test('TC01 - Successful login using standard user', async ({ page }) => {
        await loginPage.login(USERS.STANDARD.username, USERS.STANDARD.password);
    });
    
    test('TC02 - Error message with invalid cridentials error', async ({ page }) => {
        await loginPage.login('invalid_user', 'invalid_password')
        
        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toContain(MESSAGES.LOGIN_ERROR);
        expect(await loginPage.isLoginButtonVisible()).toBeTruthy();
    })

    test('TC03 - Error message with blocked user', async ({ page }) => {
        await loginPage.login(USERS.LOCKED.username, USERS.LOCKED.password);

        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toContain(MESSAGES.LOCKED_USER_ERROR);
    })




});

