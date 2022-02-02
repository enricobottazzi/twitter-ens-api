# twitter-ens-api

You input a twitter handle and you get all the ENS names (such as _vitalik.eth_) followed by that person on Twitter inside an array. Simple AF.

## Installation

``` npm install twitter-ens-api ```

## Usage 

In the example I'm retrieving all the ENS accounts followed by [@backaes](https://twitter.com/backaes) on Twitter. The authToken has to be generated via Twitter Developer Platform , [here](https://developer.twitter.com/en/docs/authentication/oauth-2-0/bearer-tokens#:~:text=Login%20to%20your%20Twitter%20account,Bearer%20Token%20on%20this%20page.)'s a guide to do so. 
The authToken I used in the example has been revoked and is not gonna work

```

const ensNamesFollowings = require("twitter-ens-api")

const twitterHandle = 'backaes'
const authToken = 'Bearer AAAAAAAAAAAAAAAAAAAAAM34YAEAAAAAqg%2F1%2F77iuq5QSMI2Iu5zzJwUJxk%3DFLHrxnCuZZosMVIn5gOR3NW0wJd5l0xSmu0d7xxvhNcZHMWswJ'
    
console.log(await ensNamesFollowings(twitterHandle, authToken))

// [
  'bertani.eth',        'jaydrainjr.eth',
  'davidecrapis.eth',   'JoyceLai.eth',
  'lennysan.eth',       'eth-leaderboard.eth',
  'sammybauch.eth',     'dame.eth',
  'ped.eth',            'cantino.eth',
  'brantly.eth',        'sha.eth',
  'basche42.eth',       'bored.eth',
  'defluencer.eth',     'sriramk.eth',
  'benahorowitz.eth',   'andrewchen.eth',
  'AriannaSimpson.eth', 'tracheopteryx.eth',
  'erto.eth',           'rabbitholegg.eth',
  'gaby.eth',           'Haines.eth',
  'Coopahtroopa.eth',   'iwritecopy.eth',
  'carra.eth',          'cdixon.eth',
  'rsa.eth',            'richerdIntern.eth',
  'AlexisOhanian.eth',  'garrytan.eth',
  'bobbyong.eth',       'gaus.eth',
  'mariano.eth',        'stani.eth',
  'barmstrong.eth',     'defidad.eth',
  'sassal.eth',         'finematics.eth',
  'vitalik.eth'
]

``` 