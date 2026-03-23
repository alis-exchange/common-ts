import * as grpcWeb from 'grpc-web';

import * as alis_open_support_v1_attachments_pb from '../../../../alis/open/support/v1/attachments_pb'; // proto import: "alis/open/support/v1/attachments.proto"


export class PublicAttachmentsServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  uploadImage(
    request: alis_open_support_v1_attachments_pb.UploadImageRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_support_v1_attachments_pb.UploadImageResponse) => void
  ): grpcWeb.ClientReadableStream<alis_open_support_v1_attachments_pb.UploadImageResponse>;

}

export class PublicAttachmentsServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  uploadImage(
    request: alis_open_support_v1_attachments_pb.UploadImageRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_support_v1_attachments_pb.UploadImageResponse>;

}

