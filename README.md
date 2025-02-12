# CharactersListWeb

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.6.

## Prerequisites

Before you can build this project, you must have installed the following:

- [Node.js](https://nodejs.org/en/download/)
- [Angular CLI](https://angular.io/cli)
- [Git](https://git-scm.com/downloads)

## Installation

To install the project, clone the repository and install the dependencies:

```bash
git clone
cd WebApp
npm install
```

Then, make sure to have installed the [CharactersListAPI](https://github.com/Characters-List/API) and have it running.

When the API is running, you can generate the api proxy by running:

```bash
npm run gen-api <api-url>
```

with `<api-url>` being the URL where the API is running. For example:

```bash
npm run gen-api http://localhost:7131
```

This will generate the API proxy in the `src/app/api` directory.

After this, put the API URL in the `src/environments/environment.ts` file with all the necessary data. For example:

```typescript
import {Environment} from "./environment.model";

export const environment: Environment = {
	apiUrl: 'http://localhost:7131'
};
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
