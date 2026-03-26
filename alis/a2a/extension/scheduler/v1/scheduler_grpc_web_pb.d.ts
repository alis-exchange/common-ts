import * as grpcWeb from 'grpc-web';

import * as alis_a2a_extension_scheduler_v1_scheduler_pb from '../../../../../alis/a2a/extension/scheduler/v1/scheduler_pb'; // proto import: "alis/a2a/extension/scheduler/v1/scheduler.proto"
import * as alis_open_iam_v1_iam_pb from '../../../../../alis/open/iam/v1/iam_pb'; // proto import: "alis/open/iam/v1/iam.proto"
import * as google_iam_v1_iam_policy_pb from '../../../../../google/iam/v1/iam_policy_pb'; // proto import: "google/iam/v1/iam_policy.proto"
import * as google_iam_v1_policy_pb from '../../../../../google/iam/v1/policy_pb'; // proto import: "google/iam/v1/policy.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class SchedulerServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getIamPolicy(
    request: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_v1_policy_pb.Policy) => void
  ): grpcWeb.ClientReadableStream<google_iam_v1_policy_pb.Policy>;

  setIamPolicy(
    request: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_v1_policy_pb.Policy) => void
  ): grpcWeb.ClientReadableStream<google_iam_v1_policy_pb.Policy>;

  addIamBindings(
    request: alis_open_iam_v1_iam_pb.AddIamBindingsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_v1_policy_pb.Policy) => void
  ): grpcWeb.ClientReadableStream<google_iam_v1_policy_pb.Policy>;

  removeIamBindings(
    request: alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_v1_policy_pb.Policy) => void
  ): grpcWeb.ClientReadableStream<google_iam_v1_policy_pb.Policy>;

  createCron(
    request: alis_a2a_extension_scheduler_v1_scheduler_pb.CreateCronRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_a2a_extension_scheduler_v1_scheduler_pb.Cron) => void
  ): grpcWeb.ClientReadableStream<alis_a2a_extension_scheduler_v1_scheduler_pb.Cron>;

  listCrons(
    request: alis_a2a_extension_scheduler_v1_scheduler_pb.ListCronsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_a2a_extension_scheduler_v1_scheduler_pb.ListCronsResponse) => void
  ): grpcWeb.ClientReadableStream<alis_a2a_extension_scheduler_v1_scheduler_pb.ListCronsResponse>;

  getCron(
    request: alis_a2a_extension_scheduler_v1_scheduler_pb.GetCronRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_a2a_extension_scheduler_v1_scheduler_pb.Cron) => void
  ): grpcWeb.ClientReadableStream<alis_a2a_extension_scheduler_v1_scheduler_pb.Cron>;

  updateCron(
    request: alis_a2a_extension_scheduler_v1_scheduler_pb.UpdateCronRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_a2a_extension_scheduler_v1_scheduler_pb.Cron) => void
  ): grpcWeb.ClientReadableStream<alis_a2a_extension_scheduler_v1_scheduler_pb.Cron>;

  deleteCron(
    request: alis_a2a_extension_scheduler_v1_scheduler_pb.DeleteCronRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  runCron(
    request: alis_a2a_extension_scheduler_v1_scheduler_pb.RunCronRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_a2a_extension_scheduler_v1_scheduler_pb.RunCronResponse) => void
  ): grpcWeb.ClientReadableStream<alis_a2a_extension_scheduler_v1_scheduler_pb.RunCronResponse>;

}

export class SchedulerServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getIamPolicy(
    request: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_v1_policy_pb.Policy>;

  setIamPolicy(
    request: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_v1_policy_pb.Policy>;

  addIamBindings(
    request: alis_open_iam_v1_iam_pb.AddIamBindingsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_v1_policy_pb.Policy>;

  removeIamBindings(
    request: alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_v1_policy_pb.Policy>;

  createCron(
    request: alis_a2a_extension_scheduler_v1_scheduler_pb.CreateCronRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_a2a_extension_scheduler_v1_scheduler_pb.Cron>;

  listCrons(
    request: alis_a2a_extension_scheduler_v1_scheduler_pb.ListCronsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_a2a_extension_scheduler_v1_scheduler_pb.ListCronsResponse>;

  getCron(
    request: alis_a2a_extension_scheduler_v1_scheduler_pb.GetCronRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_a2a_extension_scheduler_v1_scheduler_pb.Cron>;

  updateCron(
    request: alis_a2a_extension_scheduler_v1_scheduler_pb.UpdateCronRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_a2a_extension_scheduler_v1_scheduler_pb.Cron>;

  deleteCron(
    request: alis_a2a_extension_scheduler_v1_scheduler_pb.DeleteCronRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  runCron(
    request: alis_a2a_extension_scheduler_v1_scheduler_pb.RunCronRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_a2a_extension_scheduler_v1_scheduler_pb.RunCronResponse>;

}

