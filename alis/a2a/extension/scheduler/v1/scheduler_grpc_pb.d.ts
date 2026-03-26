// GENERATED CODE -- DO NOT EDIT!

// package: alis.a2a.extension.scheduler.v1
// file: alis/a2a/extension/scheduler/v1/scheduler.proto

import * as alis_a2a_extension_scheduler_v1_scheduler_pb from "../../../../../alis/a2a/extension/scheduler/v1/scheduler_pb";
import * as google_iam_v1_policy_pb from "../../../../../google/iam/v1/policy_pb";
import * as google_iam_v1_iam_policy_pb from "../../../../../google/iam/v1/iam_policy_pb";
import * as alis_open_iam_v1_iam_pb from "../../../../../alis/open/iam/v1/iam_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface ISchedulerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.GetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  setIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.SetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  addIamBindings: grpc.MethodDefinition<alis_open_iam_v1_iam_pb.AddIamBindingsRequest, google_iam_v1_policy_pb.Policy>;
  removeIamBindings: grpc.MethodDefinition<alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest, google_iam_v1_policy_pb.Policy>;
  createCron: grpc.MethodDefinition<alis_a2a_extension_scheduler_v1_scheduler_pb.CreateCronRequest, alis_a2a_extension_scheduler_v1_scheduler_pb.Cron>;
  listCrons: grpc.MethodDefinition<alis_a2a_extension_scheduler_v1_scheduler_pb.ListCronsRequest, alis_a2a_extension_scheduler_v1_scheduler_pb.ListCronsResponse>;
  getCron: grpc.MethodDefinition<alis_a2a_extension_scheduler_v1_scheduler_pb.GetCronRequest, alis_a2a_extension_scheduler_v1_scheduler_pb.Cron>;
  updateCron: grpc.MethodDefinition<alis_a2a_extension_scheduler_v1_scheduler_pb.UpdateCronRequest, alis_a2a_extension_scheduler_v1_scheduler_pb.Cron>;
  deleteCron: grpc.MethodDefinition<alis_a2a_extension_scheduler_v1_scheduler_pb.DeleteCronRequest, google_protobuf_empty_pb.Empty>;
  runCron: grpc.MethodDefinition<alis_a2a_extension_scheduler_v1_scheduler_pb.RunCronRequest, alis_a2a_extension_scheduler_v1_scheduler_pb.RunCronResponse>;
}

export const SchedulerServiceService: ISchedulerServiceService;

export interface ISchedulerServiceServer extends grpc.UntypedServiceImplementation {
  getIamPolicy: grpc.handleUnaryCall<google_iam_v1_iam_policy_pb.GetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  setIamPolicy: grpc.handleUnaryCall<google_iam_v1_iam_policy_pb.SetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  addIamBindings: grpc.handleUnaryCall<alis_open_iam_v1_iam_pb.AddIamBindingsRequest, google_iam_v1_policy_pb.Policy>;
  removeIamBindings: grpc.handleUnaryCall<alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest, google_iam_v1_policy_pb.Policy>;
  createCron: grpc.handleUnaryCall<alis_a2a_extension_scheduler_v1_scheduler_pb.CreateCronRequest, alis_a2a_extension_scheduler_v1_scheduler_pb.Cron>;
  listCrons: grpc.handleUnaryCall<alis_a2a_extension_scheduler_v1_scheduler_pb.ListCronsRequest, alis_a2a_extension_scheduler_v1_scheduler_pb.ListCronsResponse>;
  getCron: grpc.handleUnaryCall<alis_a2a_extension_scheduler_v1_scheduler_pb.GetCronRequest, alis_a2a_extension_scheduler_v1_scheduler_pb.Cron>;
  updateCron: grpc.handleUnaryCall<alis_a2a_extension_scheduler_v1_scheduler_pb.UpdateCronRequest, alis_a2a_extension_scheduler_v1_scheduler_pb.Cron>;
  deleteCron: grpc.handleUnaryCall<alis_a2a_extension_scheduler_v1_scheduler_pb.DeleteCronRequest, google_protobuf_empty_pb.Empty>;
  runCron: grpc.handleUnaryCall<alis_a2a_extension_scheduler_v1_scheduler_pb.RunCronRequest, alis_a2a_extension_scheduler_v1_scheduler_pb.RunCronResponse>;
}

