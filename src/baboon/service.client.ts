/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies,ts_nocheck,eslint_disable
// @generated from protobuf file "baboon/service.proto" (package "ttab.baboon", syntax proto3)
// tslint:disable
// @ts-nocheck
import { Print } from "./service";
import type { GetRenderedArticlesResponse } from "./service";
import type { GetRenderedArticlesRequest } from "./service";
import type { GetScribusInfoResponse } from "./service";
import type { GetScribusInfoRequest } from "./service";
import type { CopyArticleToFlowResponse } from "./service";
import type { CopyArticleToFlowRequest } from "./service";
import type { CreateFlowResponse } from "./service";
import type { CreateFlowRequest } from "./service";
import type { LayoutPreviewResponse } from "./service";
import type { LayoutPreviewRequest } from "./service";
import type { GetEditableArchiveResponse } from "./service";
import type { GetEditableArchiveRequest } from "./service";
import type { RenderArticleResponse } from "./service";
import type { RenderArticleRequest } from "./service";
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { Assets } from "./service";
import type { ListICCProfilesResponse } from "./service";
import type { ListICCProfilesRequest } from "./service";
import type { StoreICCProfileResponse } from "./service";
import type { StoreICCProfileRequest } from "./service";
import type { DeleteFontResponse } from "./service";
import type { DeleteFontRequest } from "./service";
import type { ListFontsResponse } from "./service";
import type { ListFontsRequest } from "./service";
import type { GetFontsResponse } from "./service";
import type { GetFontsRequest } from "./service";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { StoreFontResponse } from "./service";
import type { StoreFontRequest } from "./service";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service ttab.baboon.Assets
 */
export interface IAssetsClient {
    /**
     * @generated from protobuf rpc: StoreFont(ttab.baboon.StoreFontRequest) returns (ttab.baboon.StoreFontResponse);
     */
    storeFont(input: StoreFontRequest, options?: RpcOptions): UnaryCall<StoreFontRequest, StoreFontResponse>;
    /**
     * @generated from protobuf rpc: GetFonts(ttab.baboon.GetFontsRequest) returns (ttab.baboon.GetFontsResponse);
     */
    getFonts(input: GetFontsRequest, options?: RpcOptions): UnaryCall<GetFontsRequest, GetFontsResponse>;
    /**
     * @generated from protobuf rpc: ListFonts(ttab.baboon.ListFontsRequest) returns (ttab.baboon.ListFontsResponse);
     */
    listFonts(input: ListFontsRequest, options?: RpcOptions): UnaryCall<ListFontsRequest, ListFontsResponse>;
    /**
     * @generated from protobuf rpc: DeleteFont(ttab.baboon.DeleteFontRequest) returns (ttab.baboon.DeleteFontResponse);
     */
    deleteFont(input: DeleteFontRequest, options?: RpcOptions): UnaryCall<DeleteFontRequest, DeleteFontResponse>;
    /**
     * @generated from protobuf rpc: StoreICCProfile(ttab.baboon.StoreICCProfileRequest) returns (ttab.baboon.StoreICCProfileResponse);
     */
    storeICCProfile(input: StoreICCProfileRequest, options?: RpcOptions): UnaryCall<StoreICCProfileRequest, StoreICCProfileResponse>;
    /**
     * @generated from protobuf rpc: ListICCProfiles(ttab.baboon.ListICCProfilesRequest) returns (ttab.baboon.ListICCProfilesResponse);
     */
    listICCProfiles(input: ListICCProfilesRequest, options?: RpcOptions): UnaryCall<ListICCProfilesRequest, ListICCProfilesResponse>;
}
/**
 * @generated from protobuf service ttab.baboon.Assets
 */
export class AssetsClient implements IAssetsClient, ServiceInfo {
    typeName = Assets.typeName;
    methods = Assets.methods;
    options = Assets.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: StoreFont(ttab.baboon.StoreFontRequest) returns (ttab.baboon.StoreFontResponse);
     */
    storeFont(input: StoreFontRequest, options?: RpcOptions): UnaryCall<StoreFontRequest, StoreFontResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<StoreFontRequest, StoreFontResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetFonts(ttab.baboon.GetFontsRequest) returns (ttab.baboon.GetFontsResponse);
     */
    getFonts(input: GetFontsRequest, options?: RpcOptions): UnaryCall<GetFontsRequest, GetFontsResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetFontsRequest, GetFontsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: ListFonts(ttab.baboon.ListFontsRequest) returns (ttab.baboon.ListFontsResponse);
     */
    listFonts(input: ListFontsRequest, options?: RpcOptions): UnaryCall<ListFontsRequest, ListFontsResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<ListFontsRequest, ListFontsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: DeleteFont(ttab.baboon.DeleteFontRequest) returns (ttab.baboon.DeleteFontResponse);
     */
    deleteFont(input: DeleteFontRequest, options?: RpcOptions): UnaryCall<DeleteFontRequest, DeleteFontResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<DeleteFontRequest, DeleteFontResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: StoreICCProfile(ttab.baboon.StoreICCProfileRequest) returns (ttab.baboon.StoreICCProfileResponse);
     */
    storeICCProfile(input: StoreICCProfileRequest, options?: RpcOptions): UnaryCall<StoreICCProfileRequest, StoreICCProfileResponse> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<StoreICCProfileRequest, StoreICCProfileResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: ListICCProfiles(ttab.baboon.ListICCProfilesRequest) returns (ttab.baboon.ListICCProfilesResponse);
     */
    listICCProfiles(input: ListICCProfilesRequest, options?: RpcOptions): UnaryCall<ListICCProfilesRequest, ListICCProfilesResponse> {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept<ListICCProfilesRequest, ListICCProfilesResponse>("unary", this._transport, method, opt, input);
    }
}
/**
 * @generated from protobuf service ttab.baboon.Print
 */
