const duplicateCommandName = 'toggle-duplicate';

/**
 * Set the value of the shortcut text field.
 */
async function setProperties() {
  let commands = await browser.commands.getAll();
  for (let command of commands) {
    if (command.name === duplicateCommandName) {
      document.querySelector('#shortcut').value = command.shortcut;
    }
  }
}

/**
 * Update the shortcut based on the value in the text field.
 */
async function updateShortcut() {
  console.log("Update shortcut");
  console.log(document.querySelector('#shortcut').value);

  await browser.commands.update({
    name: duplicateCommandName,
    shortcut: document.querySelector('#shortcut').value
  });
}

/**
 * Reset the shortcut and update the text field.
 */
async function resetShortcut() {
  await browser.commands.reset(duplicateCommandName);
  await setProperties();
}

/**
 * Update the UI when the page loads.
 */
document.addEventListener('DOMContentLoaded', setProperties);

/**
 * Handle update and reset button clicks
 */
document.querySelector('#update').addEventListener('click', updateShortcut)
document.querySelector('#reset').addEventListener('click', resetShortcut)