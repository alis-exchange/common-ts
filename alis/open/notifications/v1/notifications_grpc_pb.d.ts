// GENERATED CODE -- DO NOT EDIT!

// package: alis.open.notifications.v1
// file: alis/open/notifications/v1/notifications.proto

import * as alis_open_notifications_v1_notifications_pb from "../../../../alis/open/notifications/v1/notifications_pb";
import * as alis_open_validation_v1_validation_pb from "../../../../alis/open/validation/v1/validation_pb";
import * as google_iam_v1_iam_policy_pb from "../../../../google/iam/v1/iam_policy_pb";
import * as grpc from "grpc";

interface INotificationsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  validateMessage: grpc.MethodDefinition<alis_open_validation_v1_validation_pb.ValidateMessageRequest, alis_open_validation_v1_validation_pb.ValidateMessageResponse>;
  retrieveRules: grpc.MethodDefinition<alis_open_validation_v1_validation_pb.RetrieveRulesRequest, alis_open_validation_v1_validation_pb.RetrieveRulesResponse>;
  testIamPermissions: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;
  sendFcmMessage: grpc.MethodDefinition<alis_open_notifications_v1_notifications_pb.SendFcmMessageRequest, alis_open_notifications_v1_notifications_pb.SendFcmMessageResponse>;
  batchSendFcmMessages: grpc.MethodDefinition<alis_open_notifications_v1_notifications_pb.BatchSendFcmMessagesRequest, alis_open_notifications_v1_notifications_pb.BatchSendFcmMessagesResponse>;
}

export const NotificationsServiceService: INotificationsServiceService;

export interface INotificationsServiceServer extends grpc.UntypedServiceImplementation {
  validateMessage: grpc.handleUnaryCall<alis_open_validation_v1_validation_pb.ValidateMessageRequest, alis_open_validation_v1_validation_pb.ValidateMessageResponse>;
  retrieveRules: grpc.handleUnaryCall<alis_open_validation_v1_validation_pb.RetrieveRulesRequest, alis_open_validation_v1_validation_pb.RetrieveRulesResponse>;
  testIamPermissions: grpc.handleUnaryCall<google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;
  sendFcmMessage: grpc.handleUnaryCall<alis_open_notifications_v1_notifications_pb.SendFcmMessageRequest, alis_open_notifications_v1_notifications_pb.SendFcmMessageResponse>;
  batchSendFcmMessages: grpc.handleUnaryCall<alis_open_notifications_v1_notifications_pb.BatchSendFcmMessagesRequest, alis_open_notifications_v1_notifications_pb.BatchSendFcmMessagesResponse>;
}

export class NotificationsServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  validateMessage(argument: alis_open_validation_v1_validation_pb.ValidateMessageRequest, callback: grpc.requestCallback<alis_open_validation_v1_validation_pb.ValidateMessageResponse>): grpc.ClientUnaryCall;
  validateMessage(argument: alis_open_validation_v1_validation_pb.ValidateMessageRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_validation_v1_validation_pb.ValidateMessageResponse>): grpc.ClientUnaryCall;
  validateMessage(argument: alis_open_validation_v1_validation_pb.ValidateMessageRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_validation_v1_validation_pb.ValidateMessageResponse>): grpc.ClientUnaryCall;
  retrieveRules(argument: alis_open_validation_v1_validation_pb.RetrieveRulesRequest, callback: grpc.requestCallback<alis_open_validation_v1_validation_pb.RetrieveRulesResponse>): grpc.ClientUnaryCall;
  retrieveRules(argument: alis_open_validation_v1_validation_pb.RetrieveRulesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_validation_v1_validation_pb.RetrieveRulesResponse>): grpc.ClientUnaryCall;
  retrieveRules(argument: alis_open_validation_v1_validation_pb.RetrieveRulesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_validation_v1_validation_pb.RetrieveRulesResponse>): grpc.ClientUnaryCall;
  testIamPermissions(argument: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, callback: grpc.requestCallback<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>): grpc.ClientUnaryCall;
  testIamPermissions(argument: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>): grpc.ClientUnaryCall;
  testIamPermissions(argument: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>): grpc.ClientUnaryCall;
  sendFcmMessage(argument: alis_open_notifications_v1_notifications_pb.SendFcmMessageRequest, callback: grpc.requestCallback<alis_open_notifications_v1_notifications_pb.SendFcmMessageResponse>): grpc.ClientUnaryCall;
  sendFcmMessage(argument: alis_open_notifications_v1_notifications_pb.SendFcmMessageRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_notifications_v1_notifications_pb.SendFcmMessageResponse>): grpc.ClientUnaryCall;
  sendFcmMessage(argument: alis_open_notifications_v1_notifications_pb.SendFcmMessageRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_notifications_v1_notifications_pb.SendFcmMessageResponse>): grpc.ClientUnaryCall;
  batchSendFcmMessages(argument: alis_open_notifications_v1_notifications_pb.BatchSendFcmMessagesRequest, callback: grpc.requestCallback<alis_open_notifications_v1_notifications_pb.BatchSendFcmMessagesResponse>): grpc.ClientUnaryCall;
  batchSendFcmMessages(argument: alis_open_notifications_v1_notifications_pb.BatchSendFcmMessagesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_notifications_v1_notifications_pb.BatchSendFcmMessagesResponse>): grpc.ClientUnaryCall;
  batchSendFcmMessages(argument: alis_open_notifications_v1_notifications_pb.BatchSendFcmMessagesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_notifications_v1_notifications_pb.BatchSendFcmMessagesResponse>): grpc.ClientUnaryCall;
}
