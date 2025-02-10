export type ToastMessageModel = {
	id: string;
	message: string;
	type: "success" | "error" | "info" | "warning";
};
