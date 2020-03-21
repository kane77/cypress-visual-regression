/* eslint-disable */
/// <reference types="cypress" />

import Loggable = Cypress.Loggable
import Timeoutable = Cypress.Timeoutable
import ScreenshotOptions = Cypress.ScreenshotOptions

type CompareSnapshotOptions = number | Partial<Loggable & Timeoutable & ScreenshotOptions>
declare namespace Cypress {
  interface Chainable<Subject> {
    compareSnapshot: (params: CompareSnapshotOptions) => Chainable<null>
  }
}
