import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { ToastMessageModel } from "./models/toast-message.model";

@Injectable({
	providedIn: "root",
})
export class ToastProviderService {
	private toastSubject = new Subject<ToastMessageModel>();
	toastState$ = this.toastSubject.asObservable();

	constructor() {}

	showToast(
		message: string,
		type: "success" | "error" | "info" | "warning" = "info"
	) {
		const toast = {
			id: new Date().getTime().toString(),
			message,
			type,
		};

		this.toastSubject.next(toast);

		return toast.id;
	}

	clearToast(toastId: string) {
		this.toastSubject.next({ id: toastId, message: "", type: "info" });
	}
}
