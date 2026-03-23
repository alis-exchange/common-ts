// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var alis_open_agent_v1_agent_pb = require('../../../../alis/open/agent/v1/agent_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_alis_open_agent_v1_AgentCard(arg) {
  if (!(arg instanceof alis_open_agent_v1_agent_pb.AgentCard)) {
    throw new Error('Expected argument of type alis.open.agent.v1.AgentCard');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_agent_v1_AgentCard(buffer_arg) {
  return alis_open_agent_v1_agent_pb.AgentCard.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_agent_v1_CancelTaskRequest(arg) {
  if (!(arg instanceof alis_open_agent_v1_agent_pb.CancelTaskRequest)) {
    throw new Error('Expected argument of type alis.open.agent.v1.CancelTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_agent_v1_CancelTaskRequest(buffer_arg) {
  return alis_open_agent_v1_agent_pb.CancelTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_agent_v1_CreateTaskPushNotificationConfigRequest(arg) {
  if (!(arg instanceof alis_open_agent_v1_agent_pb.CreateTaskPushNotificationConfigRequest)) {
    throw new Error('Expected argument of type alis.open.agent.v1.CreateTaskPushNotificationConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_agent_v1_CreateTaskPushNotificationConfigRequest(buffer_arg) {
  return alis_open_agent_v1_agent_pb.CreateTaskPushNotificationConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_agent_v1_DeleteTaskPushNotificationConfigRequest(arg) {
  if (!(arg instanceof alis_open_agent_v1_agent_pb.DeleteTaskPushNotificationConfigRequest)) {
    throw new Error('Expected argument of type alis.open.agent.v1.DeleteTaskPushNotificationConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_agent_v1_DeleteTaskPushNotificationConfigRequest(buffer_arg) {
  return alis_open_agent_v1_agent_pb.DeleteTaskPushNotificationConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_agent_v1_GetAgentCardRequest(arg) {
  if (!(arg instanceof alis_open_agent_v1_agent_pb.GetAgentCardRequest)) {
    throw new Error('Expected argument of type alis.open.agent.v1.GetAgentCardRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_agent_v1_GetAgentCardRequest(buffer_arg) {
  return alis_open_agent_v1_agent_pb.GetAgentCardRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_agent_v1_GetTaskPushNotificationConfigRequest(arg) {
  if (!(arg instanceof alis_open_agent_v1_agent_pb.GetTaskPushNotificationConfigRequest)) {
    throw new Error('Expected argument of type alis.open.agent.v1.GetTaskPushNotificationConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_agent_v1_GetTaskPushNotificationConfigRequest(buffer_arg) {
  return alis_open_agent_v1_agent_pb.GetTaskPushNotificationConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_agent_v1_GetTaskRequest(arg) {
  if (!(arg instanceof alis_open_agent_v1_agent_pb.GetTaskRequest)) {
    throw new Error('Expected argument of type alis.open.agent.v1.GetTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_agent_v1_GetTaskRequest(buffer_arg) {
  return alis_open_agent_v1_agent_pb.GetTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_agent_v1_ListTaskPushNotificationConfigRequest(arg) {
  if (!(arg instanceof alis_open_agent_v1_agent_pb.ListTaskPushNotificationConfigRequest)) {
    throw new Error('Expected argument of type alis.open.agent.v1.ListTaskPushNotificationConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_agent_v1_ListTaskPushNotificationConfigRequest(buffer_arg) {
  return alis_open_agent_v1_agent_pb.ListTaskPushNotificationConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_agent_v1_ListTaskPushNotificationConfigResponse(arg) {
  if (!(arg instanceof alis_open_agent_v1_agent_pb.ListTaskPushNotificationConfigResponse)) {
    throw new Error('Expected argument of type alis.open.agent.v1.ListTaskPushNotificationConfigResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_agent_v1_ListTaskPushNotificationConfigResponse(buffer_arg) {
  return alis_open_agent_v1_agent_pb.ListTaskPushNotificationConfigResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_agent_v1_ListTasksRequest(arg) {
  if (!(arg instanceof alis_open_agent_v1_agent_pb.ListTasksRequest)) {
    throw new Error('Expected argument of type alis.open.agent.v1.ListTasksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_agent_v1_ListTasksRequest(buffer_arg) {
  return alis_open_agent_v1_agent_pb.ListTasksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_agent_v1_ListTasksResponse(arg) {
  if (!(arg instanceof alis_open_agent_v1_agent_pb.ListTasksResponse)) {
    throw new Error('Expected argument of type alis.open.agent.v1.ListTasksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_agent_v1_ListTasksResponse(buffer_arg) {
  return alis_open_agent_v1_agent_pb.ListTasksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_agent_v1_SendMessageRequest(arg) {
  if (!(arg instanceof alis_open_agent_v1_agent_pb.SendMessageRequest)) {
    throw new Error('Expected argument of type alis.open.agent.v1.SendMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_agent_v1_SendMessageRequest(buffer_arg) {
  return alis_open_agent_v1_agent_pb.SendMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_agent_v1_SendMessageResponse(arg) {
  if (!(arg instanceof alis_open_agent_v1_agent_pb.SendMessageResponse)) {
    throw new Error('Expected argument of type alis.open.agent.v1.SendMessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_agent_v1_SendMessageResponse(buffer_arg) {
  return alis_open_agent_v1_agent_pb.SendMessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_agent_v1_StreamResponse(arg) {
  if (!(arg instanceof alis_open_agent_v1_agent_pb.StreamResponse)) {
    throw new Error('Expected argument of type alis.open.agent.v1.StreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_agent_v1_StreamResponse(buffer_arg) {
  return alis_open_agent_v1_agent_pb.StreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_agent_v1_Task(arg) {
  if (!(arg instanceof alis_open_agent_v1_agent_pb.Task)) {
    throw new Error('Expected argument of type alis.open.agent.v1.Task');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_agent_v1_Task(buffer_arg) {
  return alis_open_agent_v1_agent_pb.Task.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_agent_v1_TaskPushNotificationConfig(arg) {
  if (!(arg instanceof alis_open_agent_v1_agent_pb.TaskPushNotificationConfig)) {
    throw new Error('Expected argument of type alis.open.agent.v1.TaskPushNotificationConfig');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_agent_v1_TaskPushNotificationConfig(buffer_arg) {
  return alis_open_agent_v1_agent_pb.TaskPushNotificationConfig.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_agent_v1_TaskSubscriptionRequest(arg) {
  if (!(arg instanceof alis_open_agent_v1_agent_pb.TaskSubscriptionRequest)) {
    throw new Error('Expected argument of type alis.open.agent.v1.TaskSubscriptionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_agent_v1_TaskSubscriptionRequest(buffer_arg) {
  return alis_open_agent_v1_agent_pb.TaskSubscriptionRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A2AService defines the gRPC version of the A2A protocol. This has a slightly
// different shape than the JSONRPC version to better conform to AIP-127,
// where appropriate. The nouns are AgentCard, Message, Task and
// TaskPushNotificationConfig.
// - Messages are not a standard resource so there is no get/delete/update/list
//   interface, only a send and stream custom methods.
// - Tasks have a get interface and custom cancel and subscribe methods.
// - TaskPushNotificationConfig are a resource whose parent is a task.
//   They have get, list and create methods.
// - AgentCard is a static resource with only a get method.
var A2AServiceService = exports.A2AServiceService = {
  // Send a message to the agent. This is a blocking call that will return the
// task once it is completed, or a LRO if requested.
sendMessage: {
    path: '/alis.open.agent.v1.A2AService/SendMessage',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_agent_v1_agent_pb.SendMessageRequest,
    responseType: alis_open_agent_v1_agent_pb.SendMessageResponse,
    requestSerialize: serialize_alis_open_agent_v1_SendMessageRequest,
    requestDeserialize: deserialize_alis_open_agent_v1_SendMessageRequest,
    responseSerialize: serialize_alis_open_agent_v1_SendMessageResponse,
    responseDeserialize: deserialize_alis_open_agent_v1_SendMessageResponse,
  },
  // SendStreamingMessage is a streaming call that will return a stream of
// task update events until the Task is in an interrupted or terminal state.
sendStreamingMessage: {
    path: '/alis.open.agent.v1.A2AService/SendStreamingMessage',
    requestStream: false,
    responseStream: true,
    requestType: alis_open_agent_v1_agent_pb.SendMessageRequest,
    responseType: alis_open_agent_v1_agent_pb.StreamResponse,
    requestSerialize: serialize_alis_open_agent_v1_SendMessageRequest,
    requestDeserialize: deserialize_alis_open_agent_v1_SendMessageRequest,
    responseSerialize: serialize_alis_open_agent_v1_StreamResponse,
    responseDeserialize: deserialize_alis_open_agent_v1_StreamResponse,
  },
  // Get the current state of a task from the agent.
getTask: {
    path: '/alis.open.agent.v1.A2AService/GetTask',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_agent_v1_agent_pb.GetTaskRequest,
    responseType: alis_open_agent_v1_agent_pb.Task,
    requestSerialize: serialize_alis_open_agent_v1_GetTaskRequest,
    requestDeserialize: deserialize_alis_open_agent_v1_GetTaskRequest,
    responseSerialize: serialize_alis_open_agent_v1_Task,
    responseDeserialize: deserialize_alis_open_agent_v1_Task,
  },
  // List tasks with optional filtering and pagination.
listTasks: {
    path: '/alis.open.agent.v1.A2AService/ListTasks',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_agent_v1_agent_pb.ListTasksRequest,
    responseType: alis_open_agent_v1_agent_pb.ListTasksResponse,
    requestSerialize: serialize_alis_open_agent_v1_ListTasksRequest,
    requestDeserialize: deserialize_alis_open_agent_v1_ListTasksRequest,
    responseSerialize: serialize_alis_open_agent_v1_ListTasksResponse,
    responseDeserialize: deserialize_alis_open_agent_v1_ListTasksResponse,
  },
  // Cancel a task from the agent. If supported one should expect no
// more task updates for the task.
cancelTask: {
    path: '/alis.open.agent.v1.A2AService/CancelTask',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_agent_v1_agent_pb.CancelTaskRequest,
    responseType: alis_open_agent_v1_agent_pb.Task,
    requestSerialize: serialize_alis_open_agent_v1_CancelTaskRequest,
    requestDeserialize: deserialize_alis_open_agent_v1_CancelTaskRequest,
    responseSerialize: serialize_alis_open_agent_v1_Task,
    responseDeserialize: deserialize_alis_open_agent_v1_Task,
  },
  // TaskSubscription is a streaming call that will return a stream of task
// update events. This attaches the stream to an existing in process task.
// If the task is complete the stream will return the completed task (like
// GetTask) and close the stream.
taskSubscription: {
    path: '/alis.open.agent.v1.A2AService/TaskSubscription',
    requestStream: false,
    responseStream: true,
    requestType: alis_open_agent_v1_agent_pb.TaskSubscriptionRequest,
    responseType: alis_open_agent_v1_agent_pb.StreamResponse,
    requestSerialize: serialize_alis_open_agent_v1_TaskSubscriptionRequest,
    requestDeserialize: deserialize_alis_open_agent_v1_TaskSubscriptionRequest,
    responseSerialize: serialize_alis_open_agent_v1_StreamResponse,
    responseDeserialize: deserialize_alis_open_agent_v1_StreamResponse,
  },
  // Set a push notification config for a task.
createTaskPushNotificationConfig: {
    path: '/alis.open.agent.v1.A2AService/CreateTaskPushNotificationConfig',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_agent_v1_agent_pb.CreateTaskPushNotificationConfigRequest,
    responseType: alis_open_agent_v1_agent_pb.TaskPushNotificationConfig,
    requestSerialize: serialize_alis_open_agent_v1_CreateTaskPushNotificationConfigRequest,
    requestDeserialize: deserialize_alis_open_agent_v1_CreateTaskPushNotificationConfigRequest,
    responseSerialize: serialize_alis_open_agent_v1_TaskPushNotificationConfig,
    responseDeserialize: deserialize_alis_open_agent_v1_TaskPushNotificationConfig,
  },
  // Get a push notification config for a task.
getTaskPushNotificationConfig: {
    path: '/alis.open.agent.v1.A2AService/GetTaskPushNotificationConfig',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_agent_v1_agent_pb.GetTaskPushNotificationConfigRequest,
    responseType: alis_open_agent_v1_agent_pb.TaskPushNotificationConfig,
    requestSerialize: serialize_alis_open_agent_v1_GetTaskPushNotificationConfigRequest,
    requestDeserialize: deserialize_alis_open_agent_v1_GetTaskPushNotificationConfigRequest,
    responseSerialize: serialize_alis_open_agent_v1_TaskPushNotificationConfig,
    responseDeserialize: deserialize_alis_open_agent_v1_TaskPushNotificationConfig,
  },
  // Get a list of push notifications configured for a task.
listTaskPushNotificationConfig: {
    path: '/alis.open.agent.v1.A2AService/ListTaskPushNotificationConfig',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_agent_v1_agent_pb.ListTaskPushNotificationConfigRequest,
    responseType: alis_open_agent_v1_agent_pb.ListTaskPushNotificationConfigResponse,
    requestSerialize: serialize_alis_open_agent_v1_ListTaskPushNotificationConfigRequest,
    requestDeserialize: deserialize_alis_open_agent_v1_ListTaskPushNotificationConfigRequest,
    responseSerialize: serialize_alis_open_agent_v1_ListTaskPushNotificationConfigResponse,
    responseDeserialize: deserialize_alis_open_agent_v1_ListTaskPushNotificationConfigResponse,
  },
  // GetAgentCard returns the agent card for the agent.
getAgentCard: {
    path: '/alis.open.agent.v1.A2AService/GetAgentCard',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_agent_v1_agent_pb.GetAgentCardRequest,
    responseType: alis_open_agent_v1_agent_pb.AgentCard,
    requestSerialize: serialize_alis_open_agent_v1_GetAgentCardRequest,
    requestDeserialize: deserialize_alis_open_agent_v1_GetAgentCardRequest,
    responseSerialize: serialize_alis_open_agent_v1_AgentCard,
    responseDeserialize: deserialize_alis_open_agent_v1_AgentCard,
  },
  // Delete a push notification config for a task.
deleteTaskPushNotificationConfig: {
    path: '/alis.open.agent.v1.A2AService/DeleteTaskPushNotificationConfig',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_agent_v1_agent_pb.DeleteTaskPushNotificationConfigRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_alis_open_agent_v1_DeleteTaskPushNotificationConfigRequest,
    requestDeserialize: deserialize_alis_open_agent_v1_DeleteTaskPushNotificationConfigRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.A2AServiceClient = grpc.makeGenericClientConstructor(A2AServiceService, 'A2AService');
