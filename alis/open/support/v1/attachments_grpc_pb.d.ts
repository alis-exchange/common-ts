// GENERATED CODE -- DO NOT EDIT!

// package: alis.open.support.v1
// file: alis/open/support/v1/attachments.proto

import * as alis_open_support_v1_attachments_pb from "../../../../alis/open/support/v1/attachments_pb";
import * as grpc from "grpc";

interface IPublicAttachmentsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  uploadImage: grpc.MethodDefinition<alis_open_support_v1_attachments_pb.UploadImageRequest, alis_open_support_v1_attachments_pb.UploadImageResponse>;
}

export const PublicAttachmentsServiceService: IPublicAttachmentsServiceService;

export interface IPublicAttachmentsServiceServer extends grpc.UntypedServiceImplementation {
  uploadImage: grpc.handleUnaryCall<alis_open_support_v1_attachments_pb.UploadImageRequest, alis_open_support_v1_attachments_pb.UploadImageResponse>;
}

export class PublicAttachmentsServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  uploadImage(argument: alis_open_support_v1_attachments_pb.UploadImageRequest, callback: grpc.requestCallback<alis_open_support_v1_attachments_pb.UploadImageResponse>): grpc.ClientUnaryCall;
  uploadImage(argument: alis_open_support_v1_attachments_pb.UploadImageRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_support_v1_attachments_pb.UploadImageResponse>): grpc.ClientUnaryCall;
  uploadImage(argument: alis_open_support_v1_attachments_pb.UploadImageRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_support_v1_attachments_pb.UploadImageResponse>): grpc.ClientUnaryCall;
}
