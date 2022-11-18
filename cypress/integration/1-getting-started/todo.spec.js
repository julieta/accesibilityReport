/// <reference types="cypress" />

it("displays two todo items by default", () => {
  cy.visit("https://www.claro.com.ar/personas");

  const lighthouseThresholds = {
    //performance: 50,
    accessibility: 50,
    //seo: 70,
    /*"first-contentful-paint": 2000,
    "largest-contentful-paint": 3000,
    "cumulative-layout-shift": 0.1,
    "total-blocking-time": 500,*/
  };

  /**const desktopConfig = {
    formFactor: "desktop",
    screenEmulation: { disabled: false },
  };*/

  cy.lighthouse(lighthouseThresholds);
});
