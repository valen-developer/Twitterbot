# Twitter bot

## Installation

First of all, we nedd install the dependencies, like ever:

```bash
npm install or yarn install
```

Next, install docker container db (mongodb):

```bash
docker-compose -f docker-compose.dev.yml up -d
```

Set enviroment vars: create a .env file (you can copy and modify the .env.template file).

Init in development mode: 

```bash
npm run dev or yarn run dev
```

## Fetch tweets from Twitter

To fetch tweets from twitter based on a keywork, should make a POST request to:

```bash
localhost:3000/api/v1/tweets/fetch?keyword={keyword}
```

## Search saved tweets in database:

To get tweet based on a serie of filters, we should make a POST request to:

```bash
localhost:3000/api/v1/tweets/search
```

Where the possible query params are:

```json
{
	content_contains?: string;
	content_starts_with?: string;
	content_ends_with?: string;
	createdAt_gt?: Date;
	createdAt_lt?: Date;
	createdAt_gte?: Date;
	createdAt_lte?: Date;
	retweetCount_gt?: number;
	retweetCount_lt?: number;
	retweetCount_gte?: number;
	retweetCount_lte?: number;
	favoriteCount_gt?: number;
	favoriteCount_lt?: number;
	favoriteCount_gte?: number;
	"user.name_contains"?: string;
	"user.name_starts_with"?: string;
	"user.screenName_contains"?: string;
	"user.screenName_starts_with"?: string;
}
```

Also, we can select some query params more:

```json
{
	sort_by: string;
	order: "asc" or "desc";
	size: number; // number or results we want
	from: number;
}
```

### TODO

- Add Api documentation (swagger)
- Aceptation tests
- Integration tests
- Refactor some parts of code
- OR in filters of search