// GENERATED CODE -- DO NOT EDIT!

// package: alis.open.agent.v2
// file: alis/open/agent/v2/a2a.proto

import * as alis_open_agent_v2_a2a_pb from "../../../../alis/open/agent/v2/a2a_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IA2AServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  sendMessage: grpc.MethodDefinition<alis_open_agent_v2_a2a_pb.SendMessageRequest, alis_open_agent_v2_a2a_pb.SendMessageResponse>;
  sendStreamingMessage: grpc.MethodDefinition<alis_open_agent_v2_a2a_pb.SendMessageRequest, alis_open_agent_v2_a2a_pb.StreamResponse>;
  getTask: grpc.MethodDefinition<alis_open_agent_v2_a2a_pb.GetTaskRequest, alis_open_agent_v2_a2a_pb.Task>;
  listTasks: grpc.MethodDefinition<alis_open_agent_v2_a2a_pb.ListTasksRequest, alis_open_agent_v2_a2a_pb.ListTasksResponse>;
  cancelTask: grpc.MethodDefinition<alis_open_agent_v2_a2a_pb.CancelTaskRequest, alis_open_agent_v2_a2a_pb.Task>;
  taskSubscription: grpc.MethodDefinition<alis_open_agent_v2_a2a_pb.TaskSubscriptionRequest, alis_open_agent_v2_a2a_pb.StreamResponse>;
  createTaskPushNotificationConfig: grpc.MethodDefinition<alis_open_agent_v2_a2a_pb.CreateTaskPushNotificationConfigRequest, alis_open_agent_v2_a2a_pb.TaskPushNotificationConfig>;
  getTaskPushNotificationConfig: grpc.MethodDefinition<alis_open_agent_v2_a2a_pb.GetTaskPushNotificationConfigRequest, alis_open_agent_v2_a2a_pb.TaskPushNotificationConfig>;
  listTaskPushNotificationConfig: grpc.MethodDefinition<alis_open_agent_v2_a2a_pb.ListTaskPushNotificationConfigRequest, alis_open_agent_v2_a2a_pb.ListTaskPushNotificationConfigResponse>;
  getAgentCard: grpc.MethodDefinition<alis_open_agent_v2_a2a_pb.GetAgentCardRequest, alis_open_agent_v2_a2a_pb.AgentCard>;
  deleteTaskPushNotificationConfig: grpc.MethodDefinition<alis_open_agent_v2_a2a_pb.DeleteTaskPushNotificationConfigRequest, google_protobuf_empty_pb.Empty>;
}

export const A2AServiceService: IA2AServiceService;

export interface IA2AServiceServer extends grpc.UntypedServiceImplementation {
  sendMessage: grpc.handleUnaryCall<alis_open_agent_v2_a2a_pb.SendMessageRequest, alis_open_agent_v2_a2a_pb.SendMessageResponse>;
  sendStreamingMessage: grpc.handleServerStreamingCall<alis_open_agent_v2_a2a_pb.SendMessageRequest, alis_open_agent_v2_a2a_pb.StreamResponse>;
  getTask: grpc.handleUnaryCall<alis_open_agent_v2_a2a_pb.GetTaskRequest, alis_open_agent_v2_a2a_pb.Task>;
  listTasks: grpc.handleUnaryCall<alis_open_agent_v2_a2a_pb.ListTasksRequest, alis_open_agent_v2_a2a_pb.ListTasksResponse>;
  cancelTask: grpc.handleUnaryCall<alis_open_agent_v2_a2a_pb.CancelTaskRequest, alis_open_agent_v2_a2a_pb.Task>;
  taskSubscription: grpc.handleServerStreamingCall<alis_open_agent_v2_a2a_pb.TaskSubscriptionRequest, alis_open_agent_v2_a2a_pb.StreamResponse>;
  createTaskPushNotificationConfig: grpc.handleUnaryCall<alis_open_agent_v2_a2a_pb.CreateTaskPushNotificationConfigRequest, alis_open_agent_v2_a2a_pb.TaskPushNotificationConfig>;
  getTaskPushNotificationConfig: grpc.handleUnaryCall<alis_open_agent_v2_a2a_pb.GetTaskPushNotificationConfigRequest, alis_open_agent_v2_a2a_pb.TaskPushNotificationConfig>;
  listTaskPushNotificationConfig: grpc.handleUnaryCall<alis_open_agent_v2_a2a_pb.ListTaskPushNotificationConfigRequest, alis_open_agent_v2_a2a_pb.ListTaskPushNotificationConfigResponse>;
  getAgentCard: grpc.handleUnaryCall<alis_open_agent_v2_a2a_pb.GetAgentCardRequest, alis_open_agent_v2_a2a_pb.AgentCard>;
  deleteTaskPushNotificationConfig: grpc.handleUnaryCall<alis_open_agent_v2_a2a_pb.DeleteTaskPushNotificationConfigRequest, google_protobuf_empty_pb.Empty>;
}