export class SchedulerServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getIamPolicy(argument: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  getIamPolicy(argument: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  getIamPolicy(argument: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  setIamPolicy(argument: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  setIamPolicy(argument: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  setIamPolicy(argument: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  addIamBindings(argument: alis_open_iam_v1_iam_pb.AddIamBindingsRequest, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  addIamBindings(argument: alis_open_iam_v1_iam_pb.AddIamBindingsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  addIamBindings(argument: alis_open_iam_v1_iam_pb.AddIamBindingsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  removeIamBindings(argument: alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  removeIamBindings(argument: alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  removeIamBindings(argument: alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  createCron(argument: alis_a2a_extension_scheduler_v1_scheduler_pb.CreateCronRequest, callback: grpc.requestCallback<alis_a2a_extension_scheduler_v1_scheduler_pb.Cron>): grpc.ClientUnaryCall;
  createCron(argument: alis_a2a_extension_scheduler_v1_scheduler_pb.CreateCronRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_a2a_extension_scheduler_v1_scheduler_pb.Cron>): grpc.ClientUnaryCall;
  createCron(argument: alis_a2a_extension_scheduler_v1_scheduler_pb.CreateCronRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_a2a_extension_scheduler_v1_scheduler_pb.Cron>): grpc.ClientUnaryCall;
  listCrons(argument: alis_a2a_extension_scheduler_v1_scheduler_pb.ListCronsRequest, callback: grpc.requestCallback<alis_a2a_extension_scheduler_v1_scheduler_pb.ListCronsResponse>): grpc.ClientUnaryCall;
  listCrons(argument: alis_a2a_extension_scheduler_v1_scheduler_pb.ListCronsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_a2a_extension_scheduler_v1_scheduler_pb.ListCronsResponse>): grpc.ClientUnaryCall;
  listCrons(argument: alis_a2a_extension_scheduler_v1_scheduler_pb.ListCronsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_a2a_extension_scheduler_v1_scheduler_pb.ListCronsResponse>): grpc.ClientUnaryCall;
  getCron(argument: alis_a2a_extension_scheduler_v1_scheduler_pb.GetCronRequest, callback: grpc.requestCallback<alis_a2a_extension_scheduler_v1_scheduler_pb.Cron>): grpc.ClientUnaryCall;
  getCron(argument: alis_a2a_extension_scheduler_v1_scheduler_pb.GetCronRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_a2a_extension_scheduler_v1_scheduler_pb.Cron>): grpc.ClientUnaryCall;
  getCron(argument: alis_a2a_extension_scheduler_v1_scheduler_pb.GetCronRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_a2a_extension_scheduler_v1_scheduler_pb.Cron>): grpc.ClientUnaryCall;
  updateCron(argument: alis_a2a_extension_scheduler_v1_scheduler_pb.UpdateCronRequest, callback: grpc.requestCallback<alis_a2a_extension_scheduler_v1_scheduler_pb.Cron>): grpc.ClientUnaryCall;
  updateCron(argument: alis_a2a_extension_scheduler_v1_scheduler_pb.UpdateCronRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_a2a_extension_scheduler_v1_scheduler_pb.Cron>): grpc.ClientUnaryCall;
  updateCron(argument: alis_a2a_extension_scheduler_v1_scheduler_pb.UpdateCronRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_a2a_extension_scheduler_v1_scheduler_pb.Cron>): grpc.ClientUnaryCall;
  deleteCron(argument: alis_a2a_extension_scheduler_v1_scheduler_pb.DeleteCronRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteCron(argument: alis_a2a_extension_scheduler_v1_scheduler_pb.DeleteCronRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteCron(argument: alis_a2a_extension_scheduler_v1_scheduler_pb.DeleteCronRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  runCron(argument: alis_a2a_extension_scheduler_v1_scheduler_pb.RunCronRequest, callback: grpc.requestCallback<alis_a2a_extension_scheduler_v1_scheduler_pb.RunCronResponse>): grpc.ClientUnaryCall;
  runCron(argument: alis_a2a_extension_scheduler_v1_scheduler_pb.RunCronRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_a2a_extension_scheduler_v1_scheduler_pb.RunCronResponse>): grpc.ClientUnaryCall;
  runCron(argument: alis_a2a_extension_scheduler_v1_scheduler_pb.RunCronRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_a2a_extension_scheduler_v1_scheduler_pb.RunCronResponse>): grpc.ClientUnaryCall;
}
