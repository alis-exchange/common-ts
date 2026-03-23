// GENERATED CODE -- DO NOT EDIT!

// package: google.iam.v2
// file: google/iam/v2/policy.proto

import * as google_iam_v2_policy_pb from "../../../google/iam/v2/policy_pb";
import * as google_longrunning_operations_pb from "../../../google/longrunning/operations_pb";
import * as grpc from "grpc";

interface IPoliciesService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listPolicies: grpc.MethodDefinition<google_iam_v2_policy_pb.ListPoliciesRequest, google_iam_v2_policy_pb.ListPoliciesResponse>;
  getPolicy: grpc.MethodDefinition<google_iam_v2_policy_pb.GetPolicyRequest, google_iam_v2_policy_pb.Policy>;
  createPolicy: grpc.MethodDefinition<google_iam_v2_policy_pb.CreatePolicyRequest, google_longrunning_operations_pb.Operation>;
  updatePolicy: grpc.MethodDefinition<google_iam_v2_policy_pb.UpdatePolicyRequest, google_longrunning_operations_pb.Operation>;
  deletePolicy: grpc.MethodDefinition<google_iam_v2_policy_pb.DeletePolicyRequest, google_longrunning_operations_pb.Operation>;
}

export const PoliciesService: IPoliciesService;

export interface IPoliciesServer extends grpc.UntypedServiceImplementation {
  listPolicies: grpc.handleUnaryCall<google_iam_v2_policy_pb.ListPoliciesRequest, google_iam_v2_policy_pb.ListPoliciesResponse>;
  getPolicy: grpc.handleUnaryCall<google_iam_v2_policy_pb.GetPolicyRequest, google_iam_v2_policy_pb.Policy>;
  createPolicy: grpc.handleUnaryCall<google_iam_v2_policy_pb.CreatePolicyRequest, google_longrunning_operations_pb.Operation>;
  updatePolicy: grpc.handleUnaryCall<google_iam_v2_policy_pb.UpdatePolicyRequest, google_longrunning_operations_pb.Operation>;
  deletePolicy: grpc.handleUnaryCall<google_iam_v2_policy_pb.DeletePolicyRequest, google_longrunning_operations_pb.Operation>;
}

export class PoliciesClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listPolicies(argument: google_iam_v2_policy_pb.ListPoliciesRequest, callback: grpc.requestCallback<google_iam_v2_policy_pb.ListPoliciesResponse>): grpc.ClientUnaryCall;
  listPolicies(argument: google_iam_v2_policy_pb.ListPoliciesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v2_policy_pb.ListPoliciesResponse>): grpc.ClientUnaryCall;
  listPolicies(argument: google_iam_v2_policy_pb.ListPoliciesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v2_policy_pb.ListPoliciesResponse>): grpc.ClientUnaryCall;
  getPolicy(argument: google_iam_v2_policy_pb.GetPolicyRequest, callback: grpc.requestCallback<google_iam_v2_policy_pb.Policy>): grpc.ClientUnaryCall;
  getPolicy(argument: google_iam_v2_policy_pb.GetPolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v2_policy_pb.Policy>): grpc.ClientUnaryCall;
  getPolicy(argument: google_iam_v2_policy_pb.GetPolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v2_policy_pb.Policy>): grpc.ClientUnaryCall;
  createPolicy(argument: google_iam_v2_policy_pb.CreatePolicyRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createPolicy(argument: google_iam_v2_policy_pb.CreatePolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createPolicy(argument: google_iam_v2_policy_pb.CreatePolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updatePolicy(argument: google_iam_v2_policy_pb.UpdatePolicyRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updatePolicy(argument: google_iam_v2_policy_pb.UpdatePolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updatePolicy(argument: google_iam_v2_policy_pb.UpdatePolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deletePolicy(argument: google_iam_v2_policy_pb.DeletePolicyRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deletePolicy(argument: google_iam_v2_policy_pb.DeletePolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deletePolicy(argument: google_iam_v2_policy_pb.DeletePolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
}
