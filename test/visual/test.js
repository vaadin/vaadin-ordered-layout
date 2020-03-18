gemini.suite('vaadin-ordered-layout', function(rootSuite) {
  rootSuite
    .before(function(actions, find) {
      return actions.waitForJSCondition(function(window) {
        return window.webComponentsAreReady;
      }, 60000);
    })
    .after(function(actions, find) {
      // Firefox stops responding on socket after a test, workaround:
      return actions.executeJS(function(window) {
        window.location.href = 'about:blank'; // just go away, please!
      });
    });

  ['ltr', 'rtl'].forEach(dir => {
    ['lumo', 'material'].forEach(theme => {
      gemini.suite(`horizontal-layout-${theme}-${dir}`, function(suite) {
        suite
          .setUrl(`default.html?theme=${theme}&dir=${dir}`)
          .setCaptureElements('#horizontal-layout')
          .capture('horizontal-layout');
      });

      gemini.suite(`vertical-layout-${theme}-${dir}`, function(suite) {
        suite
          .setUrl(`default.html?theme=${theme}&dir=${dir}`)
          .setCaptureElements('#vertical-layout')
          .capture('vertical-layout');
      });
    });
  });
});
