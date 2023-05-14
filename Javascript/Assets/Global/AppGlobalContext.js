/**
The global context object for the application.
Provides access to the frequency value and the startedAddingData flag.
*/
var frequency = 0.0;
var startedAddingData = false;

/**
   Gets the current frequency value.
   @function
   @returns {number} - The frequency value.
 */
function getFrequency() {
  return frequency;
}

/**
   Sets the frequency value.
   @function
   @param {number} newFrequency - The new frequency value.
   @returns {void}
 */
function setFrequency(newFrequency) {
  frequency = newFrequency;
}

/**
   Checks if data addition has started.
   @function
   @returns {boolean} - The flag indicating if data addition has started.
 */
function hasStartedAddingData() {
  return startedAddingData;
}

/**
   Sets the flag indicating if data addition has started.
   @function
   @param {boolean} value - The new value of the flag.
   @returns {void}
 */
function setStartedAddingData(value) {
  startedAddingData = value;
}

export {
  getFrequency,
  setFrequency,
  hasStartedAddingData,
  setStartedAddingData
};
