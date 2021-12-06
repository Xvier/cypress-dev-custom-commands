declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * @description This is a demo command for the dev.to blog
     * @param {string} text - Enter a random text
     * @param {number} number - Enter a number
     */
    devSpecialCommand(text: String, number: Number): Chainable<any>;
  }
}
