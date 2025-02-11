import { Component, OnInit } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { AuthService, User } from "@auth0/auth0-angular";
import { NgClass } from "@angular/common";
import { initFlowbite } from "flowbite";

import { SafeHtmlPipe } from "@pipes/safe-html/safe-html.pipe";
import { ToastProviderService } from "@services/toast-provider/toast-provider.service";
import { LoginButtonComponent } from "@components/login-button/login-button.component";
import { ToastComponent } from "@components/toast/toast.component";

type SidebarLink = {
	path: `/${string}`;
	iconPath: `<path d="${string} stroke="${string}" stroke-linecap="${string}" stroke-width="${number}" />`;
	title: string;
};

const sidebarLinks: Array<SidebarLink> = [
	{
		path: "/characters",
		iconPath: `<path d="M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5" stroke="currentColor" stroke-linecap="round" stroke-width="2" />`,
		title: "Characters",
	},
	{
		path: "/classes",
		iconPath: `<path d="M12 6v6m0 0v6m0-6h6m-6 0H6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />`,
		title: "Classes",
	},
	// {
	// 	path: "/sessions",
	// 	iconPath: `<path d="M19 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm0 0-4 4m5 0H4m1 0 4-4m1 4 4-4m-4 7v6l4-3-4-3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />`,
	// 	title: "Playing Sessions",
	// 	loggedInOnly: true,
	// },
];

@Component({
	selector: "app-root",
	imports: [
		RouterLink,
		NgClass,
		RouterLinkActive,
		SafeHtmlPipe,
		RouterOutlet,
		LoginButtonComponent,
		ToastComponent,
	],
	providers: [ToastProviderService],
	standalone: true,
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css",
})
export class AppComponent implements OnInit {
	loggedInUser: User | null = null;
	isUserDropdownOpen = false;
	sidebarLinks = sidebarLinks;

	constructor(private authService: AuthService) {}

	get auth() {
		return this.authService;
	}

	ngOnInit() {
		initFlowbite();

		this.authService.user$.subscribe((user) => {
			if (user) {
				this.loggedInUser = user;
			}
		});
	}

	toggleUserDropdown() {
		this.isUserDropdownOpen = !this.isUserDropdownOpen;
	}
}
