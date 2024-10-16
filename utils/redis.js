const { resolve } = require("mongodb/lib/core/topologies/read_preference");

/**
 * trynna test the funcnality of a Promise
 * @returns {Promise<void>}
 */
function saveData() {
  return new Promise((resolve) => {
    setTimeout(
      (() => {
        console.log("Data saved successfully!");
        resolve(); // resolves with no value
      },
      1000),
    );
  });
}
