// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
'use strict';
var grpc = require('@grpc/grpc-js');
var google_api_apikeys_v2_apikeys_pb = require('../../../../google/api/apikeys/v2/apikeys_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_apikeys_v2_resources_pb = require('../../../../google/api/apikeys/v2/resources_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../google/api/resource_pb.js');
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');

function serialize_google_api_apikeys_v2_CreateKeyRequest(arg) {
  if (!(arg instanceof google_api_apikeys_v2_apikeys_pb.CreateKeyRequest)) {
    throw new Error('Expected argument of type google.api.apikeys.v2.CreateKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_apikeys_v2_CreateKeyRequest(buffer_arg) {
  return google_api_apikeys_v2_apikeys_pb.CreateKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_apikeys_v2_DeleteKeyRequest(arg) {
  if (!(arg instanceof google_api_apikeys_v2_apikeys_pb.DeleteKeyRequest)) {
    throw new Error('Expected argument of type google.api.apikeys.v2.DeleteKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_apikeys_v2_DeleteKeyRequest(buffer_arg) {
  return google_api_apikeys_v2_apikeys_pb.DeleteKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_apikeys_v2_GetKeyRequest(arg) {
  if (!(arg instanceof google_api_apikeys_v2_apikeys_pb.GetKeyRequest)) {
    throw new Error('Expected argument of type google.api.apikeys.v2.GetKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_apikeys_v2_GetKeyRequest(buffer_arg) {
  return google_api_apikeys_v2_apikeys_pb.GetKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_apikeys_v2_GetKeyStringRequest(arg) {
  if (!(arg instanceof google_api_apikeys_v2_apikeys_pb.GetKeyStringRequest)) {
    throw new Error('Expected argument of type google.api.apikeys.v2.GetKeyStringRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_apikeys_v2_GetKeyStringRequest(buffer_arg) {
  return google_api_apikeys_v2_apikeys_pb.GetKeyStringRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_apikeys_v2_GetKeyStringResponse(arg) {
  if (!(arg instanceof google_api_apikeys_v2_apikeys_pb.GetKeyStringResponse)) {
    throw new Error('Expected argument of type google.api.apikeys.v2.GetKeyStringResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_apikeys_v2_GetKeyStringResponse(buffer_arg) {
  return google_api_apikeys_v2_apikeys_pb.GetKeyStringResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_apikeys_v2_Key(arg) {
  if (!(arg instanceof google_api_apikeys_v2_resources_pb.Key)) {
    throw new Error('Expected argument of type google.api.apikeys.v2.Key');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_apikeys_v2_Key(buffer_arg) {
  return google_api_apikeys_v2_resources_pb.Key.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_apikeys_v2_ListKeysRequest(arg) {
  if (!(arg instanceof google_api_apikeys_v2_apikeys_pb.ListKeysRequest)) {
    throw new Error('Expected argument of type google.api.apikeys.v2.ListKeysRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_apikeys_v2_ListKeysRequest(buffer_arg) {
  return google_api_apikeys_v2_apikeys_pb.ListKeysRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_apikeys_v2_ListKeysResponse(arg) {
  if (!(arg instanceof google_api_apikeys_v2_apikeys_pb.ListKeysResponse)) {
    throw new Error('Expected argument of type google.api.apikeys.v2.ListKeysResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_apikeys_v2_ListKeysResponse(buffer_arg) {
  return google_api_apikeys_v2_apikeys_pb.ListKeysResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_apikeys_v2_LookupKeyRequest(arg) {
  if (!(arg instanceof google_api_apikeys_v2_apikeys_pb.LookupKeyRequest)) {
    throw new Error('Expected argument of type google.api.apikeys.v2.LookupKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_apikeys_v2_LookupKeyRequest(buffer_arg) {
  return google_api_apikeys_v2_apikeys_pb.LookupKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_apikeys_v2_LookupKeyResponse(arg) {
  if (!(arg instanceof google_api_apikeys_v2_apikeys_pb.LookupKeyResponse)) {
    throw new Error('Expected argument of type google.api.apikeys.v2.LookupKeyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_apikeys_v2_LookupKeyResponse(buffer_arg) {
  return google_api_apikeys_v2_apikeys_pb.LookupKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_apikeys_v2_UndeleteKeyRequest(arg) {
  if (!(arg instanceof google_api_apikeys_v2_apikeys_pb.UndeleteKeyRequest)) {
    throw new Error('Expected argument of type google.api.apikeys.v2.UndeleteKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_apikeys_v2_UndeleteKeyRequest(buffer_arg) {
  return google_api_apikeys_v2_apikeys_pb.UndeleteKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_apikeys_v2_UpdateKeyRequest(arg) {
  if (!(arg instanceof google_api_apikeys_v2_apikeys_pb.UpdateKeyRequest)) {
    throw new Error('Expected argument of type google.api.apikeys.v2.UpdateKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_apikeys_v2_UpdateKeyRequest(buffer_arg) {
  return google_api_apikeys_v2_apikeys_pb.UpdateKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_longrunning_Operation(arg) {
  if (!(arg instanceof google_longrunning_operations_pb.Operation)) {
    throw new Error('Expected argument of type google.longrunning.Operation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_longrunning_Operation(buffer_arg) {
  return google_longrunning_operations_pb.Operation.deserializeBinary(new Uint8Array(buffer_arg));
}


// Manages the API keys associated with projects.
var ApiKeysService = exports.ApiKeysService = {
  // Creates a new API key.
//
// NOTE: Key is a global resource; hence the only supported value for
// location is `global`.
createKey: {
    path: '/google.api.apikeys.v2.ApiKeys/CreateKey',
    requestStream: false,
    responseStream: false,
    requestType: google_api_apikeys_v2_apikeys_pb.CreateKeyRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_api_apikeys_v2_CreateKeyRequest,
    requestDeserialize: deserialize_google_api_apikeys_v2_CreateKeyRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Lists the API keys owned by a project. The key string of the API key
// isn't included in the response.
//
// NOTE: Key is a global resource; hence the only supported value for
// location is `global`.
listKeys: {
    path: '/google.api.apikeys.v2.ApiKeys/ListKeys',
    requestStream: false,
    responseStream: false,
    requestType: google_api_apikeys_v2_apikeys_pb.ListKeysRequest,
    responseType: google_api_apikeys_v2_apikeys_pb.ListKeysResponse,
    requestSerialize: serialize_google_api_apikeys_v2_ListKeysRequest,
    requestDeserialize: deserialize_google_api_apikeys_v2_ListKeysRequest,
    responseSerialize: serialize_google_api_apikeys_v2_ListKeysResponse,
    responseDeserialize: deserialize_google_api_apikeys_v2_ListKeysResponse,
  },
  // Gets the metadata for an API key. The key string of the API key
// isn't included in the response.
//
// NOTE: Key is a global resource; hence the only supported value for
// location is `global`.
getKey: {
    path: '/google.api.apikeys.v2.ApiKeys/GetKey',
    requestStream: false,
    responseStream: false,
    requestType: google_api_apikeys_v2_apikeys_pb.GetKeyRequest,
    responseType: google_api_apikeys_v2_resources_pb.Key,
    requestSerialize: serialize_google_api_apikeys_v2_GetKeyRequest,
    requestDeserialize: deserialize_google_api_apikeys_v2_GetKeyRequest,
    responseSerialize: serialize_google_api_apikeys_v2_Key,
    responseDeserialize: deserialize_google_api_apikeys_v2_Key,
  },
  // Get the key string for an API key.
//
// NOTE: Key is a global resource; hence the only supported value for
// location is `global`.
getKeyString: {
    path: '/google.api.apikeys.v2.ApiKeys/GetKeyString',
    requestStream: false,
    responseStream: false,
    requestType: google_api_apikeys_v2_apikeys_pb.GetKeyStringRequest,
    responseType: google_api_apikeys_v2_apikeys_pb.GetKeyStringResponse,
    requestSerialize: serialize_google_api_apikeys_v2_GetKeyStringRequest,
    requestDeserialize: deserialize_google_api_apikeys_v2_GetKeyStringRequest,
    responseSerialize: serialize_google_api_apikeys_v2_GetKeyStringResponse,
    responseDeserialize: deserialize_google_api_apikeys_v2_GetKeyStringResponse,
  },
  // Patches the modifiable fields of an API key.
// The key string of the API key isn't included in the response.
//
// NOTE: Key is a global resource; hence the only supported value for
// location is `global`.
updateKey: {
    path: '/google.api.apikeys.v2.ApiKeys/UpdateKey',
    requestStream: false,
    responseStream: false,
    requestType: google_api_apikeys_v2_apikeys_pb.UpdateKeyRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_api_apikeys_v2_UpdateKeyRequest,
    requestDeserialize: deserialize_google_api_apikeys_v2_UpdateKeyRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Deletes an API key. Deleted key can be retrieved within 30 days of
// deletion. Afterward, key will be purged from the project.
//
// NOTE: Key is a global resource; hence the only supported value for
// location is `global`.
deleteKey: {
    path: '/google.api.apikeys.v2.ApiKeys/DeleteKey',
    requestStream: false,
    responseStream: false,
    requestType: google_api_apikeys_v2_apikeys_pb.DeleteKeyRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_api_apikeys_v2_DeleteKeyRequest,
    requestDeserialize: deserialize_google_api_apikeys_v2_DeleteKeyRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Undeletes an API key which was deleted within 30 days.
//
// NOTE: Key is a global resource; hence the only supported value for
// location is `global`.
undeleteKey: {
    path: '/google.api.apikeys.v2.ApiKeys/UndeleteKey',
    requestStream: false,
    responseStream: false,
    requestType: google_api_apikeys_v2_apikeys_pb.UndeleteKeyRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_api_apikeys_v2_UndeleteKeyRequest,
    requestDeserialize: deserialize_google_api_apikeys_v2_UndeleteKeyRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Find the parent project and resource name of the API
// key that matches the key string in the request. If the API key has been
// purged, resource name will not be set.
// The service account must have the `apikeys.keys.lookup` permission
// on the parent project.
lookupKey: {
    path: '/google.api.apikeys.v2.ApiKeys/LookupKey',
    requestStream: false,
    responseStream: false,
    requestType: google_api_apikeys_v2_apikeys_pb.LookupKeyRequest,
    responseType: google_api_apikeys_v2_apikeys_pb.LookupKeyResponse,
    requestSerialize: serialize_google_api_apikeys_v2_LookupKeyRequest,
    requestDeserialize: deserialize_google_api_apikeys_v2_LookupKeyRequest,
    responseSerialize: serialize_google_api_apikeys_v2_LookupKeyResponse,
    responseDeserialize: deserialize_google_api_apikeys_v2_LookupKeyResponse,
  },
};

exports.ApiKeysClient = grpc.makeGenericClientConstructor(ApiKeysService, 'ApiKeys');
