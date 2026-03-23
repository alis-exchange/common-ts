// GENERATED CODE -- DO NOT EDIT!

// package: google.logging.v2
// file: google/logging/v2/logging_config.proto

import * as google_logging_v2_logging_config_pb from "../../../google/logging/v2/logging_config_pb";
import * as google_longrunning_operations_pb from "../../../google/longrunning/operations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IConfigServiceV2Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listBuckets: grpc.MethodDefinition<google_logging_v2_logging_config_pb.ListBucketsRequest, google_logging_v2_logging_config_pb.ListBucketsResponse>;
  getBucket: grpc.MethodDefinition<google_logging_v2_logging_config_pb.GetBucketRequest, google_logging_v2_logging_config_pb.LogBucket>;
  createBucket: grpc.MethodDefinition<google_logging_v2_logging_config_pb.CreateBucketRequest, google_logging_v2_logging_config_pb.LogBucket>;
  updateBucket: grpc.MethodDefinition<google_logging_v2_logging_config_pb.UpdateBucketRequest, google_logging_v2_logging_config_pb.LogBucket>;
  deleteBucket: grpc.MethodDefinition<google_logging_v2_logging_config_pb.DeleteBucketRequest, google_protobuf_empty_pb.Empty>;
  undeleteBucket: grpc.MethodDefinition<google_logging_v2_logging_config_pb.UndeleteBucketRequest, google_protobuf_empty_pb.Empty>;
  listViews: grpc.MethodDefinition<google_logging_v2_logging_config_pb.ListViewsRequest, google_logging_v2_logging_config_pb.ListViewsResponse>;
  getView: grpc.MethodDefinition<google_logging_v2_logging_config_pb.GetViewRequest, google_logging_v2_logging_config_pb.LogView>;
  createView: grpc.MethodDefinition<google_logging_v2_logging_config_pb.CreateViewRequest, google_logging_v2_logging_config_pb.LogView>;
  updateView: grpc.MethodDefinition<google_logging_v2_logging_config_pb.UpdateViewRequest, google_logging_v2_logging_config_pb.LogView>;
  deleteView: grpc.MethodDefinition<google_logging_v2_logging_config_pb.DeleteViewRequest, google_protobuf_empty_pb.Empty>;
  listSinks: grpc.MethodDefinition<google_logging_v2_logging_config_pb.ListSinksRequest, google_logging_v2_logging_config_pb.ListSinksResponse>;
  getSink: grpc.MethodDefinition<google_logging_v2_logging_config_pb.GetSinkRequest, google_logging_v2_logging_config_pb.LogSink>;
  createSink: grpc.MethodDefinition<google_logging_v2_logging_config_pb.CreateSinkRequest, google_logging_v2_logging_config_pb.LogSink>;
  updateSink: grpc.MethodDefinition<google_logging_v2_logging_config_pb.UpdateSinkRequest, google_logging_v2_logging_config_pb.LogSink>;
  deleteSink: grpc.MethodDefinition<google_logging_v2_logging_config_pb.DeleteSinkRequest, google_protobuf_empty_pb.Empty>;
  listExclusions: grpc.MethodDefinition<google_logging_v2_logging_config_pb.ListExclusionsRequest, google_logging_v2_logging_config_pb.ListExclusionsResponse>;
  getExclusion: grpc.MethodDefinition<google_logging_v2_logging_config_pb.GetExclusionRequest, google_logging_v2_logging_config_pb.LogExclusion>;
  createExclusion: grpc.MethodDefinition<google_logging_v2_logging_config_pb.CreateExclusionRequest, google_logging_v2_logging_config_pb.LogExclusion>;
  updateExclusion: grpc.MethodDefinition<google_logging_v2_logging_config_pb.UpdateExclusionRequest, google_logging_v2_logging_config_pb.LogExclusion>;
  deleteExclusion: grpc.MethodDefinition<google_logging_v2_logging_config_pb.DeleteExclusionRequest, google_protobuf_empty_pb.Empty>;
  getCmekSettings: grpc.MethodDefinition<google_logging_v2_logging_config_pb.GetCmekSettingsRequest, google_logging_v2_logging_config_pb.CmekSettings>;
  updateCmekSettings: grpc.MethodDefinition<google_logging_v2_logging_config_pb.UpdateCmekSettingsRequest, google_logging_v2_logging_config_pb.CmekSettings>;
  getSettings: grpc.MethodDefinition<google_logging_v2_logging_config_pb.GetSettingsRequest, google_logging_v2_logging_config_pb.Settings>;
  updateSettings: grpc.MethodDefinition<google_logging_v2_logging_config_pb.UpdateSettingsRequest, google_logging_v2_logging_config_pb.Settings>;
  copyLogEntries: grpc.MethodDefinition<google_logging_v2_logging_config_pb.CopyLogEntriesRequest, google_longrunning_operations_pb.Operation>;
}

