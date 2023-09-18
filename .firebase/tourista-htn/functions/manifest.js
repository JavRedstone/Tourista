export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["logo.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.e5021c41.js","app":"_app/immutable/entry/app.063cd7e8.js","imports":["_app/immutable/entry/start.e5021c41.js","_app/immutable/chunks/scheduler.446313d3.js","_app/immutable/chunks/singletons.2cf4b3a3.js","_app/immutable/chunks/index.12519dbe.js","_app/immutable/entry/app.063cd7e8.js","_app/immutable/chunks/scheduler.446313d3.js","_app/immutable/chunks/index.c6fa1565.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
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
				id: "/details",
				pattern: /^\/details\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/distime",
				pattern: /^\/distime\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/distime/_server.ts.js'))
			},
			{
				id: "/explore",
				pattern: /^\/explore\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/nearby",
				pattern: /^\/nearby\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/nearby/_server.ts.js'))
			},
			{
				id: "/travel",
				pattern: /^\/travel\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
