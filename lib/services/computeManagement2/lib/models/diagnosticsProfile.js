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
 * Specifies the boot diagnostic settings state. <br><br>Minimum api-version:
 * 2015-06-15.
 *
 */
class DiagnosticsProfile {
  /**
   * Create a DiagnosticsProfile.
   * @member {object} [bootDiagnostics] Boot Diagnostics is a debugging feature
   * which allows you to view Console Output and Screenshot to diagnose VM
   * status. <br><br> For Linux Virtual Machines, you can easily view the
   * output of your console log. <br><br> For both Windows and Linux virtual
   * machines, Azure also enables you to see a screenshot of the VM from the
   * hypervisor.
   * @member {boolean} [bootDiagnostics.enabled] Whether boot diagnostics
   * should be enabled on the Virtual Machine.
   * @member {string} [bootDiagnostics.storageUri] Uri of the storage account
   * to use for placing the console output and screenshot.
   */
  constructor() {
  }

  /**
   * Defines the metadata of DiagnosticsProfile
   *
   * @returns {object} metadata of DiagnosticsProfile
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DiagnosticsProfile',
      type: {
        name: 'Composite',
        className: 'DiagnosticsProfile',
        modelProperties: {
          bootDiagnostics: {
            required: false,
            serializedName: 'bootDiagnostics',
            type: {
              name: 'Composite',
              className: 'BootDiagnostics'
            }
          }
        }
      }
    };
  }
}

module.exports = DiagnosticsProfile;
