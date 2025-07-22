interface Settings {
	title: string;
	brand_list: object;
	mallName: string;
	userSession: string;
	layout: string;
	layoutOptions: {
		useHeader: boolean;
		useFooter: boolean;
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
        title: "Pulmuone Mall App",
        brand_list: {
                ORGA: "orga",
                PULMUONE: "pulmuone",
                GREENJUICE: "greenjuice",
        },
        mallName: "PulmuoneMall",
        userSession: "",
        layout: "default",
        layoutOptions: {
                useHeader: true,
                useFooter: true,
		title: "풀무원#",
		headerType: "sub",
		brand: "MALL_DIV.PULMUONE",
		category: null,
		color: "black",
		buttons: [],
		actions: [],
		background: "",
		news: false,
	},
};
