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
 * Initializes a new instance of the ContainerServiceMasterProfile class.
 * @constructor
 * Profile for the container service master.
 *
 * @member {number} [count] Number of masters (VMs) in the container service
 * cluster. Allowed values are 1, 3, and 5. The default value is 1. Default
 * value: 1 .
 *
 * @member {string} dnsPrefix DNS prefix to be used to create the FQDN for
 * master.
 *
 * @member {string} [fqdn] FDQN for the master.
 *
 */
class ContainerServiceMasterProfile {
  constructor() {
  }

  /**
   * Defines the metadata of ContainerServiceMasterProfile
   *
   * @returns {object} metadata of ContainerServiceMasterProfile
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ContainerServiceMasterProfile',
      type: {
        name: 'Composite',
        className: 'ContainerServiceMasterProfile',
        modelProperties: {
          count: {
            required: false,
            serializedName: 'count',
            defaultValue: 1,
            type: {
              name: 'Number'
            }
          },
          dnsPrefix: {
            required: true,
            serializedName: 'dnsPrefix',
            type: {
              name: 'String'
            }
          },
          fqdn: {
            required: false,
            readOnly: true,
            serializedName: 'fqdn',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ContainerServiceMasterProfile;