# Another Todo API

This is a simple todo API built with NestJS and PostgreSQL via Prisma ORM. It is a work in progress but it can be use as beta version. It is a simple API that allows you to create, read, update and delete todos. It also allows you to mark a todo as done or undone.

## Prerequisites

## Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Remaining Tasks

- [ ] authentication
- [ ] authorization
- [ ] tests
- [ ] CI/CD
- [ ] Dockerfile
- [ ] documentation
- [ ] error handling
- [ ] logging/monitoring
- [ ] validation
- [ ] security
- [ ] performance
- [ ] scalability
- [ ] caching
- [ ] rate limiting

### Features

- [ ] pagination
- [ ] multimedia support
- [ ] markdown support
- [ ] tags
- [ ] categories

## API Documentation

The API documentation is available at [http://localhost:3000/graphql](http://localhost:3000/graphql) when the app is running. You can reach schema in file `schema.graphql`.

## Tech Stack

- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [GraphQL](https://graphql.org/)

## License

Nest is [MIT licensed](LICENSE).
