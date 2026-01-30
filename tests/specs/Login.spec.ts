import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { USERS } from '../../utils/testData.ts';

test.describe('Login Tests', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test('TC001 - Successful login using standard user', async ({ page }) => {
        await loginPage.login(USERS.STANDARD.username, USERS.STANDARD.password);
    });
    
    // test('TC002 - Invalid cridentials error', async ({ page }) => {

    // })






});

