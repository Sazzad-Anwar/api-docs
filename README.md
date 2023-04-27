# api-docs

Api-docs is a module that will give you an interface for making api documentation and make request. In express we need to write a lot of parameters in commented format for an API.

## Install

```sh
npm install @sazzad/api-docs
```

Or installing with yarn? `yarn add @sazzad/api-docs` <br>
Or installing with pnpm? `pnpm add @sazzad/api-docs`

## Usage

Create a `.json` file in the root of your project: <br>
`apiDocs.json`

```json
[]
```

As early as possible in your application where your server is listening to a port import this package:

```javascript
const { serveApiDocs } = require('@sazzad/api-docs');
```

.. or using ES6?

```typescript
import { serveApiDocs } from '@sazzad/api-docs';
```

Now call the `serveApiDocs` function below of your routes declaration and just before your app listening function

```javascript
const express = require('express');
const { serveApiDocs } = require('@sazzad/api-docs');
const cors = require('cors');
const app = express();
const path = require('path');
const dir = path.join(__dirname, 'DIR_OF_YOUR_JSON_THAT_YOU_HAVE_CREATED_BEFORE');
const port = process.env.PORT || 5000;

app.use(cors());
app.get('/', (req, res) => {
    res.json({ message: 'App is working' });
});

serveApiDocs(app, dir, 'production');
app.listen(port, () => console.log(`Server is running on port ${port}`));
```

Or using ES6?

```typescript
import express, { Express, Request, Response } from 'express';
import { serveApiDocs } from '@sazzad/api-docs';
import cors from 'cors';
import path from 'path';

const dir: string = path.join(__dirname, 'DIR_OF_YOUR_JSON_THAT_YOU_HAVE_CREATED_BEFORE');
const port: string = process.env.PORT || 5000;
const app: Express = express();

app.use(cors());
app.get('/', (req, res) => {
    res.json({ message: 'App is working' });
});

serveApiDocs(app, dir, 'production');
app.listen(port, () => console.log(`Server is running on port ${port}`));
```

Here `development` parameter will give the edit access to the api collections, api details and delete the api collection. But `production` parameter will not give that access.

Yeah! that's it. Now when you run your express app the api docs will also be running on `/docs` route.

```
[your app running route:port]/docs
```
