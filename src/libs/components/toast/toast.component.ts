import { Component, OnInit } from "@angular/core";

import { ToastProviderService } from "@services/toast-provider/toast-provider.service";
import { ToastMessageModel } from "@services/toast-provider/models/toast-message.model";

@Component({
	selector: "app-toast",
	templateUrl: "./toast.component.html",
	styleUrls: ["./toast.component.css"],
})
export class ToastComponent implements OnInit {
	toasts: ToastMessageModel[] = [];

	constructor(private toastService: ToastProviderService) {}

	ngOnInit(): void {
		this.toastService.toastState$.subscribe((toast: ToastMessageModel) => {
			if (toast.message === "") {
				this.removeToast(toast.id);
				return;
			}

			this.toasts.push(toast);
			setTimeout(() => this.removeToast(toast.id), 3000);
		});
	}

	removeToast(id: string) {
		this.toasts = this.toasts.filter((t) => t.id !== id);
	}
}