export class A2AServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  sendMessage(argument: alis_open_agent_v2_a2a_pb.SendMessageRequest, callback: grpc.requestCallback<alis_open_agent_v2_a2a_pb.SendMessageResponse>): grpc.ClientUnaryCall;
  sendMessage(argument: alis_open_agent_v2_a2a_pb.SendMessageRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_agent_v2_a2a_pb.SendMessageResponse>): grpc.ClientUnaryCall;
  sendMessage(argument: alis_open_agent_v2_a2a_pb.SendMessageRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_agent_v2_a2a_pb.SendMessageResponse>): grpc.ClientUnaryCall;
  sendStreamingMessage(argument: alis_open_agent_v2_a2a_pb.SendMessageRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<alis_open_agent_v2_a2a_pb.StreamResponse>;
  sendStreamingMessage(argument: alis_open_agent_v2_a2a_pb.SendMessageRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<alis_open_agent_v2_a2a_pb.StreamResponse>;
  getTask(argument: alis_open_agent_v2_a2a_pb.GetTaskRequest, callback: grpc.requestCallback<alis_open_agent_v2_a2a_pb.Task>): grpc.ClientUnaryCall;
  getTask(argument: alis_open_agent_v2_a2a_pb.GetTaskRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_agent_v2_a2a_pb.Task>): grpc.ClientUnaryCall;
  getTask(argument: alis_open_agent_v2_a2a_pb.GetTaskRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_agent_v2_a2a_pb.Task>): grpc.ClientUnaryCall;
  listTasks(argument: alis_open_agent_v2_a2a_pb.ListTasksRequest, callback: grpc.requestCallback<alis_open_agent_v2_a2a_pb.ListTasksResponse>): grpc.ClientUnaryCall;
  listTasks(argument: alis_open_agent_v2_a2a_pb.ListTasksRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_agent_v2_a2a_pb.ListTasksResponse>): grpc.ClientUnaryCall;
  listTasks(argument: alis_open_agent_v2_a2a_pb.ListTasksRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_agent_v2_a2a_pb.ListTasksResponse>): grpc.ClientUnaryCall;
  cancelTask(argument: alis_open_agent_v2_a2a_pb.CancelTaskRequest, callback: grpc.requestCallback<alis_open_agent_v2_a2a_pb.Task>): grpc.ClientUnaryCall;
  cancelTask(argument: alis_open_agent_v2_a2a_pb.CancelTaskRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_agent_v2_a2a_pb.Task>): grpc.ClientUnaryCall;
  cancelTask(argument: alis_open_agent_v2_a2a_pb.CancelTaskRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_agent_v2_a2a_pb.Task>): grpc.ClientUnaryCall;
  taskSubscription(argument: alis_open_agent_v2_a2a_pb.TaskSubscriptionRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<alis_open_agent_v2_a2a_pb.StreamResponse>;
  taskSubscription(argument: alis_open_agent_v2_a2a_pb.TaskSubscriptionRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<alis_open_agent_v2_a2a_pb.StreamResponse>;
  createTaskPushNotificationConfig(argument: alis_open_agent_v2_a2a_pb.CreateTaskPushNotificationConfigRequest, callback: grpc.requestCallback<alis_open_agent_v2_a2a_pb.TaskPushNotificationConfig>): grpc.ClientUnaryCall;
  createTaskPushNotificationConfig(argument: alis_open_agent_v2_a2a_pb.CreateTaskPushNotificationConfigRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_agent_v2_a2a_pb.TaskPushNotificationConfig>): grpc.ClientUnaryCall;
  createTaskPushNotificationConfig(argument: alis_open_agent_v2_a2a_pb.CreateTaskPushNotificationConfigRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_agent_v2_a2a_pb.TaskPushNotificationConfig>): grpc.ClientUnaryCall;
  getTaskPushNotificationConfig(argument: alis_open_agent_v2_a2a_pb.GetTaskPushNotificationConfigRequest, callback: grpc.requestCallback<alis_open_agent_v2_a2a_pb.TaskPushNotificationConfig>): grpc.ClientUnaryCall;
  getTaskPushNotificationConfig(argument: alis_open_agent_v2_a2a_pb.GetTaskPushNotificationConfigRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_agent_v2_a2a_pb.TaskPushNotificationConfig>): grpc.ClientUnaryCall;
  getTaskPushNotificationConfig(argument: alis_open_agent_v2_a2a_pb.GetTaskPushNotificationConfigRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_agent_v2_a2a_pb.TaskPushNotificationConfig>): grpc.ClientUnaryCall;
  listTaskPushNotificationConfig(argument: alis_open_agent_v2_a2a_pb.ListTaskPushNotificationConfigRequest, callback: grpc.requestCallback<alis_open_agent_v2_a2a_pb.ListTaskPushNotificationConfigResponse>): grpc.ClientUnaryCall;
  listTaskPushNotificationConfig(argument: alis_open_agent_v2_a2a_pb.ListTaskPushNotificationConfigRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_agent_v2_a2a_pb.ListTaskPushNotificationConfigResponse>): grpc.ClientUnaryCall;
  listTaskPushNotificationConfig(argument: alis_open_agent_v2_a2a_pb.ListTaskPushNotificationConfigRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_agent_v2_a2a_pb.ListTaskPushNotificationConfigResponse>): grpc.ClientUnaryCall;
  getAgentCard(argument: alis_open_agent_v2_a2a_pb.GetAgentCardRequest, callback: grpc.requestCallback<alis_open_agent_v2_a2a_pb.AgentCard>): grpc.ClientUnaryCall;
  getAgentCard(argument: alis_open_agent_v2_a2a_pb.GetAgentCardRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_agent_v2_a2a_pb.AgentCard>): grpc.ClientUnaryCall;
  getAgentCard(argument: alis_open_agent_v2_a2a_pb.GetAgentCardRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_agent_v2_a2a_pb.AgentCard>): grpc.ClientUnaryCall;
  deleteTaskPushNotificationConfig(argument: alis_open_agent_v2_a2a_pb.DeleteTaskPushNotificationConfigRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteTaskPushNotificationConfig(argument: alis_open_agent_v2_a2a_pb.DeleteTaskPushNotificationConfigRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteTaskPushNotificationConfig(argument: alis_open_agent_v2_a2a_pb.DeleteTaskPushNotificationConfigRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
