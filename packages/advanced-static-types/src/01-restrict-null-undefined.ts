/* Without strictNullCheck null and undefined can be used for any type */

const container = document.getElementById('app-container')
if (container) {
  container.click()
}

const forcedNotNullContainer = document.getElementById('app-container')!
forcedNotNullContainer.click()
