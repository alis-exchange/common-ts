import * as grpcWeb from 'grpc-web';

import * as alis_open_support_v1_guide_pb from '../../../../alis/open/support/v1/guide_pb'; // proto import: "alis/open/support/v1/guide.proto"
import * as alis_open_validation_v1_validation_pb from '../../../../alis/open/validation/v1/validation_pb'; // proto import: "alis/open/validation/v1/validation.proto"


export class GuidesServiceClient {
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

  getGuide(
    request: alis_open_support_v1_guide_pb.GetGuideRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_support_v1_guide_pb.Guide) => void
  ): grpcWeb.ClientReadableStream<alis_open_support_v1_guide_pb.Guide>;

  listGuides(
    request: alis_open_support_v1_guide_pb.ListGuidesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_support_v1_guide_pb.ListGuidesResponse) => void
  ): grpcWeb.ClientReadableStream<alis_open_support_v1_guide_pb.ListGuidesResponse>;

  syncGuide(
    request: alis_open_support_v1_guide_pb.SyncGuideRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_support_v1_guide_pb.Guide) => void
  ): grpcWeb.ClientReadableStream<alis_open_support_v1_guide_pb.Guide>;

}

export class GuidesServicePromiseClient {
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

  getGuide(
    request: alis_open_support_v1_guide_pb.GetGuideRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_support_v1_guide_pb.Guide>;

  listGuides(
    request: alis_open_support_v1_guide_pb.ListGuidesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_support_v1_guide_pb.ListGuidesResponse>;

  syncGuide(
    request: alis_open_support_v1_guide_pb.SyncGuideRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_support_v1_guide_pb.Guide>;

}