export const ConfigServiceV2Service: IConfigServiceV2Service;

export interface IConfigServiceV2Server extends grpc.UntypedServiceImplementation {
  listBuckets: grpc.handleUnaryCall<google_logging_v2_logging_config_pb.ListBucketsRequest, google_logging_v2_logging_config_pb.ListBucketsResponse>;
  getBucket: grpc.handleUnaryCall<google_logging_v2_logging_config_pb.GetBucketRequest, google_logging_v2_logging_config_pb.LogBucket>;
  createBucket: grpc.handleUnaryCall<google_logging_v2_logging_config_pb.CreateBucketRequest, google_logging_v2_logging_config_pb.LogBucket>;
  updateBucket: grpc.handleUnaryCall<google_logging_v2_logging_config_pb.UpdateBucketRequest, google_logging_v2_logging_config_pb.LogBucket>;
  deleteBucket: grpc.handleUnaryCall<google_logging_v2_logging_config_pb.DeleteBucketRequest, google_protobuf_empty_pb.Empty>;
  undeleteBucket: grpc.handleUnaryCall<google_logging_v2_logging_config_pb.UndeleteBucketRequest, google_protobuf_empty_pb.Empty>;
  listViews: grpc.handleUnaryCall<google_logging_v2_logging_config_pb.ListViewsRequest, google_logging_v2_logging_config_pb.ListViewsResponse>;
  getView: grpc.handleUnaryCall<google_logging_v2_logging_config_pb.GetViewRequest, google_logging_v2_logging_config_pb.LogView>;
  createView: grpc.handleUnaryCall<google_logging_v2_logging_config_pb.CreateViewRequest, google_logging_v2_logging_config_pb.LogView>;
  updateView: grpc.handleUnaryCall<google_logging_v2_logging_config_pb.UpdateViewRequest, google_logging_v2_logging_config_pb.LogView>;
  deleteView: grpc.handleUnaryCall<google_logging_v2_logging_config_pb.DeleteViewRequest, google_protobuf_empty_pb.Empty>;
  listSinks: grpc.handleUnaryCall<google_logging_v2_logging_config_pb.ListSinksRequest, google_logging_v2_logging_config_pb.ListSinksResponse>;
  getSink: grpc.handleUnaryCall<google_logging_v2_logging_config_pb.GetSinkRequest, google_logging_v2_logging_config_pb.LogSink>;
  createSink: grpc.handleUnaryCall<google_logging_v2_logging_config_pb.CreateSinkRequest, google_logging_v2_logging_config_pb.LogSink>;
  updateSink: grpc.handleUnaryCall<google_logging_v2_logging_config_pb.UpdateSinkRequest, google_logging_v2_logging_config_pb.LogSink>;
  deleteSink: grpc.handleUnaryCall<google_logging_v2_logging_config_pb.DeleteSinkRequest, google_protobuf_empty_pb.Empty>;
  listExclusions: grpc.handleUnaryCall<google_logging_v2_logging_config_pb.ListExclusionsRequest, google_logging_v2_logging_config_pb.ListExclusionsResponse>;
  getExclusion: grpc.handleUnaryCall<google_logging_v2_logging_config_pb.GetExclusionRequest, google_logging_v2_logging_config_pb.LogExclusion>;
  createExclusion: grpc.handleUnaryCall<google_logging_v2_logging_config_pb.CreateExclusionRequest, google_logging_v2_logging_config_pb.LogExclusion>;
  updateExclusion: grpc.handleUnaryCall<google_logging_v2_logging_config_pb.UpdateExclusionRequest, google_logging_v2_logging_config_pb.LogExclusion>;
  deleteExclusion: grpc.handleUnaryCall<google_logging_v2_logging_config_pb.DeleteExclusionRequest, google_protobuf_empty_pb.Empty>;
  getCmekSettings: grpc.handleUnaryCall<google_logging_v2_logging_config_pb.GetCmekSettingsRequest, google_logging_v2_logging_config_pb.CmekSettings>;
  updateCmekSettings: grpc.handleUnaryCall<google_logging_v2_logging_config_pb.UpdateCmekSettingsRequest, google_logging_v2_logging_config_pb.CmekSettings>;
  getSettings: grpc.handleUnaryCall<google_logging_v2_logging_config_pb.GetSettingsRequest, google_logging_v2_logging_config_pb.Settings>;
  updateSettings: grpc.handleUnaryCall<google_logging_v2_logging_config_pb.UpdateSettingsRequest, google_logging_v2_logging_config_pb.Settings>;
  copyLogEntries: grpc.handleUnaryCall<google_logging_v2_logging_config_pb.CopyLogEntriesRequest, google_longrunning_operations_pb.Operation>;
}

