type RequestErrorBody = {
	status: "error";
	code: string;
	message: string;
};

class NewsApiError extends Error {
	status;
	details;
	constructor(message: string, status: number, details: RequestErrorBody) {
		super(message);
		this.status = status;
		this.details = details;
	}
}

const API_URL = "https://newsapi.org/v2";

const request = async (endpoint: string, method: "GET" = "GET") => {
	const response = await fetch(API_URL + endpoint, {
		headers: {
			"X-Api-Key": process.env.EXPO_PUBLIC_NEWSAPI_API_KEY,	
		},
	});

	const body = await response.json().catch(() => null);

	if (!response.ok) {
		throw new NewsApiError(body.code, response.status, response.body as unknown as RequestErrorBody);
	}

	return body;
};

export type Article = {
	source: {
		id: string;
		name: string;
	};
	author: string;
	title: string;
	description: string;
	url: string;
	urlToImage: string;
	publishedAt: string;
	content: string;
};

const get_top_headlines = async (pageSize = 10, page: number) => {
	return request(`/top-headlines?pageSize=${pageSize}&page=${page}&sortBy=popularity&q=tech`) as Promise<{
		status: "ok";
		totalResults: number;
		articles: Article[];
	}>;
};

const NewsApi = { get_top_headlines, NewsApiError };
export default NewsApi;
