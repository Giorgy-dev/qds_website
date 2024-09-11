import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","assets/.DS_Store","assets/graphics/chirale.svg","assets/graphics/connection.svg","assets/graphics/contrasto.svg","assets/graphics/determinazione.svg","assets/graphics/espandi.svg","assets/graphics/expand.svg","assets/graphics/expand_in.svg","assets/graphics/expand_out.svg","assets/graphics/expand_us.svg","assets/graphics/pen.svg","assets/graphics/pulizia.svg","assets/graphics/sfondo.svg","assets/img/stock_portrait.jpg","assets/img/stock_portrait.webp","assets/logo/logo.svg","assets/logo/logo_extended.svg","assets/logo/logo_grid.svg","assets/logo/logo_partial.svg","assets/logo/logo_partial_white.svg","assets/logo/text.svg","assets/logo/text_extended.svg","assets/video/.DS_Store","assets/video/branding.mp4","assets/video/branding_stock.mp4","assets/video/grafica.mp4","assets/video/sounddesign.mp4","assets/video/sounddesign2.mp4","favicon.png","fonts/.DS_Store","fonts/Acid_Grotesk/.DS_Store","fonts/Acid_Grotesk/acid-grotesk-black.otf","fonts/Acid_Grotesk/acid-grotesk-black.ttf","fonts/Acid_Grotesk/acid-grotesk-bold.eot","fonts/Acid_Grotesk/acid-grotesk-bold.otf","fonts/Acid_Grotesk/acid-grotesk-bold.woff"]),
	mimeTypes: {".svg":"image/svg+xml",".jpg":"image/jpeg",".webp":"image/webp",".mp4":"video/mp4",".png":"image/png",".otf":"font/otf",".ttf":"font/ttf",".woff":"font/woff"},
	_: {
		client: {"start":"_app/immutable/entry/start.fxwcssN6.js","app":"_app/immutable/entry/app.3_bnD2nW.js","imports":["_app/immutable/entry/start.fxwcssN6.js","_app/immutable/chunks/entry.DW9CrbW5.js","_app/immutable/chunks/scheduler.Bu15-wVR.js","_app/immutable/entry/app.3_bnD2nW.js","_app/immutable/chunks/scheduler.Bu15-wVR.js","_app/immutable/chunks/index.O99BFJ2P.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js')),
			__memo(() => import('../server/nodes/6.js')),
			__memo(() => import('../server/nodes/7.js')),
			__memo(() => import('../server/nodes/8.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/branding",
				pattern: /^\/branding\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/fotografia",
				pattern: /^\/fotografia\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/grafica",
				pattern: /^\/grafica\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/mission",
				pattern: /^\/mission\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/sounddesign",
				pattern: /^\/sounddesign\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/uiuxdesign",
				pattern: /^\/uiuxdesign\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
