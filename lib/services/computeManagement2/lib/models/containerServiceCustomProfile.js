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
 * Initializes a new instance of the ContainerServiceCustomProfile class.
 * @constructor
 * Properties to configure a custom container service cluster.
 *
 * @member {string} orchestrator The name of the custom orchestrator to use.
 *
 */
class ContainerServiceCustomProfile {
  constructor() {
  }

  /**
   * Defines the metadata of ContainerServiceCustomProfile
   *
   * @returns {object} metadata of ContainerServiceCustomProfile
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ContainerServiceCustomProfile',
      type: {
        name: 'Composite',
        className: 'ContainerServiceCustomProfile',
        modelProperties: {
          orchestrator: {
            required: true,
            serializedName: 'orchestrator',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ContainerServiceCustomProfile;