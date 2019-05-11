# JunoX Softsynth Emulator

A really not great emulator of a Roland Juno 60.

[Demo](https://dzannotti.github.io/junox/)

## Licence GPL

## Code
The code is pretty horrible, untested and unoptomized. Eventually i might (or might not) clean it up.

Some code is from musicdsp.org, some other from stevengoldberg/juno106 and mmontag/dx7-synth-js

## Tasks

Run with `yarn [script]`

script              | description
--------------------|---------------------------------
`start`             | run the development environment in [http://localhost:8080](http://localhost:8080)
`build`             | generate a production build
`deploy`            | deploys to gh-pages
`lint`              | lint the project
`stats`             | produces a stats file for [Webpack Visualizer](https://chrisbateman.github.io/webpack-visualizer/)

## Running local dev version
Prerequisites
Node > 9
yarn
```
yarn
yarn start
```

## Deploy
Prerequisites
Node > 9
```
yarn
yarn build
yarn deploy
``
