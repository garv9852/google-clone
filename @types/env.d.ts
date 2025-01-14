declare global {
	namespace NodeJS {
		interface ProcessEnv {
            EXPO_PUBLIC_NEWSAPI_API_KEY:string
		}
	}
}

export {};
