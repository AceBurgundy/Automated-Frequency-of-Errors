import {
  setFrequency,
  hasStartedAddingData
} from './../Assets/Global/AppGlobalContext.js';

/**
    Handles the click event for the frequency setter.
    Updates data and performs calculations based on the new frequency value.

    @returns {void} This function does not return anything.
*/

export function handleFrequencySetterClick() {
    // Get the new frequency value from the input element
    const newFrequencyValue = document.getElementById("frequency-input").value
  
    // Check if the new frequency value is 0
    if (newFrequencyValue === "0") {
      alert("Frequency cannot be 0")
      return
    }
  
    // Check if the new frequency value is not a number
    if (isNaN(newFrequencyValue)) {
      alert("Frequency should be a number")
      return
    }
  
    // Check if the data addition process has already started
    if (hasStartedAddingData()) {
      // Ask for confirmation to update all data with the new frequency value
      const result = confirm(
        `Click yes to update all data to use the new frequency ${newFrequencyValue}`
      )
  
      if (result) {
        // Set the new frequency value in the global context
        setFrequency(newFrequencyValue * 1.0)
  
        // Get all data containers
        const inputContainer = document.querySelectorAll(".data-container")
  
        // Perform calculations for each data container
        inputContainer.forEach((container) => {
          if (container.firstElementChild !== null) {
            // Get the value from the container
            const containerValue = parseInt(container.firstElementChild.value)
  
            // Perform the calculation
            let solving = (containerValue / newFrequencyValue) * 100
  
            // Update the sibling element with the calculated value
            const siblingElement = container.nextElementSibling
            if (siblingElement) {
              siblingElement.textContent = solving.toFixed(2)
            }
          }
        })
      }
    } else {
      // Check if the new frequency value is empty
      if (newFrequencyValue === "") {
        alert("Please insert frequency first")
        return
      } else {
        // Set the new frequency value in the global context
        setFrequency(newFrequencyValue * 1.0)
        alert(`New Frequency is ${newFrequencyValue}`)
      }
    }
}
  