import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";

const API_URL = "https://localhost:7131/api";

function mapDates<TData extends object>(data: TData): TData {
	const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(.\d{3})?Z$/;

	Object.entries(data).forEach(([key, value]) => {
		if (typeof value === "string" && isoDateRegex.test(value)) {
			// @ts-ignore
			data[key] = new Date(value);
		} else if (typeof value === "object") {
			// @ts-ignore
			data[key] = mapDates(value);
		} else if (Array.isArray(value)) {
			// @ts-ignore
			data[key] = value.map((item) => mapDates(item));
		} else {
			// @ts-ignore
			data[key] = value;
		}
	});

	return data;
}

export abstract class ApiProxyService<
	TData extends object,
	TPostData,
	TPutData,
> {
	readonly baseUrl = API_URL;

	protected constructor(protected http: HttpClient) {}

	abstract get path(): string;
	abstract get version(): string;

	transformDates(data: TData): TData {
		return mapDates(data);
	}

	get(): Observable<Array<TData>> {
		return this.http
			.get<Array<TData>>(`${this.baseUrl}/${this.version}/${this.path}`)
			.pipe(map((data) => data.map((item) => this.transformDates(item))));
	}

	getById(id: string): Observable<TData> {
		return this.http
			.get<TData>(`${this.baseUrl}/${this.version}/${this.path}/${id}`)
			.pipe(map((data) => this.transformDates(data)));
	}

	post(data: TPostData): Observable<TData> {
		return this.http
			.post<TData>(`${this.baseUrl}/${this.version}/${this.path}`, data)
			.pipe(map((data) => this.transformDates(data)));
	}

	put(id: string, data: TPutData): Observable<TData> {
		return this.http
			.put<TData>(`${this.baseUrl}/${this.version}/${this.path}/${id}`, data)
			.pipe(map((data) => this.transformDates(data)));
	}

	delete(id: string): Observable<void> {
		return this.http.delete<void>(
			`${this.baseUrl}/${this.version}/${this.path}/${id}`
		);
	}
}
