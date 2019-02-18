# clap

## Requirements

- nodejs
- npm

## Development

- [OPTIONAL] Set google analytics code
- Install packages and run app

### [OPTIONAL] Set google analytics code

```sh
$ cp .envrc.sample .envrc
```

Then please fill `GOOGLE_ANALYTICS_CODE` if you want.

## Load `.envrc`

Load `.envrc` like following command.

```sh
$ source .envrc
```

I recommend to use `direnv`. Please check [here about direnv](https://direnv.net/).

### Install packages and run app

```sh
$ npm install
$ npm run dev
```

## Performance

### SpeedTracker

https://speedtracker.org/

Dashboard: https://khirayama.github.io/speedtracker/
Run test: `npm run speedtracker`

### webhint

https://webhint.io/

Dashboard: Nothing
Run test: `npm run hint` with running local server at port 3030

## Refs

https://docs.google.com/spreadsheets/d/1qWS6Fyt382n3UsOyRX1ZKcfQWmbKrZuyARP2NH08H34/edit?usp=sharing
