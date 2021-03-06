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
 * Class representing a TrendingVideosCategory.
 */
class TrendingVideosCategory {
  /**
   * Create a TrendingVideosCategory.
   * @member {string} title
   * @member {array} subcategories
   */
  constructor() {
  }

  /**
   * Defines the metadata of TrendingVideosCategory
   *
   * @returns {object} metadata of TrendingVideosCategory
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TrendingVideos/Category',
      type: {
        name: 'Composite',
        className: 'TrendingVideosCategory',
        modelProperties: {
          title: {
            required: true,
            serializedName: 'title',
            type: {
              name: 'String'
            }
          },
          subcategories: {
            required: true,
            serializedName: 'subcategories',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TrendingVideosSubcategoryElementType',
                  type: {
                    name: 'Composite',
                    className: 'TrendingVideosSubcategory'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = TrendingVideosCategory;
