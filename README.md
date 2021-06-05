[![NPM](https://nodei.co/npm/discord-services.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/discord-services)

# discord-services
 https://discordservices.net API wrapper for Node.js

## Installation
Simply run `npm i discord-services` (or `yarn add discord-services`)

## Usage
(Sync)

Posting Bot Server Count:
```js
const DS = require('discord-services');
const ds = new DS('API TOKEN');

ds.postStats('SERVER_COUNT', 'BOT_ID').then(() => {
    console.log('Successfully updated server count.')
}).catch((err) => {
    console.error(err)
});
```

Posting Bot News:
**note: if `true` then the news is for a bot issue or maintenance.**
```js
const DS = require('discord-services');
const ds = new DS('API TOKEN');

ds.postNews('BOT_ID', 'NEWS_TITLE', 'NEWS_CONTENT', false).then(() => {
    console.log('Successfully posted news.')
}).catch((err) => {
    console.error(err)
});
```

Posting Bot commads:
 **May not work blame the API.**

```js
const DS = require('discord-services');
const ds = new DS('API TOKEN');

ds.postCommands('BOT_ID', 'COMMAND_NAME', 'DESCRIPTION', 'COMMAND_CATEGORY').then(() => {
    console.log('Successfully posted command.')
}).catch((err) => {
    console.error(err)
});
```

(Async)

Posting Bot Server Count
```js
const DS = require('discord-services');
const ds = new DS('API TOKEN');

await ds.postStats('SERVER_COUNT', 'BOT_ID')
```

Posting Bot News:
```js
const DS = require('discord-services');
const ds = new DS('API TOKEN');

await ds.postNews('BOT_ID', 'NEWS_TITLE', 'NEWS_CONTENT', false)
```

Posting Bot commads:
```js
const DS = require('discord-services');
const ds = new DS('API TOKEN');

await ds.postCommands('BOT_ID', 'COMMAND_NAME', 'DESCRIPTION', 'COMMAND_CATEGORY')
```


## License
[MIT](LICENSE)