export interface IPrintClient {
    /**
     * @generated from protobuf rpc: RenderArticle(ttab.baboon.RenderArticleRequest) returns (ttab.baboon.RenderArticleResponse);
     */
    renderArticle(input: RenderArticleRequest, options?: RpcOptions): UnaryCall<RenderArticleRequest, RenderArticleResponse>;
    /**
     * @generated from protobuf rpc: GetEditableArchive(ttab.baboon.GetEditableArchiveRequest) returns (ttab.baboon.GetEditableArchiveResponse);
     */
    getEditableArchive(input: GetEditableArchiveRequest, options?: RpcOptions): UnaryCall<GetEditableArchiveRequest, GetEditableArchiveResponse>;
    /**
     * LayoutPreview is used by the CLI tool to do preview rendering.
     *
     * @generated from protobuf rpc: LayoutPreview(ttab.baboon.LayoutPreviewRequest) returns (ttab.baboon.LayoutPreviewResponse);
     */
    layoutPreview(input: LayoutPreviewRequest, options?: RpcOptions): UnaryCall<LayoutPreviewRequest, LayoutPreviewResponse>;
    /**
     * @generated from protobuf rpc: CreateFlow(ttab.baboon.CreateFlowRequest) returns (ttab.baboon.CreateFlowResponse);
     */
    createFlow(input: CreateFlowRequest, options?: RpcOptions): UnaryCall<CreateFlowRequest, CreateFlowResponse>;
    /**
     * @generated from protobuf rpc: CopyArticleToFlow(ttab.baboon.CopyArticleToFlowRequest) returns (ttab.baboon.CopyArticleToFlowResponse);
     */
    copyArticleToFlow(input: CopyArticleToFlowRequest, options?: RpcOptions): UnaryCall<CopyArticleToFlowRequest, CopyArticleToFlowResponse>;
    /**
     * @generated from protobuf rpc: GetScribusInfo(ttab.baboon.GetScribusInfoRequest) returns (ttab.baboon.GetScribusInfoResponse);
     */
    getScribusInfo(input: GetScribusInfoRequest, options?: RpcOptions): UnaryCall<GetScribusInfoRequest, GetScribusInfoResponse>;
    /**
     * GetRenderedArticles allows a client to consume and download all finished renders.
     *
     * @generated from protobuf rpc: GetRenderedArticles(ttab.baboon.GetRenderedArticlesRequest) returns (ttab.baboon.GetRenderedArticlesResponse);
     */
    getRenderedArticles(input: GetRenderedArticlesRequest, options?: RpcOptions): UnaryCall<GetRenderedArticlesRequest, GetRenderedArticlesResponse>;
}
/**
 * @generated from protobuf service ttab.baboon.Print
 */
export class PrintClient implements IPrintClient, ServiceInfo {
    typeName = Print.typeName;
    methods = Print.methods;
    options = Print.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: RenderArticle(ttab.baboon.RenderArticleRequest) returns (ttab.baboon.RenderArticleResponse);
     */
    renderArticle(input: RenderArticleRequest, options?: RpcOptions): UnaryCall<RenderArticleRequest, RenderArticleResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<RenderArticleRequest, RenderArticleResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetEditableArchive(ttab.baboon.GetEditableArchiveRequest) returns (ttab.baboon.GetEditableArchiveResponse);
     */
    getEditableArchive(input: GetEditableArchiveRequest, options?: RpcOptions): UnaryCall<GetEditableArchiveRequest, GetEditableArchiveResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetEditableArchiveRequest, GetEditableArchiveResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * LayoutPreview is used by the CLI tool to do preview rendering.
     *
     * @generated from protobuf rpc: LayoutPreview(ttab.baboon.LayoutPreviewRequest) returns (ttab.baboon.LayoutPreviewResponse);
     */
    layoutPreview(input: LayoutPreviewRequest, options?: RpcOptions): UnaryCall<LayoutPreviewRequest, LayoutPreviewResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<LayoutPreviewRequest, LayoutPreviewResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: CreateFlow(ttab.baboon.CreateFlowRequest) returns (ttab.baboon.CreateFlowResponse);
     */
    createFlow(input: CreateFlowRequest, options?: RpcOptions): UnaryCall<CreateFlowRequest, CreateFlowResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<CreateFlowRequest, CreateFlowResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: CopyArticleToFlow(ttab.baboon.CopyArticleToFlowRequest) returns (ttab.baboon.CopyArticleToFlowResponse);
     */
    copyArticleToFlow(input: CopyArticleToFlowRequest, options?: RpcOptions): UnaryCall<CopyArticleToFlowRequest, CopyArticleToFlowResponse> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<CopyArticleToFlowRequest, CopyArticleToFlowResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetScribusInfo(ttab.baboon.GetScribusInfoRequest) returns (ttab.baboon.GetScribusInfoResponse);
     */
    getScribusInfo(input: GetScribusInfoRequest, options?: RpcOptions): UnaryCall<GetScribusInfoRequest, GetScribusInfoResponse> {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetScribusInfoRequest, GetScribusInfoResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * GetRenderedArticles allows a client to consume and download all finished renders.
     *
     * @generated from protobuf rpc: GetRenderedArticles(ttab.baboon.GetRenderedArticlesRequest) returns (ttab.baboon.GetRenderedArticlesResponse);
     */
    getRenderedArticles(input: GetRenderedArticlesRequest, options?: RpcOptions): UnaryCall<GetRenderedArticlesRequest, GetRenderedArticlesResponse> {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetRenderedArticlesRequest, GetRenderedArticlesResponse>("unary", this._transport, method, opt, input);
    }
}
