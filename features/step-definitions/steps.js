const { ANDROID_CONFIG } = require('@wdio/cli/build/constants');
const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("I am on the {string} page", async (page) => {
    await browser.url(`https://the-internet.herokuapp.com/${page}`);
});

// Login test
When("I login with {word} and {word}", async (username, password) => {
    await $('#username').setValue(username);
    await $('#password').setValue(password);
    await $('button[type="submit"]').click();
});

Then("I should see a flash message saying {string}", async (message) => {
    const elem = await $('#flash');
    await expect(elem).toBeExisting();
    await expect(elem).toHaveTextContaining(message);
});

// Key Press test
When("I press {} key.", async (any) => {
    const input = await $('#target');
    await input.keys(any)
});

Then("I should see a message saying {string}", async (message) => {
    const elem = await $('#result');
    await expect(elem).toBeExisting();
    await expect(elem).toHaveTextContaining(message);
});

// Hover test

When("I hover on {string}", async (element) => {
    await $(element).moveTo();
});

When("Click on {string}", async (link) => {
    await $(link).click();
});

Then("I am on users page {int}.", async (user) => {
    await browser.url(`https://the-internet.herokuapp.com/users/${user}`);
});;

// Checkbox test
When("I mark check on checkbox", async () => {
    const elem = await $('/html/body/div[2]/div/div/form/input[1]');
    await $(elem).click();
});

When("Checkbox already marked", async () => {
    await $('/html/body/div[2]/div/div/form/input[2]');
});

Then("I have checkbox marked as checked", async () => {
    const elem = await $('/html/body/div[2]/div/div/form/input[1]');
    await expect(elem).toBeSelected();

});

Then("I have checkbox still marked as checked", async () => {
    const elem = await $('/html/body/div[2]/div/div/form/input[2]');
    await expect(elem).toBeSelected();

});

// Add/Remove test
When('I click on add button', async () => {
    await $('/html/body/div[2]/div/div/button').click();
    await $('/html/body/div[2]/div/div/button').click();
});

Then("Delete button appear", async () => {
    const elem = await $('.added-manually');
    await expect(elem).toBeExisting();
    await expect(elem).toHaveTextContaining('Delete');
});

When('I click on delete button', async () => {
    await $('.added-manually').click();
    await $('.added-manually').click();
});

Then("Delete button disappear", async () => {
    const elem = await $('.added-manually');
    await(!expect(elem).toBeExisting());
});

// Status Codes test
When("I click on Status code {int}", async(statusCode) => {
    await $(`a[href="status_codes/${statusCode}"]`).click();
})

Then ("I see the status code text with {int}", async(statusCode) => {
    const elem = await $('//*[@id="content"]/div/p');
    await expect(elem).toHaveTextContaining(`This page returned a ${statusCode} status code.`);
})