export class ConfigServiceV2Client extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listBuckets(argument: google_logging_v2_logging_config_pb.ListBucketsRequest, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.ListBucketsResponse>): grpc.ClientUnaryCall;
  listBuckets(argument: google_logging_v2_logging_config_pb.ListBucketsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.ListBucketsResponse>): grpc.ClientUnaryCall;
  listBuckets(argument: google_logging_v2_logging_config_pb.ListBucketsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.ListBucketsResponse>): grpc.ClientUnaryCall;
  getBucket(argument: google_logging_v2_logging_config_pb.GetBucketRequest, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogBucket>): grpc.ClientUnaryCall;
  getBucket(argument: google_logging_v2_logging_config_pb.GetBucketRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogBucket>): grpc.ClientUnaryCall;
  getBucket(argument: google_logging_v2_logging_config_pb.GetBucketRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogBucket>): grpc.ClientUnaryCall;
  createBucket(argument: google_logging_v2_logging_config_pb.CreateBucketRequest, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogBucket>): grpc.ClientUnaryCall;
  createBucket(argument: google_logging_v2_logging_config_pb.CreateBucketRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogBucket>): grpc.ClientUnaryCall;
  createBucket(argument: google_logging_v2_logging_config_pb.CreateBucketRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogBucket>): grpc.ClientUnaryCall;
  updateBucket(argument: google_logging_v2_logging_config_pb.UpdateBucketRequest, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogBucket>): grpc.ClientUnaryCall;
  updateBucket(argument: google_logging_v2_logging_config_pb.UpdateBucketRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogBucket>): grpc.ClientUnaryCall;
  updateBucket(argument: google_logging_v2_logging_config_pb.UpdateBucketRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogBucket>): grpc.ClientUnaryCall;
  deleteBucket(argument: google_logging_v2_logging_config_pb.DeleteBucketRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteBucket(argument: google_logging_v2_logging_config_pb.DeleteBucketRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteBucket(argument: google_logging_v2_logging_config_pb.DeleteBucketRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  undeleteBucket(argument: google_logging_v2_logging_config_pb.UndeleteBucketRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  undeleteBucket(argument: google_logging_v2_logging_config_pb.UndeleteBucketRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  undeleteBucket(argument: google_logging_v2_logging_config_pb.UndeleteBucketRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  listViews(argument: google_logging_v2_logging_config_pb.ListViewsRequest, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.ListViewsResponse>): grpc.ClientUnaryCall;
  listViews(argument: google_logging_v2_logging_config_pb.ListViewsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.ListViewsResponse>): grpc.ClientUnaryCall;
  listViews(argument: google_logging_v2_logging_config_pb.ListViewsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.ListViewsResponse>): grpc.ClientUnaryCall;
  getView(argument: google_logging_v2_logging_config_pb.GetViewRequest, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogView>): grpc.ClientUnaryCall;
  getView(argument: google_logging_v2_logging_config_pb.GetViewRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogView>): grpc.ClientUnaryCall;
  getView(argument: google_logging_v2_logging_config_pb.GetViewRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogView>): grpc.ClientUnaryCall;
  createView(argument: google_logging_v2_logging_config_pb.CreateViewRequest, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogView>): grpc.ClientUnaryCall;
  createView(argument: google_logging_v2_logging_config_pb.CreateViewRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogView>): grpc.ClientUnaryCall;
  createView(argument: google_logging_v2_logging_config_pb.CreateViewRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogView>): grpc.ClientUnaryCall;
  updateView(argument: google_logging_v2_logging_config_pb.UpdateViewRequest, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogView>): grpc.ClientUnaryCall;
  updateView(argument: google_logging_v2_logging_config_pb.UpdateViewRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogView>): grpc.ClientUnaryCall;
  updateView(argument: google_logging_v2_logging_config_pb.UpdateViewRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogView>): grpc.ClientUnaryCall;
  deleteView(argument: google_logging_v2_logging_config_pb.DeleteViewRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteView(argument: google_logging_v2_logging_config_pb.DeleteViewRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteView(argument: google_logging_v2_logging_config_pb.DeleteViewRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  listSinks(argument: google_logging_v2_logging_config_pb.ListSinksRequest, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.ListSinksResponse>): grpc.ClientUnaryCall;
  listSinks(argument: google_logging_v2_logging_config_pb.ListSinksRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.ListSinksResponse>): grpc.ClientUnaryCall;
  listSinks(argument: google_logging_v2_logging_config_pb.ListSinksRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.ListSinksResponse>): grpc.ClientUnaryCall;
  getSink(argument: google_logging_v2_logging_config_pb.GetSinkRequest, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogSink>): grpc.ClientUnaryCall;
  getSink(argument: google_logging_v2_logging_config_pb.GetSinkRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogSink>): grpc.ClientUnaryCall;
  getSink(argument: google_logging_v2_logging_config_pb.GetSinkRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogSink>): grpc.ClientUnaryCall;
  createSink(argument: google_logging_v2_logging_config_pb.CreateSinkRequest, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogSink>): grpc.ClientUnaryCall;
  createSink(argument: google_logging_v2_logging_config_pb.CreateSinkRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogSink>): grpc.ClientUnaryCall;
  createSink(argument: google_logging_v2_logging_config_pb.CreateSinkRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogSink>): grpc.ClientUnaryCall;
  updateSink(argument: google_logging_v2_logging_config_pb.UpdateSinkRequest, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogSink>): grpc.ClientUnaryCall;
  updateSink(argument: google_logging_v2_logging_config_pb.UpdateSinkRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogSink>): grpc.ClientUnaryCall;
  updateSink(argument: google_logging_v2_logging_config_pb.UpdateSinkRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogSink>): grpc.ClientUnaryCall;
  deleteSink(argument: google_logging_v2_logging_config_pb.DeleteSinkRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteSink(argument: google_logging_v2_logging_config_pb.DeleteSinkRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteSink(argument: google_logging_v2_logging_config_pb.DeleteSinkRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  listExclusions(argument: google_logging_v2_logging_config_pb.ListExclusionsRequest, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.ListExclusionsResponse>): grpc.ClientUnaryCall;
  listExclusions(argument: google_logging_v2_logging_config_pb.ListExclusionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.ListExclusionsResponse>): grpc.ClientUnaryCall;
  listExclusions(argument: google_logging_v2_logging_config_pb.ListExclusionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.ListExclusionsResponse>): grpc.ClientUnaryCall;
  getExclusion(argument: google_logging_v2_logging_config_pb.GetExclusionRequest, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogExclusion>): grpc.ClientUnaryCall;
  getExclusion(argument: google_logging_v2_logging_config_pb.GetExclusionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogExclusion>): grpc.ClientUnaryCall;
  getExclusion(argument: google_logging_v2_logging_config_pb.GetExclusionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogExclusion>): grpc.ClientUnaryCall;
  createExclusion(argument: google_logging_v2_logging_config_pb.CreateExclusionRequest, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogExclusion>): grpc.ClientUnaryCall;
  createExclusion(argument: google_logging_v2_logging_config_pb.CreateExclusionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogExclusion>): grpc.ClientUnaryCall;
  createExclusion(argument: google_logging_v2_logging_config_pb.CreateExclusionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogExclusion>): grpc.ClientUnaryCall;
  updateExclusion(argument: google_logging_v2_logging_config_pb.UpdateExclusionRequest, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogExclusion>): grpc.ClientUnaryCall;
  updateExclusion(argument: google_logging_v2_logging_config_pb.UpdateExclusionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogExclusion>): grpc.ClientUnaryCall;
  updateExclusion(argument: google_logging_v2_logging_config_pb.UpdateExclusionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.LogExclusion>): grpc.ClientUnaryCall;
  deleteExclusion(argument: google_logging_v2_logging_config_pb.DeleteExclusionRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteExclusion(argument: google_logging_v2_logging_config_pb.DeleteExclusionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteExclusion(argument: google_logging_v2_logging_config_pb.DeleteExclusionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  getCmekSettings(argument: google_logging_v2_logging_config_pb.GetCmekSettingsRequest, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.CmekSettings>): grpc.ClientUnaryCall;
  getCmekSettings(argument: google_logging_v2_logging_config_pb.GetCmekSettingsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.CmekSettings>): grpc.ClientUnaryCall;
  getCmekSettings(argument: google_logging_v2_logging_config_pb.GetCmekSettingsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.CmekSettings>): grpc.ClientUnaryCall;
  updateCmekSettings(argument: google_logging_v2_logging_config_pb.UpdateCmekSettingsRequest, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.CmekSettings>): grpc.ClientUnaryCall;
  updateCmekSettings(argument: google_logging_v2_logging_config_pb.UpdateCmekSettingsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.CmekSettings>): grpc.ClientUnaryCall;
  updateCmekSettings(argument: google_logging_v2_logging_config_pb.UpdateCmekSettingsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.CmekSettings>): grpc.ClientUnaryCall;
  getSettings(argument: google_logging_v2_logging_config_pb.GetSettingsRequest, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.Settings>): grpc.ClientUnaryCall;
  getSettings(argument: google_logging_v2_logging_config_pb.GetSettingsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.Settings>): grpc.ClientUnaryCall;
  getSettings(argument: google_logging_v2_logging_config_pb.GetSettingsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.Settings>): grpc.ClientUnaryCall;
  updateSettings(argument: google_logging_v2_logging_config_pb.UpdateSettingsRequest, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.Settings>): grpc.ClientUnaryCall;
  updateSettings(argument: google_logging_v2_logging_config_pb.UpdateSettingsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.Settings>): grpc.ClientUnaryCall;
  updateSettings(argument: google_logging_v2_logging_config_pb.UpdateSettingsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_logging_v2_logging_config_pb.Settings>): grpc.ClientUnaryCall;
  copyLogEntries(argument: google_logging_v2_logging_config_pb.CopyLogEntriesRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  copyLogEntries(argument: google_logging_v2_logging_config_pb.CopyLogEntriesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  copyLogEntries(argument: google_logging_v2_logging_config_pb.CopyLogEntriesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
}
