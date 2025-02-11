import { HttpClient } from "@angular/common/http";

import { ApiProxyService } from "@services/api/api-proxy.service";

export abstract class V1ApiProxyService<
	TData extends object,
	TPostData,
	TPutData,
> extends ApiProxyService<TData, TPostData, TPutData> {
	protected constructor(http: HttpClient) {
		super(http);
	}

	get version() {
		return "v1";
	}
}
