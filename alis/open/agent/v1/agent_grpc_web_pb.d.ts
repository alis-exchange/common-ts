import * as grpcWeb from 'grpc-web';

import * as alis_open_agent_v1_agent_pb from '../../../../alis/open/agent/v1/agent_pb'; // proto import: "alis/open/agent/v1/agent.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class A2AServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  sendMessage(
    request: alis_open_agent_v1_agent_pb.SendMessageRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_agent_v1_agent_pb.SendMessageResponse) => void
  ): grpcWeb.ClientReadableStream<alis_open_agent_v1_agent_pb.SendMessageResponse>;

  sendStreamingMessage(
    request: alis_open_agent_v1_agent_pb.SendMessageRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<alis_open_agent_v1_agent_pb.StreamResponse>;

  getTask(
    request: alis_open_agent_v1_agent_pb.GetTaskRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_agent_v1_agent_pb.Task) => void
  ): grpcWeb.ClientReadableStream<alis_open_agent_v1_agent_pb.Task>;

  listTasks(
    request: alis_open_agent_v1_agent_pb.ListTasksRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_agent_v1_agent_pb.ListTasksResponse) => void
  ): grpcWeb.ClientReadableStream<alis_open_agent_v1_agent_pb.ListTasksResponse>;

  cancelTask(
    request: alis_open_agent_v1_agent_pb.CancelTaskRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_agent_v1_agent_pb.Task) => void
  ): grpcWeb.ClientReadableStream<alis_open_agent_v1_agent_pb.Task>;

  taskSubscription(
    request: alis_open_agent_v1_agent_pb.TaskSubscriptionRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<alis_open_agent_v1_agent_pb.StreamResponse>;

  createTaskPushNotificationConfig(
    request: alis_open_agent_v1_agent_pb.CreateTaskPushNotificationConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_agent_v1_agent_pb.TaskPushNotificationConfig) => void
  ): grpcWeb.ClientReadableStream<alis_open_agent_v1_agent_pb.TaskPushNotificationConfig>;

  getTaskPushNotificationConfig(
    request: alis_open_agent_v1_agent_pb.GetTaskPushNotificationConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_agent_v1_agent_pb.TaskPushNotificationConfig) => void
  ): grpcWeb.ClientReadableStream<alis_open_agent_v1_agent_pb.TaskPushNotificationConfig>;

  listTaskPushNotificationConfig(
    request: alis_open_agent_v1_agent_pb.ListTaskPushNotificationConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_agent_v1_agent_pb.ListTaskPushNotificationConfigResponse) => void
  ): grpcWeb.ClientReadableStream<alis_open_agent_v1_agent_pb.ListTaskPushNotificationConfigResponse>;

  getAgentCard(
    request: alis_open_agent_v1_agent_pb.GetAgentCardRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_agent_v1_agent_pb.AgentCard) => void
  ): grpcWeb.ClientReadableStream<alis_open_agent_v1_agent_pb.AgentCard>;

  deleteTaskPushNotificationConfig(
    request: alis_open_agent_v1_agent_pb.DeleteTaskPushNotificationConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class A2AServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  sendMessage(
    request: alis_open_agent_v1_agent_pb.SendMessageRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_agent_v1_agent_pb.SendMessageResponse>;

  sendStreamingMessage(
    request: alis_open_agent_v1_agent_pb.SendMessageRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<alis_open_agent_v1_agent_pb.StreamResponse>;

  getTask(
    request: alis_open_agent_v1_agent_pb.GetTaskRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_agent_v1_agent_pb.Task>;

  listTasks(
    request: alis_open_agent_v1_agent_pb.ListTasksRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_agent_v1_agent_pb.ListTasksResponse>;

  cancelTask(
    request: alis_open_agent_v1_agent_pb.CancelTaskRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_agent_v1_agent_pb.Task>;

  taskSubscription(
    request: alis_open_agent_v1_agent_pb.TaskSubscriptionRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<alis_open_agent_v1_agent_pb.StreamResponse>;

  createTaskPushNotificationConfig(
    request: alis_open_agent_v1_agent_pb.CreateTaskPushNotificationConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_agent_v1_agent_pb.TaskPushNotificationConfig>;

  getTaskPushNotificationConfig(
    request: alis_open_agent_v1_agent_pb.GetTaskPushNotificationConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_agent_v1_agent_pb.TaskPushNotificationConfig>;

  listTaskPushNotificationConfig(
    request: alis_open_agent_v1_agent_pb.ListTaskPushNotificationConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_agent_v1_agent_pb.ListTaskPushNotificationConfigResponse>;

  getAgentCard(
    request: alis_open_agent_v1_agent_pb.GetAgentCardRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_agent_v1_agent_pb.AgentCard>;

  deleteTaskPushNotificationConfig(
    request: alis_open_agent_v1_agent_pb.DeleteTaskPushNotificationConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

