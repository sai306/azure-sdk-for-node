/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the AutoHealCustomAction class.
 * @constructor
 * Custom action to be executed
 * when an auto heal rule is triggered.
 *
 * @member {string} [exe] Executable to be run.
 *
 * @member {string} [parameters] Parameters for the executable.
 *
 */
class AutoHealCustomAction {
  constructor() {
  }

  /**
   * Defines the metadata of AutoHealCustomAction
   *
   * @returns {object} metadata of AutoHealCustomAction
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AutoHealCustomAction',
      type: {
        name: 'Composite',
        className: 'AutoHealCustomAction',
        modelProperties: {
          exe: {
            required: false,
            serializedName: 'exe',
            type: {
              name: 'String'
            }
          },
          parameters: {
            required: false,
            serializedName: 'parameters',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AutoHealCustomAction;