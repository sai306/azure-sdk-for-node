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
 * Represents a resource name availability.
 *
 */
class NameAvailability {
  /**
   * Create a NameAvailability.
   * @member {string} [message] Error Message.
   * @member {boolean} [nameAvailable] Indicates whether the resource name is
   * available.
   * @member {string} [reason] Reason for name being unavailable.
   */
  constructor() {
  }

  /**
   * Defines the metadata of NameAvailability
   *
   * @returns {object} metadata of NameAvailability
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NameAvailability',
      type: {
        name: 'Composite',
        className: 'NameAvailability',
        modelProperties: {
          message: {
            required: false,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          },
          nameAvailable: {
            required: false,
            serializedName: 'nameAvailable',
            type: {
              name: 'Boolean'
            }
          },
          reason: {
            required: false,
            serializedName: 'reason',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = NameAvailability;