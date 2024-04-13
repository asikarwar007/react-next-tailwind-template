export const siteSettings = {
	siteName: "Voter Search",
	node_env: process.env.NODE_ENV,
	name: "Electoral Roll Finder",
	description: "Your Gateway to Efficient Electoral Data Searches",
	domain: "electoralvotersearch.com",
	canonical: "https://electoralvotersearch.com",
	icons: '/img/logo.png',
	keywords: ["voter search"],
	mainNav: [
		{
			title: "Home",
			href: "/",
		},
	],
	social: {
		github: 'https://github.com/asikarwar007/electoral-roll-finder',
		twitter: '',
		facebook: '',
		instagram: '',
	},
	creator: "Public Pacific",
	author: [{
		name: "Public Pacific",
		url: "https://publicpacific.com/",
		address: "",
	}, {
		name: "Abhimanyu sikarwar",
		url: "https://abhimanyusikarwar.com/",
		address: "",
	}],
	logo: {
		url: "/img/logo.png",
		alt: 'Electoral Roll ',
		href: "/",
		width: 95,
		height: 30,
	},
	defaultLanguage: "en",
	appleWebApp: { capable: true, title: "Electoral Roll", statusBarStyle: "black-translucent" },
	verification: { },
	currencyCode: "INR",
};