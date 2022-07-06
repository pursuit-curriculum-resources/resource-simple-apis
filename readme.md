# Simple APIs

This server contains multiple endpoints for simple data. All of these routes are limited to `GET` requests.

## Implementation

This server is created using the [`json-server`](https://www.npmjs.com/package/json-server) NPM package.

Some of the data came from the following sites:

- [DummyJSON](https://dummyjson.com/)
- [The Sports DB](https://www.thesportsdb.com/api.php)

### Resources

The following resources exist:

- Colors: `/api/colors`
- Dinosaurs: `/api/dinosaurs`
- Products: `/api/products`
- Quotes: `/api/quotes`
- Sports: `/api/sports`

## Installation

1. Clone the repository.
1. `npm install`
1. `npm run dev`

## Deployment with Heroku

1. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).
1. Login to your Heroku CLI with `heroku login`.
1. `heroku create`
1. `git push heroku main`
