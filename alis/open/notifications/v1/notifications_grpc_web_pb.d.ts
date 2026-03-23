import * as grpcWeb from 'grpc-web';

import * as alis_open_notifications_v1_notifications_pb from '../../../../alis/open/notifications/v1/notifications_pb'; // proto import: "alis/open/notifications/v1/notifications.proto"
import * as alis_open_validation_v1_validation_pb from '../../../../alis/open/validation/v1/validation_pb'; // proto import: "alis/open/validation/v1/validation.proto"
import * as google_iam_v1_iam_policy_pb from '../../../../google/iam/v1/iam_policy_pb'; // proto import: "google/iam/v1/iam_policy.proto"


export class NotificationsServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  validateMessage(
    request: alis_open_validation_v1_validation_pb.ValidateMessageRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_validation_v1_validation_pb.ValidateMessageResponse) => void
  ): grpcWeb.ClientReadableStream<alis_open_validation_v1_validation_pb.ValidateMessageResponse>;

  retrieveRules(
    request: alis_open_validation_v1_validation_pb.RetrieveRulesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_validation_v1_validation_pb.RetrieveRulesResponse) => void
  ): grpcWeb.ClientReadableStream<alis_open_validation_v1_validation_pb.RetrieveRulesResponse>;

  testIamPermissions(
    request: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_v1_iam_policy_pb.TestIamPermissionsResponse) => void
  ): grpcWeb.ClientReadableStream<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;

  sendFcmMessage(
    request: alis_open_notifications_v1_notifications_pb.SendFcmMessageRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_notifications_v1_notifications_pb.SendFcmMessageResponse) => void
  ): grpcWeb.ClientReadableStream<alis_open_notifications_v1_notifications_pb.SendFcmMessageResponse>;

  batchSendFcmMessages(
    request: alis_open_notifications_v1_notifications_pb.BatchSendFcmMessagesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_notifications_v1_notifications_pb.BatchSendFcmMessagesResponse) => void
  ): grpcWeb.ClientReadableStream<alis_open_notifications_v1_notifications_pb.BatchSendFcmMessagesResponse>;

}

export class NotificationsServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  validateMessage(
    request: alis_open_validation_v1_validation_pb.ValidateMessageRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_validation_v1_validation_pb.ValidateMessageResponse>;

  retrieveRules(
    request: alis_open_validation_v1_validation_pb.RetrieveRulesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_validation_v1_validation_pb.RetrieveRulesResponse>;

  testIamPermissions(
    request: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;

  sendFcmMessage(
    request: alis_open_notifications_v1_notifications_pb.SendFcmMessageRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_notifications_v1_notifications_pb.SendFcmMessageResponse>;

  batchSendFcmMessages(
    request: alis_open_notifications_v1_notifications_pb.BatchSendFcmMessagesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_notifications_v1_notifications_pb.BatchSendFcmMessagesResponse>;

}

