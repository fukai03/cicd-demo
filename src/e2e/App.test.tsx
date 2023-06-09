describe('Check Page', () => {
  beforeAll(async () => {
    let dynamicUrl = '';
    process.argv.forEach((item) => {
      const matches = item.match(/^\-\-URL\=(.*)$/);
      if (matches) {
        dynamicUrl = matches[1];
      }
    });
    await page.goto(dynamicUrl || 'http://localhost:3000/');
  });

  it('click button', async () => {
    await page.click('[role="button"]');
    const content = await page.$eval('[role="button"]', (el) => el.textContent);
    await expect(content).toEqual('count is: 1');
  });
});
