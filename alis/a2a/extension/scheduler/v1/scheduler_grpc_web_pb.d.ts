import * as grpcWeb from 'grpc-web';

import * as alis_a2a_extension_scheduler_v1_scheduler_pb from '../../../../../alis/a2a/extension/scheduler/v1/scheduler_pb'; // proto import: "alis/a2a/extension/scheduler/v1/scheduler.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class SchedulerServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

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

