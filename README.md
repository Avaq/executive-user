# Node Executive User

[![Greenkeeper badge](https://badges.greenkeeper.io/Avaq/executive-user.svg)](https://greenkeeper.io/)

A small wrapper over `process.setuid` and `process.setgid`.

## Install

```sh
npm install --save executive-user
```

## Usage

```js
var http = require('http');
var executiveUser = require('executive-user');
http.createServer(/**/).listen(3000, function(){
  executiveUser('node', 'node');
});
```
