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

const models = require('./index');

/**
 * Policy creation properties.
 *
 */
class CreatePolicyInputProperties {
  /**
   * Create a CreatePolicyInputProperties.
   * @member {object} [providerSpecificInput] The ReplicationProviderSettings.
   * @member {string} [providerSpecificInput.instanceType] Polymorphic
   * Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of CreatePolicyInputProperties
   *
   * @returns {object} metadata of CreatePolicyInputProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CreatePolicyInputProperties',
      type: {
        name: 'Composite',
        className: 'CreatePolicyInputProperties',
        modelProperties: {
          providerSpecificInput: {
            required: false,
            serializedName: 'providerSpecificInput',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'instanceType',
                clientName: 'instanceType'
              },
              uberParent: 'PolicyProviderSpecificInput',
              className: 'PolicyProviderSpecificInput'
            }
          }
        }
      }
    };
  }
}

module.exports = CreatePolicyInputProperties;
