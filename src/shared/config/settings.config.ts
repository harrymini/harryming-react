interface Settings {
	brand_list: object;
	mallName: string;
	userSession: string;
	layout: string;
	layoutOptions: {
		useHeader: boolean;
		useFooter: boolean;
		device: string;
		title: string;
		headerType: string;
		brand: string;
		category: string | null;
		color: string;
		buttons: Array<string>;
		actions: Array<string>;
		background: string;
		news: boolean;
	};
}
export const APP_SETTINGS: Settings = {
	brand_list: {
		ORGA: "orga",
		PULMUONE: "pulmuone",
		GREENJUICE: "greenjuice",
	},
	mallName: "pulmuone",
	userSession: "",
	layout: "default",
	layoutOptions: {
		device: "desktop",
		useHeader: true,
		useFooter: true,
		title: "풀무원#",
		headerType: "sub",
		brand: "pulmuone",
		category: null,
		color: "black",
		buttons: [],
		actions: [],
		background: "",
		news: false,
	},
};
