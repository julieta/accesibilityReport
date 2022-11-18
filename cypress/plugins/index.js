/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
};
//const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
/*
module.exports = (on, config) => {
  on("before:browser:launch", (browser = {}, launchOptions) => {
    prepareAudit(launchOptions);
  });

  on("task", {
    lighthouse: lighthouse(),
  });
};*/

const { lighthouse, pa11y, prepareAudit } = require("cypress-audit");
const fs = require("fs");
const ReportGenerator = require("lighthouse/report/generator/report-generator");

module.exports = (on, config) => {
  on("before:browser:launch", (browser = {}, launchOptions) => {
    prepareAudit(launchOptions);
  });

  on("task", {
    lighthouse: lighthouse((lighthouseReport) => {
      fs.writeFileSync(
        "lhreport.html",
        ReportGenerator.generateReport(lighthouseReport.lhr, "html")
      );
    }),
  });
};
