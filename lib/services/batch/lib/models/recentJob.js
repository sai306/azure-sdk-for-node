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
 * Initializes a new instance of the RecentJob class.
 * @constructor
 * @summary Information about the most recent job to run under the job
 * schedule.
 *
 * @member {string} [id] The ID of the job.
 *
 * @member {string} [url] The URL of the job.
 *
 */
class RecentJob {
  constructor() {
  }

  /**
   * Defines the metadata of RecentJob
   *
   * @returns {object} metadata of RecentJob
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RecentJob',
      type: {
        name: 'Composite',
        className: 'RecentJob',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          url: {
            required: false,
            serializedName: 'url',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RecentJob;