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
var google_iam_admin_v1_iam_pb = require('../../../../google/iam/admin/v1/iam_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../google/api/resource_pb.js');
var google_iam_v1_iam_policy_pb = require('../../../../google/iam/v1/iam_policy_pb.js');
var google_iam_v1_policy_pb = require('../../../../google/iam/v1/policy_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_type_expr_pb = require('../../../../google/type/expr_pb.js');

function serialize_google_iam_admin_v1_CreateRoleRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.CreateRoleRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.CreateRoleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_CreateRoleRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.CreateRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_CreateServiceAccountKeyRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.CreateServiceAccountKeyRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.CreateServiceAccountKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_CreateServiceAccountKeyRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.CreateServiceAccountKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_CreateServiceAccountRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.CreateServiceAccountRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.CreateServiceAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_CreateServiceAccountRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.CreateServiceAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_DeleteRoleRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.DeleteRoleRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.DeleteRoleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_DeleteRoleRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.DeleteRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_DeleteServiceAccountKeyRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.DeleteServiceAccountKeyRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.DeleteServiceAccountKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_DeleteServiceAccountKeyRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.DeleteServiceAccountKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_DeleteServiceAccountRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.DeleteServiceAccountRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.DeleteServiceAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_DeleteServiceAccountRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.DeleteServiceAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_DisableServiceAccountKeyRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.DisableServiceAccountKeyRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.DisableServiceAccountKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_DisableServiceAccountKeyRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.DisableServiceAccountKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_DisableServiceAccountRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.DisableServiceAccountRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.DisableServiceAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_DisableServiceAccountRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.DisableServiceAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_EnableServiceAccountKeyRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.EnableServiceAccountKeyRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.EnableServiceAccountKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_EnableServiceAccountKeyRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.EnableServiceAccountKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_EnableServiceAccountRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.EnableServiceAccountRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.EnableServiceAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_EnableServiceAccountRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.EnableServiceAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_GetRoleRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.GetRoleRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.GetRoleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_GetRoleRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.GetRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_GetServiceAccountKeyRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.GetServiceAccountKeyRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.GetServiceAccountKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_GetServiceAccountKeyRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.GetServiceAccountKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_GetServiceAccountRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.GetServiceAccountRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.GetServiceAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_GetServiceAccountRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.GetServiceAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_LintPolicyRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.LintPolicyRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.LintPolicyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_LintPolicyRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.LintPolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_LintPolicyResponse(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.LintPolicyResponse)) {
    throw new Error('Expected argument of type google.iam.admin.v1.LintPolicyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_LintPolicyResponse(buffer_arg) {
  return google_iam_admin_v1_iam_pb.LintPolicyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_ListRolesRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.ListRolesRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.ListRolesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_ListRolesRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.ListRolesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_ListRolesResponse(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.ListRolesResponse)) {
    throw new Error('Expected argument of type google.iam.admin.v1.ListRolesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_ListRolesResponse(buffer_arg) {
  return google_iam_admin_v1_iam_pb.ListRolesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_ListServiceAccountKeysRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.ListServiceAccountKeysRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.ListServiceAccountKeysRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_ListServiceAccountKeysRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.ListServiceAccountKeysRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_ListServiceAccountKeysResponse(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.ListServiceAccountKeysResponse)) {
    throw new Error('Expected argument of type google.iam.admin.v1.ListServiceAccountKeysResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_ListServiceAccountKeysResponse(buffer_arg) {
  return google_iam_admin_v1_iam_pb.ListServiceAccountKeysResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_ListServiceAccountsRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.ListServiceAccountsRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.ListServiceAccountsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_ListServiceAccountsRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.ListServiceAccountsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_ListServiceAccountsResponse(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.ListServiceAccountsResponse)) {
    throw new Error('Expected argument of type google.iam.admin.v1.ListServiceAccountsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_ListServiceAccountsResponse(buffer_arg) {
  return google_iam_admin_v1_iam_pb.ListServiceAccountsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_PatchServiceAccountRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.PatchServiceAccountRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.PatchServiceAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_PatchServiceAccountRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.PatchServiceAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_QueryAuditableServicesRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.QueryAuditableServicesRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.QueryAuditableServicesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_QueryAuditableServicesRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.QueryAuditableServicesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_QueryAuditableServicesResponse(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.QueryAuditableServicesResponse)) {
    throw new Error('Expected argument of type google.iam.admin.v1.QueryAuditableServicesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_QueryAuditableServicesResponse(buffer_arg) {
  return google_iam_admin_v1_iam_pb.QueryAuditableServicesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_QueryGrantableRolesRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.QueryGrantableRolesRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.QueryGrantableRolesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_QueryGrantableRolesRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.QueryGrantableRolesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_QueryGrantableRolesResponse(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.QueryGrantableRolesResponse)) {
    throw new Error('Expected argument of type google.iam.admin.v1.QueryGrantableRolesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_QueryGrantableRolesResponse(buffer_arg) {
  return google_iam_admin_v1_iam_pb.QueryGrantableRolesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_QueryTestablePermissionsRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.QueryTestablePermissionsRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.QueryTestablePermissionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_QueryTestablePermissionsRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.QueryTestablePermissionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_QueryTestablePermissionsResponse(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.QueryTestablePermissionsResponse)) {
    throw new Error('Expected argument of type google.iam.admin.v1.QueryTestablePermissionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_QueryTestablePermissionsResponse(buffer_arg) {
  return google_iam_admin_v1_iam_pb.QueryTestablePermissionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_Role(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.Role)) {
    throw new Error('Expected argument of type google.iam.admin.v1.Role');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_Role(buffer_arg) {
  return google_iam_admin_v1_iam_pb.Role.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_ServiceAccount(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.ServiceAccount)) {
    throw new Error('Expected argument of type google.iam.admin.v1.ServiceAccount');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_ServiceAccount(buffer_arg) {
  return google_iam_admin_v1_iam_pb.ServiceAccount.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_ServiceAccountKey(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.ServiceAccountKey)) {
    throw new Error('Expected argument of type google.iam.admin.v1.ServiceAccountKey');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_ServiceAccountKey(buffer_arg) {
  return google_iam_admin_v1_iam_pb.ServiceAccountKey.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_SignBlobRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.SignBlobRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.SignBlobRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_SignBlobRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.SignBlobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_SignBlobResponse(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.SignBlobResponse)) {
    throw new Error('Expected argument of type google.iam.admin.v1.SignBlobResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_SignBlobResponse(buffer_arg) {
  return google_iam_admin_v1_iam_pb.SignBlobResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_SignJwtRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.SignJwtRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.SignJwtRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_SignJwtRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.SignJwtRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_SignJwtResponse(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.SignJwtResponse)) {
    throw new Error('Expected argument of type google.iam.admin.v1.SignJwtResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_SignJwtResponse(buffer_arg) {
  return google_iam_admin_v1_iam_pb.SignJwtResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_UndeleteRoleRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.UndeleteRoleRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.UndeleteRoleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_UndeleteRoleRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.UndeleteRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_UndeleteServiceAccountRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.UndeleteServiceAccountRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.UndeleteServiceAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_UndeleteServiceAccountRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.UndeleteServiceAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_UndeleteServiceAccountResponse(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.UndeleteServiceAccountResponse)) {
    throw new Error('Expected argument of type google.iam.admin.v1.UndeleteServiceAccountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_UndeleteServiceAccountResponse(buffer_arg) {
  return google_iam_admin_v1_iam_pb.UndeleteServiceAccountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_UpdateRoleRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.UpdateRoleRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.UpdateRoleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_UpdateRoleRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.UpdateRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_admin_v1_UploadServiceAccountKeyRequest(arg) {
  if (!(arg instanceof google_iam_admin_v1_iam_pb.UploadServiceAccountKeyRequest)) {
    throw new Error('Expected argument of type google.iam.admin.v1.UploadServiceAccountKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_admin_v1_UploadServiceAccountKeyRequest(buffer_arg) {
  return google_iam_admin_v1_iam_pb.UploadServiceAccountKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1_GetIamPolicyRequest(arg) {
  if (!(arg instanceof google_iam_v1_iam_policy_pb.GetIamPolicyRequest)) {
    throw new Error('Expected argument of type google.iam.v1.GetIamPolicyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_v1_GetIamPolicyRequest(buffer_arg) {
  return google_iam_v1_iam_policy_pb.GetIamPolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1_Policy(arg) {
  if (!(arg instanceof google_iam_v1_policy_pb.Policy)) {
    throw new Error('Expected argument of type google.iam.v1.Policy');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_v1_Policy(buffer_arg) {
  return google_iam_v1_policy_pb.Policy.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1_SetIamPolicyRequest(arg) {
  if (!(arg instanceof google_iam_v1_iam_policy_pb.SetIamPolicyRequest)) {
    throw new Error('Expected argument of type google.iam.v1.SetIamPolicyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_v1_SetIamPolicyRequest(buffer_arg) {
  return google_iam_v1_iam_policy_pb.SetIamPolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1_TestIamPermissionsRequest(arg) {
  if (!(arg instanceof google_iam_v1_iam_policy_pb.TestIamPermissionsRequest)) {
    throw new Error('Expected argument of type google.iam.v1.TestIamPermissionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_v1_TestIamPermissionsRequest(buffer_arg) {
  return google_iam_v1_iam_policy_pb.TestIamPermissionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1_TestIamPermissionsResponse(arg) {
  if (!(arg instanceof google_iam_v1_iam_policy_pb.TestIamPermissionsResponse)) {
    throw new Error('Expected argument of type google.iam.v1.TestIamPermissionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_v1_TestIamPermissionsResponse(buffer_arg) {
  return google_iam_v1_iam_policy_pb.TestIamPermissionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


// Creates and manages Identity and Access Management (IAM) resources.
//
// You can use this service to work with all of the following resources:
//
// * **Service accounts**, which identify an application or a virtual machine
//   (VM) instance rather than a person
// * **Service account keys**, which service accounts use to authenticate with
//   Google APIs
// * **IAM policies for service accounts**, which specify the roles that a
//   principal has for the service account
// * **IAM custom roles**, which help you limit the number of permissions that
//   you grant to principals
//
// In addition, you can use this service to complete the following tasks, among
// others:
//
// * Test whether a service account can use specific permissions
// * Check which roles you can grant for a specific resource
// * Lint, or validate, condition expressions in an IAM policy
//
// When you read data from the IAM API, each read is eventually consistent. In
// other words, if you write data with the IAM API, then immediately read that
// data, the read operation might return an older version of the data. To deal
// with this behavior, your application can retry the request with truncated
// exponential backoff.
//
// In contrast, writing data to the IAM API is sequentially consistent. In other
// words, write operations are always processed in the order in which they were
// received.
var IAMService = exports.IAMService = {
  // Lists every [ServiceAccount][google.iam.admin.v1.ServiceAccount] that belongs to a specific project.
listServiceAccounts: {
    path: '/google.iam.admin.v1.IAM/ListServiceAccounts',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.ListServiceAccountsRequest,
    responseType: google_iam_admin_v1_iam_pb.ListServiceAccountsResponse,
    requestSerialize: serialize_google_iam_admin_v1_ListServiceAccountsRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_ListServiceAccountsRequest,
    responseSerialize: serialize_google_iam_admin_v1_ListServiceAccountsResponse,
    responseDeserialize: deserialize_google_iam_admin_v1_ListServiceAccountsResponse,
  },
  // Gets a [ServiceAccount][google.iam.admin.v1.ServiceAccount].
getServiceAccount: {
    path: '/google.iam.admin.v1.IAM/GetServiceAccount',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.GetServiceAccountRequest,
    responseType: google_iam_admin_v1_iam_pb.ServiceAccount,
    requestSerialize: serialize_google_iam_admin_v1_GetServiceAccountRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_GetServiceAccountRequest,
    responseSerialize: serialize_google_iam_admin_v1_ServiceAccount,
    responseDeserialize: deserialize_google_iam_admin_v1_ServiceAccount,
  },
  // Creates a [ServiceAccount][google.iam.admin.v1.ServiceAccount].
createServiceAccount: {
    path: '/google.iam.admin.v1.IAM/CreateServiceAccount',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.CreateServiceAccountRequest,
    responseType: google_iam_admin_v1_iam_pb.ServiceAccount,
    requestSerialize: serialize_google_iam_admin_v1_CreateServiceAccountRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_CreateServiceAccountRequest,
    responseSerialize: serialize_google_iam_admin_v1_ServiceAccount,
    responseDeserialize: deserialize_google_iam_admin_v1_ServiceAccount,
  },
  // **Note:** We are in the process of deprecating this method. Use
// [PatchServiceAccount][google.iam.admin.v1.IAM.PatchServiceAccount] instead.
//
// Updates a [ServiceAccount][google.iam.admin.v1.ServiceAccount].
//
// You can update only the `display_name` field.
updateServiceAccount: {
    path: '/google.iam.admin.v1.IAM/UpdateServiceAccount',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.ServiceAccount,
    responseType: google_iam_admin_v1_iam_pb.ServiceAccount,
    requestSerialize: serialize_google_iam_admin_v1_ServiceAccount,
    requestDeserialize: deserialize_google_iam_admin_v1_ServiceAccount,
    responseSerialize: serialize_google_iam_admin_v1_ServiceAccount,
    responseDeserialize: deserialize_google_iam_admin_v1_ServiceAccount,
  },
  // Patches a [ServiceAccount][google.iam.admin.v1.ServiceAccount].
patchServiceAccount: {
    path: '/google.iam.admin.v1.IAM/PatchServiceAccount',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.PatchServiceAccountRequest,
    responseType: google_iam_admin_v1_iam_pb.ServiceAccount,
    requestSerialize: serialize_google_iam_admin_v1_PatchServiceAccountRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_PatchServiceAccountRequest,
    responseSerialize: serialize_google_iam_admin_v1_ServiceAccount,
    responseDeserialize: deserialize_google_iam_admin_v1_ServiceAccount,
  },
  // Deletes a [ServiceAccount][google.iam.admin.v1.ServiceAccount].
//
// **Warning:** After you delete a service account, you might not be able to
// undelete it. If you know that you need to re-enable the service account in
// the future, use [DisableServiceAccount][google.iam.admin.v1.IAM.DisableServiceAccount] instead.
//
// If you delete a service account, IAM permanently removes the service
// account 30 days later. Google Cloud cannot recover the service account
// after it is permanently removed, even if you file a support request.
//
// To help avoid unplanned outages, we recommend that you disable the service
// account before you delete it. Use [DisableServiceAccount][google.iam.admin.v1.IAM.DisableServiceAccount] to disable the
// service account, then wait at least 24 hours and watch for unintended
// consequences. If there are no unintended consequences, you can delete the
// service account.
deleteServiceAccount: {
    path: '/google.iam.admin.v1.IAM/DeleteServiceAccount',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.DeleteServiceAccountRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_iam_admin_v1_DeleteServiceAccountRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_DeleteServiceAccountRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Restores a deleted [ServiceAccount][google.iam.admin.v1.ServiceAccount].
//
// **Important:** It is not always possible to restore a deleted service
// account. Use this method only as a last resort.
//
// After you delete a service account, IAM permanently removes the service
// account 30 days later. There is no way to restore a deleted service account
// that has been permanently removed.
undeleteServiceAccount: {
    path: '/google.iam.admin.v1.IAM/UndeleteServiceAccount',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.UndeleteServiceAccountRequest,
    responseType: google_iam_admin_v1_iam_pb.UndeleteServiceAccountResponse,
    requestSerialize: serialize_google_iam_admin_v1_UndeleteServiceAccountRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_UndeleteServiceAccountRequest,
    responseSerialize: serialize_google_iam_admin_v1_UndeleteServiceAccountResponse,
    responseDeserialize: deserialize_google_iam_admin_v1_UndeleteServiceAccountResponse,
  },
  // Enables a [ServiceAccount][google.iam.admin.v1.ServiceAccount] that was disabled by
// [DisableServiceAccount][google.iam.admin.v1.IAM.DisableServiceAccount].
//
// If the service account is already enabled, then this method has no effect.
//
// If the service account was disabled by other means—for example, if Google
// disabled the service account because it was compromised—you cannot use this
// method to enable the service account.
enableServiceAccount: {
    path: '/google.iam.admin.v1.IAM/EnableServiceAccount',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.EnableServiceAccountRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_iam_admin_v1_EnableServiceAccountRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_EnableServiceAccountRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Disables a [ServiceAccount][google.iam.admin.v1.ServiceAccount] immediately.
//
// If an application uses the service account to authenticate, that
// application can no longer call Google APIs or access Google Cloud
// resources. Existing access tokens for the service account are rejected, and
// requests for new access tokens will fail.
//
// To re-enable the service account, use [EnableServiceAccount][google.iam.admin.v1.IAM.EnableServiceAccount]. After you
// re-enable the service account, its existing access tokens will be accepted,
// and you can request new access tokens.
//
// To help avoid unplanned outages, we recommend that you disable the service
// account before you delete it. Use this method to disable the service
// account, then wait at least 24 hours and watch for unintended consequences.
// If there are no unintended consequences, you can delete the service account
// with [DeleteServiceAccount][google.iam.admin.v1.IAM.DeleteServiceAccount].
disableServiceAccount: {
    path: '/google.iam.admin.v1.IAM/DisableServiceAccount',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.DisableServiceAccountRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_iam_admin_v1_DisableServiceAccountRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_DisableServiceAccountRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Lists every [ServiceAccountKey][google.iam.admin.v1.ServiceAccountKey] for a service account.
listServiceAccountKeys: {
    path: '/google.iam.admin.v1.IAM/ListServiceAccountKeys',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.ListServiceAccountKeysRequest,
    responseType: google_iam_admin_v1_iam_pb.ListServiceAccountKeysResponse,
    requestSerialize: serialize_google_iam_admin_v1_ListServiceAccountKeysRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_ListServiceAccountKeysRequest,
    responseSerialize: serialize_google_iam_admin_v1_ListServiceAccountKeysResponse,
    responseDeserialize: deserialize_google_iam_admin_v1_ListServiceAccountKeysResponse,
  },
  // Gets a [ServiceAccountKey][google.iam.admin.v1.ServiceAccountKey].
getServiceAccountKey: {
    path: '/google.iam.admin.v1.IAM/GetServiceAccountKey',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.GetServiceAccountKeyRequest,
    responseType: google_iam_admin_v1_iam_pb.ServiceAccountKey,
    requestSerialize: serialize_google_iam_admin_v1_GetServiceAccountKeyRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_GetServiceAccountKeyRequest,
    responseSerialize: serialize_google_iam_admin_v1_ServiceAccountKey,
    responseDeserialize: deserialize_google_iam_admin_v1_ServiceAccountKey,
  },
  // Creates a [ServiceAccountKey][google.iam.admin.v1.ServiceAccountKey].
createServiceAccountKey: {
    path: '/google.iam.admin.v1.IAM/CreateServiceAccountKey',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.CreateServiceAccountKeyRequest,
    responseType: google_iam_admin_v1_iam_pb.ServiceAccountKey,
    requestSerialize: serialize_google_iam_admin_v1_CreateServiceAccountKeyRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_CreateServiceAccountKeyRequest,
    responseSerialize: serialize_google_iam_admin_v1_ServiceAccountKey,
    responseDeserialize: deserialize_google_iam_admin_v1_ServiceAccountKey,
  },
  // Uploads the public key portion of a key pair that you manage, and
// associates the public key with a [ServiceAccount][google.iam.admin.v1.ServiceAccount].
//
// After you upload the public key, you can use the private key from the key
// pair as a service account key.
uploadServiceAccountKey: {
    path: '/google.iam.admin.v1.IAM/UploadServiceAccountKey',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.UploadServiceAccountKeyRequest,
    responseType: google_iam_admin_v1_iam_pb.ServiceAccountKey,
    requestSerialize: serialize_google_iam_admin_v1_UploadServiceAccountKeyRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_UploadServiceAccountKeyRequest,
    responseSerialize: serialize_google_iam_admin_v1_ServiceAccountKey,
    responseDeserialize: deserialize_google_iam_admin_v1_ServiceAccountKey,
  },
  // Deletes a [ServiceAccountKey][google.iam.admin.v1.ServiceAccountKey]. Deleting a service account key does not
// revoke short-lived credentials that have been issued based on the service
// account key.
deleteServiceAccountKey: {
    path: '/google.iam.admin.v1.IAM/DeleteServiceAccountKey',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.DeleteServiceAccountKeyRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_iam_admin_v1_DeleteServiceAccountKeyRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_DeleteServiceAccountKeyRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Disable a [ServiceAccountKey][google.iam.admin.v1.ServiceAccountKey]. A disabled service account key can be
// re-enabled with [EnableServiceAccountKey][google.iam.admin.v1.IAM.EnableServiceAccountKey].
disableServiceAccountKey: {
    path: '/google.iam.admin.v1.IAM/DisableServiceAccountKey',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.DisableServiceAccountKeyRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_iam_admin_v1_DisableServiceAccountKeyRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_DisableServiceAccountKeyRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Enable a [ServiceAccountKey][google.iam.admin.v1.ServiceAccountKey].
enableServiceAccountKey: {
    path: '/google.iam.admin.v1.IAM/EnableServiceAccountKey',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.EnableServiceAccountKeyRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_iam_admin_v1_EnableServiceAccountKeyRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_EnableServiceAccountKeyRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // **Note:** This method is deprecated. Use the
// [`signBlob`](https://cloud.google.com/iam/help/rest-credentials/v1/projects.serviceAccounts/signBlob)
// method in the IAM Service Account Credentials API instead. If you currently
// use this method, see the [migration
// guide](https://cloud.google.com/iam/help/credentials/migrate-api) for
// instructions.
//
// Signs a blob using the system-managed private key for a [ServiceAccount][google.iam.admin.v1.ServiceAccount].
signBlob: {
    path: '/google.iam.admin.v1.IAM/SignBlob',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.SignBlobRequest,
    responseType: google_iam_admin_v1_iam_pb.SignBlobResponse,
    requestSerialize: serialize_google_iam_admin_v1_SignBlobRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_SignBlobRequest,
    responseSerialize: serialize_google_iam_admin_v1_SignBlobResponse,
    responseDeserialize: deserialize_google_iam_admin_v1_SignBlobResponse,
  },
  // **Note:** This method is deprecated. Use the
// [`signJwt`](https://cloud.google.com/iam/help/rest-credentials/v1/projects.serviceAccounts/signJwt)
// method in the IAM Service Account Credentials API instead. If you currently
// use this method, see the [migration
// guide](https://cloud.google.com/iam/help/credentials/migrate-api) for
// instructions.
//
// Signs a JSON Web Token (JWT) using the system-managed private key for a
// [ServiceAccount][google.iam.admin.v1.ServiceAccount].
signJwt: {
    path: '/google.iam.admin.v1.IAM/SignJwt',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.SignJwtRequest,
    responseType: google_iam_admin_v1_iam_pb.SignJwtResponse,
    requestSerialize: serialize_google_iam_admin_v1_SignJwtRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_SignJwtRequest,
    responseSerialize: serialize_google_iam_admin_v1_SignJwtResponse,
    responseDeserialize: deserialize_google_iam_admin_v1_SignJwtResponse,
  },
  // Gets the IAM policy that is attached to a [ServiceAccount][google.iam.admin.v1.ServiceAccount]. This IAM
// policy specifies which principals have access to the service account.
//
// This method does not tell you whether the service account has been granted
// any roles on other resources. To check whether a service account has role
// grants on a resource, use the `getIamPolicy` method for that resource. For
// example, to view the role grants for a project, call the Resource Manager
// API's
// [`projects.getIamPolicy`](https://cloud.google.com/resource-manager/reference/rest/v1/projects/getIamPolicy)
// method.
getIamPolicy: {
    path: '/google.iam.admin.v1.IAM/GetIamPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_google_iam_v1_GetIamPolicyRequest,
    requestDeserialize: deserialize_google_iam_v1_GetIamPolicyRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Sets the IAM policy that is attached to a [ServiceAccount][google.iam.admin.v1.ServiceAccount].
//
// Use this method to grant or revoke access to the service account. For
// example, you could grant a principal the ability to impersonate the service
// account.
//
// This method does not enable the service account to access other resources.
// To grant roles to a service account on a resource, follow these steps:
//
// 1. Call the resource's `getIamPolicy` method to get its current IAM policy.
// 2. Edit the policy so that it binds the service account to an IAM role for
// the resource.
// 3. Call the resource's `setIamPolicy` method to update its IAM policy.
//
// For detailed instructions, see
// [Manage access to project, folders, and
// organizations](https://cloud.google.com/iam/help/service-accounts/granting-access-to-service-accounts)
// or [Manage access to other
// resources](https://cloud.google.com/iam/help/access/manage-other-resources).
setIamPolicy: {
    path: '/google.iam.admin.v1.IAM/SetIamPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_google_iam_v1_SetIamPolicyRequest,
    requestDeserialize: deserialize_google_iam_v1_SetIamPolicyRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Tests whether the caller has the specified permissions on a
// [ServiceAccount][google.iam.admin.v1.ServiceAccount].
testIamPermissions: {
    path: '/google.iam.admin.v1.IAM/TestIamPermissions',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest,
    responseType: google_iam_v1_iam_policy_pb.TestIamPermissionsResponse,
    requestSerialize: serialize_google_iam_v1_TestIamPermissionsRequest,
    requestDeserialize: deserialize_google_iam_v1_TestIamPermissionsRequest,
    responseSerialize: serialize_google_iam_v1_TestIamPermissionsResponse,
    responseDeserialize: deserialize_google_iam_v1_TestIamPermissionsResponse,
  },
  // Lists roles that can be granted on a Google Cloud resource. A role is
// grantable if the IAM policy for the resource can contain bindings to the
// role.
queryGrantableRoles: {
    path: '/google.iam.admin.v1.IAM/QueryGrantableRoles',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.QueryGrantableRolesRequest,
    responseType: google_iam_admin_v1_iam_pb.QueryGrantableRolesResponse,
    requestSerialize: serialize_google_iam_admin_v1_QueryGrantableRolesRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_QueryGrantableRolesRequest,
    responseSerialize: serialize_google_iam_admin_v1_QueryGrantableRolesResponse,
    responseDeserialize: deserialize_google_iam_admin_v1_QueryGrantableRolesResponse,
  },
  // Lists every predefined [Role][google.iam.admin.v1.Role] that IAM supports, or every custom role
// that is defined for an organization or project.
listRoles: {
    path: '/google.iam.admin.v1.IAM/ListRoles',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.ListRolesRequest,
    responseType: google_iam_admin_v1_iam_pb.ListRolesResponse,
    requestSerialize: serialize_google_iam_admin_v1_ListRolesRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_ListRolesRequest,
    responseSerialize: serialize_google_iam_admin_v1_ListRolesResponse,
    responseDeserialize: deserialize_google_iam_admin_v1_ListRolesResponse,
  },
  // Gets the definition of a [Role][google.iam.admin.v1.Role].
getRole: {
    path: '/google.iam.admin.v1.IAM/GetRole',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.GetRoleRequest,
    responseType: google_iam_admin_v1_iam_pb.Role,
    requestSerialize: serialize_google_iam_admin_v1_GetRoleRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_GetRoleRequest,
    responseSerialize: serialize_google_iam_admin_v1_Role,
    responseDeserialize: deserialize_google_iam_admin_v1_Role,
  },
  // Creates a new custom [Role][google.iam.admin.v1.Role].
createRole: {
    path: '/google.iam.admin.v1.IAM/CreateRole',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.CreateRoleRequest,
    responseType: google_iam_admin_v1_iam_pb.Role,
    requestSerialize: serialize_google_iam_admin_v1_CreateRoleRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_CreateRoleRequest,
    responseSerialize: serialize_google_iam_admin_v1_Role,
    responseDeserialize: deserialize_google_iam_admin_v1_Role,
  },
  // Updates the definition of a custom [Role][google.iam.admin.v1.Role].
updateRole: {
    path: '/google.iam.admin.v1.IAM/UpdateRole',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.UpdateRoleRequest,
    responseType: google_iam_admin_v1_iam_pb.Role,
    requestSerialize: serialize_google_iam_admin_v1_UpdateRoleRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_UpdateRoleRequest,
    responseSerialize: serialize_google_iam_admin_v1_Role,
    responseDeserialize: deserialize_google_iam_admin_v1_Role,
  },
  // Deletes a custom [Role][google.iam.admin.v1.Role].
//
// When you delete a custom role, the following changes occur immediately:
//
// * You cannot bind a principal to the custom role in an IAM
// [Policy][google.iam.v1.Policy].
// * Existing bindings to the custom role are not changed, but they have no
// effect.
// * By default, the response from [ListRoles][google.iam.admin.v1.IAM.ListRoles] does not include the custom
// role.
//
// You have 7 days to undelete the custom role. After 7 days, the following
// changes occur:
//
// * The custom role is permanently deleted and cannot be recovered.
// * If an IAM policy contains a binding to the custom role, the binding is
// permanently removed.
deleteRole: {
    path: '/google.iam.admin.v1.IAM/DeleteRole',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.DeleteRoleRequest,
    responseType: google_iam_admin_v1_iam_pb.Role,
    requestSerialize: serialize_google_iam_admin_v1_DeleteRoleRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_DeleteRoleRequest,
    responseSerialize: serialize_google_iam_admin_v1_Role,
    responseDeserialize: deserialize_google_iam_admin_v1_Role,
  },
  // Undeletes a custom [Role][google.iam.admin.v1.Role].
undeleteRole: {
    path: '/google.iam.admin.v1.IAM/UndeleteRole',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.UndeleteRoleRequest,
    responseType: google_iam_admin_v1_iam_pb.Role,
    requestSerialize: serialize_google_iam_admin_v1_UndeleteRoleRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_UndeleteRoleRequest,
    responseSerialize: serialize_google_iam_admin_v1_Role,
    responseDeserialize: deserialize_google_iam_admin_v1_Role,
  },
  // Lists every permission that you can test on a resource. A permission is
// testable if you can check whether a principal has that permission on the
// resource.
queryTestablePermissions: {
    path: '/google.iam.admin.v1.IAM/QueryTestablePermissions',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.QueryTestablePermissionsRequest,
    responseType: google_iam_admin_v1_iam_pb.QueryTestablePermissionsResponse,
    requestSerialize: serialize_google_iam_admin_v1_QueryTestablePermissionsRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_QueryTestablePermissionsRequest,
    responseSerialize: serialize_google_iam_admin_v1_QueryTestablePermissionsResponse,
    responseDeserialize: deserialize_google_iam_admin_v1_QueryTestablePermissionsResponse,
  },
  // Returns a list of services that allow you to opt into audit logs that are
// not generated by default.
//
// To learn more about audit logs, see the [Logging
// documentation](https://cloud.google.com/logging/docs/audit).
queryAuditableServices: {
    path: '/google.iam.admin.v1.IAM/QueryAuditableServices',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.QueryAuditableServicesRequest,
    responseType: google_iam_admin_v1_iam_pb.QueryAuditableServicesResponse,
    requestSerialize: serialize_google_iam_admin_v1_QueryAuditableServicesRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_QueryAuditableServicesRequest,
    responseSerialize: serialize_google_iam_admin_v1_QueryAuditableServicesResponse,
    responseDeserialize: deserialize_google_iam_admin_v1_QueryAuditableServicesResponse,
  },
  // Lints, or validates, an IAM policy. Currently checks the
// [google.iam.v1.Binding.condition][google.iam.v1.Binding.condition] field, which contains a condition
// expression for a role binding.
//
// Successful calls to this method always return an HTTP `200 OK` status code,
// even if the linter detects an issue in the IAM policy.
lintPolicy: {
    path: '/google.iam.admin.v1.IAM/LintPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_admin_v1_iam_pb.LintPolicyRequest,
    responseType: google_iam_admin_v1_iam_pb.LintPolicyResponse,
    requestSerialize: serialize_google_iam_admin_v1_LintPolicyRequest,
    requestDeserialize: deserialize_google_iam_admin_v1_LintPolicyRequest,
    responseSerialize: serialize_google_iam_admin_v1_LintPolicyResponse,
    responseDeserialize: deserialize_google_iam_admin_v1_LintPolicyResponse,
  },
};

exports.IAMClient = grpc.makeGenericClientConstructor(IAMService, 'IAM');
