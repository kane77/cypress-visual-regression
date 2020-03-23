/* eslint-disable */
/// <reference types="cypress" />

import Loggable = Cypress.Loggable
import Timeoutable = Cypress.Timeoutable
import ScreenshotOptions = Cypress.ScreenshotOptions

type CompareSnapshotOptions = number | Partial<Loggable & Timeoutable & ScreenshotOptions & {errorThreshold: number}>
declare namespace Cypress {
  interface Chainable<Subject> {
    compareSnapshot(name: string, params?: CompareSnapshotOptions): Chainable<null>
  }
}
