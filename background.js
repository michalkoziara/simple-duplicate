/**
 * Returns all of the registered extension commands for this extension
 * and their shortcut (if active).
 */
let gettingAllCommands = browser.commands.getAll();
gettingAllCommands.then((commands) => {
  for (let command of commands) {
    // Note that this logs to the Add-on Debugger's console, not the regular Web console.
    console.log(command);
  }
});

/**
 * Fired when a registered command is activated using a keyboard shortcut.
 */
browser.commands.onCommand.addListener(() => {
  browser.tabs.query({currentWindow: true, active: true})
    .then(tabs => {
      browser.tabs.duplicate(tabs[0].id)
    })
});