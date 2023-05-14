import {
    getFrequency,
    setStartedAddingData
  } from './../Assets/Global/AppGlobalContext.js';  
  
/**
    Handles the input events on a data container element.
    Modifies the sibling element of the container based on the user input value.
    Displays an alert message if the user input is not a number or the frequency is 0.

    @function
    @param {Event} event - The input event.
    @param {Element} container - The data container element.
    @returns {void}
*/

export function handleContainerClick(event, container) {

    let frequency = getFrequency()

    if (frequency === 0.0) {
        alert("frequency cannot be 0")
        return
    }

    event.target.innerHTML = `
        <input class="data-container-input" type="number"/>
    `

    setStartedAddingData(true)

    const input = event.target.querySelector(".data-container-input")

    input.addEventListener("input", (e) => {
        if (isNaN(e.target.value)) {
            alert("Numbers Only")
            e.target.value = ""
            return
        }

        const changedValue = parseInt(e.target.value)
        let solving = (changedValue / frequency) * 100 // Modified calculation
        const siblingElement = container.nextElementSibling
        if (siblingElement) {
            if (!isNaN(solving)) {
                siblingElement.textContent = solving.toFixed(2)
            } else {
                siblingElement.textContent = ""
            }
        }
    })
}
