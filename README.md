# Remix Portfolio

-   [Remix Docs](https://remix.run/docs)

## Development

From the terminal:

```sh
npm run dev
```

This starts the app in development mode, rebuilding assets on file changes.

## Deployment

First, build the app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

### Docker

Build the docker image:

```sh
docker build . -t image-name
```

Run the docker image:

```sh
docker run -p 3000:3000 -t image-name
```
