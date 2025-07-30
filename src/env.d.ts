/// <reference types="vite/client" />

const __ENV: {
	VITE_SERVER_API?: string
	VITE_PROJECT_NAME?: string
	VITE_TRADER_DEFERRED_SETTLE_DELAY?: string
	VITE_PROJECT_URL?: string
}

interface ImportMetaEnv {
	// Logger
	VITE_LOG_LEVEL?: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
