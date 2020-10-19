const {
    createSession,
    closeSession,
    startWebDriver,
    stopWebDriver,
    client
  } = require('nightwatch-api');
  
  async function setup(env = 'default') {
    await startWebDriver({ env });
    await createSession({ env });
  }
  
  async function shutdown() {
    await closeSession();
    await stopWebDriver();
  }
  
  async function run() {
    await client.url('https://www.cermati.com/gabung');
    await client.setValue('#email', "cermatitestrasya2@test.com");
    await client.setValue('#password', "cermatirasya1234");
    await client.setValue('#confirm-password', "cermatirasya1234");
    await client.setValue('#first-name', "Rasyadan");
    await client.setValue('#last-name', "Farouq");
    await client.setValue('#mobile-phone', "081221815338");
    await client.setValue('#residence-city', "Jakarta");
    await client.pause(4000);
    await client.click('.autocomplete-list-item:nth-child(1)');
    await client.click('.btn.btn-full.btn-submit.btn-track');
    await client.pause(4000);
  }
  
  (async function() {
    try {
      await setup('chrome');
      await run();
    } catch (err) {
      console.log(err.stack);
    } finally {
      await shutdown();
    }
  })();