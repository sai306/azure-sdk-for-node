// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlsrg01';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeStore/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testadlfs17772.azuredatalakestore.net\",\"creationTime\":\"2016-02-23T02:13:55.0992824Z\",\"lastModifiedTime\":\"2016-02-23T02:13:55.0992824Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/datalakerg12687/providers/Microsoft.DataLakeStore/accounts/testadlfs17772\",\"name\":\"testadlfs17772\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"onesdk2612.azuredatalakestore.net\",\"creationTime\":\"2016-02-25T22:13:59.3488032Z\",\"lastModifiedTime\":\"2016-02-25T22:13:59.3488032Z\"},\"location\":\"East US 2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/onesdk7034/providers/Microsoft.DataLakeStore/accounts/onesdk2612\",\"name\":\"onesdk2612\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testdatalake13758.azuredatalakestore.net\",\"creationTime\":\"2016-01-27T23:37:46.4920191Z\",\"lastModifiedTime\":\"2016-01-27T23:37:46.4920191Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/rgaba12048/providers/Microsoft.DataLakeStore/accounts/testdatalake13758\",\"name\":\"testdatalake13758\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testdatalake27879.azuredatalakestore.net\",\"creationTime\":\"2016-01-27T23:38:19.8556695Z\",\"lastModifiedTime\":\"2016-01-27T23:38:19.8556695Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/rgaba12048/providers/Microsoft.DataLakeStore/accounts/testdatalake27879\",\"name\":\"testdatalake27879\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testdatalake1187.azuredatalakestore.net\",\"creationTime\":\"2016-01-27T23:27:31.385199Z\",\"lastModifiedTime\":\"2016-01-27T23:27:31.385199Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/rgaba18569/providers/Microsoft.DataLakeStore/accounts/testdatalake1187\",\"name\":\"testdatalake1187\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testdatalake21234.azuredatalakestore.net\",\"creationTime\":\"2016-01-27T23:28:02.8597522Z\",\"lastModifiedTime\":\"2016-01-27T23:28:02.8597522Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/rgaba18569/providers/Microsoft.DataLakeStore/accounts/testdatalake21234\",\"name\":\"testdatalake21234\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls7162.azuredatalakestore.net\",\"creationTime\":\"2016-03-01T02:43:45.8664658Z\",\"lastModifiedTime\":\"2016-03-01T02:43:45.8664658Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls7162\",\"name\":\"xplattestadls7162\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls9414.azuredatalakestore.net\",\"creationTime\":\"2016-03-01T02:44:19.6156599Z\",\"lastModifiedTime\":\"2016-03-01T02:44:19.6156599Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls9414\",\"name\":\"xplattestadls9414\",\"type\":\"Microsoft.DataLakeStore/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3762',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '8b7752d9-4bfb-4708-b283-a9412cbfcdfa',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '441c87ec-69f6-463d-a1e8-2f2ba42cf975',
  'x-ms-routing-request-id': 'CENTRALUS:20160301T024454Z:441c87ec-69f6-463d-a1e8-2f2ba42cf975',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 01 Mar 2016 02:44:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeStore/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testadlfs17772.azuredatalakestore.net\",\"creationTime\":\"2016-02-23T02:13:55.0992824Z\",\"lastModifiedTime\":\"2016-02-23T02:13:55.0992824Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/datalakerg12687/providers/Microsoft.DataLakeStore/accounts/testadlfs17772\",\"name\":\"testadlfs17772\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"onesdk2612.azuredatalakestore.net\",\"creationTime\":\"2016-02-25T22:13:59.3488032Z\",\"lastModifiedTime\":\"2016-02-25T22:13:59.3488032Z\"},\"location\":\"East US 2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/onesdk7034/providers/Microsoft.DataLakeStore/accounts/onesdk2612\",\"name\":\"onesdk2612\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testdatalake13758.azuredatalakestore.net\",\"creationTime\":\"2016-01-27T23:37:46.4920191Z\",\"lastModifiedTime\":\"2016-01-27T23:37:46.4920191Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/rgaba12048/providers/Microsoft.DataLakeStore/accounts/testdatalake13758\",\"name\":\"testdatalake13758\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testdatalake27879.azuredatalakestore.net\",\"creationTime\":\"2016-01-27T23:38:19.8556695Z\",\"lastModifiedTime\":\"2016-01-27T23:38:19.8556695Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/rgaba12048/providers/Microsoft.DataLakeStore/accounts/testdatalake27879\",\"name\":\"testdatalake27879\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testdatalake1187.azuredatalakestore.net\",\"creationTime\":\"2016-01-27T23:27:31.385199Z\",\"lastModifiedTime\":\"2016-01-27T23:27:31.385199Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/rgaba18569/providers/Microsoft.DataLakeStore/accounts/testdatalake1187\",\"name\":\"testdatalake1187\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testdatalake21234.azuredatalakestore.net\",\"creationTime\":\"2016-01-27T23:28:02.8597522Z\",\"lastModifiedTime\":\"2016-01-27T23:28:02.8597522Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/rgaba18569/providers/Microsoft.DataLakeStore/accounts/testdatalake21234\",\"name\":\"testdatalake21234\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls7162.azuredatalakestore.net\",\"creationTime\":\"2016-03-01T02:43:45.8664658Z\",\"lastModifiedTime\":\"2016-03-01T02:43:45.8664658Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls7162\",\"name\":\"xplattestadls7162\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls9414.azuredatalakestore.net\",\"creationTime\":\"2016-03-01T02:44:19.6156599Z\",\"lastModifiedTime\":\"2016-03-01T02:44:19.6156599Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls9414\",\"name\":\"xplattestadls9414\",\"type\":\"Microsoft.DataLakeStore/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3762',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '8b7752d9-4bfb-4708-b283-a9412cbfcdfa',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '441c87ec-69f6-463d-a1e8-2f2ba42cf975',
  'x-ms-routing-request-id': 'CENTRALUS:20160301T024454Z:441c87ec-69f6-463d-a1e8-2f2ba42cf975',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 01 Mar 2016 02:44:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls7162.azuredatalakestore.net\",\"creationTime\":\"2016-03-01T02:43:45.8664658Z\",\"lastModifiedTime\":\"2016-03-01T02:43:45.8664658Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls7162\",\"name\":\"xplattestadls7162\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls9414.azuredatalakestore.net\",\"creationTime\":\"2016-03-01T02:44:19.6156599Z\",\"lastModifiedTime\":\"2016-03-01T02:44:19.6156599Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls9414\",\"name\":\"xplattestadls9414\",\"type\":\"Microsoft.DataLakeStore/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '998',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '85108720-d537-4899-a333-daf4ca3dc7a3',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'e4876d83-38e0-4b9f-ae20-c42158ffdbb4',
  'x-ms-routing-request-id': 'CENTRALUS:20160301T024456Z:e4876d83-38e0-4b9f-ae20-c42158ffdbb4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 01 Mar 2016 02:44:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls7162.azuredatalakestore.net\",\"creationTime\":\"2016-03-01T02:43:45.8664658Z\",\"lastModifiedTime\":\"2016-03-01T02:43:45.8664658Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls7162\",\"name\":\"xplattestadls7162\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls9414.azuredatalakestore.net\",\"creationTime\":\"2016-03-01T02:44:19.6156599Z\",\"lastModifiedTime\":\"2016-03-01T02:44:19.6156599Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls9414\",\"name\":\"xplattestadls9414\",\"type\":\"Microsoft.DataLakeStore/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '998',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '85108720-d537-4899-a333-daf4ca3dc7a3',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'e4876d83-38e0-4b9f-ae20-c42158ffdbb4',
  'x-ms-routing-request-id': 'CENTRALUS:20160301T024456Z:e4876d83-38e0-4b9f-ae20-c42158ffdbb4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 01 Mar 2016 02:44:55 GMT',
  connection: 'close' });
 return result; }]];