# Create Cloud Block
A boilerplate generator for building [Gutenberg Cloud](https://gutenbergcloud.org/) blocks.

This generator is inspired by both [Create React App](https://github.com/facebook/create-react-app) and [Create Guten Block](https://github.com/ahmadawais/create-guten-block). However, it is only intended to serve as a boilerplate and not a zero-configuration toolkit.

## Prerequisites

[Node](https://nodejs.org/en/download/) version 8.9 or higher
NPM version 5.5.1 or higher

## Overview

```
$ npx create-cloud-block my-block
$ cd my-block
```

You can now start editing the block.  Once you're ready you can follow the deployment steps.

### Steps to run Existing Blocks
```
$ npm install
$ cd `blockName`
$ npm install
$ npm start
```

## Deployment

```
$ npm run build
$ npm publish
```
