# sveltekit-starter-kit

This is a work in progress, the goal of which is to create a sveltekit fullstack starter pack ready to quickly
construct and deploy web applications involving user authentication and per-user database storage.

## The state of Sveltekit

At present (25/02/23), most Sveltekit examples which demonstrate how to build the important parts of a fullstack
app apply to pre-1.0 versions. This includes database integration, API structuring for CRUD operations and other
vital features for learning how to assemble an application with Sveltekit 1.0. While ultimately something like
what this repo aims to offer will hopefully be an option on initialising a Sveletekit project, it is my hope to
fill the gap in the meantime.

I also hope that my contributions will lead to discussion as to what the best practices actually are for the
features in question.

## Basic Goals

- Provide an authenticated Sveltekit API for consumption both by the Sveltekit app and potentially external integrations
- Offer CRUD and search operations to Mongodb through the API
- Provide an authenticated Sveltekit client and server consumer of the API

### Nice to haves

- Migration support that can share sveltekit code for where similar logic is needed
- Task/harness support with similar features

## Setting up

You'll need a mongodb with a single collection, StashItems. Here's a tidbit of simple sample data:

``` json
[{
    "name" : "Old sock",
    "location" : "On ivory pedestal"
},
{
    "name" : "ESP32 thingy",
    "location" : "Under doormat"
}]
```

## Contributing

Collaborators are more than welcome. Feel free to fork, open an issue or contact me on Discord. Know that there's nothing
in this project yet set in stone, so course corrections are gratefully accepted.

## Current plans

Authentication is working with GitHub (and untested with Discord); however, it's presently unclear how to consume this
within the server API; not only for authentication, but for purposes of querying the user's documents only. Once
authentication is introduced, then fleshing out the rest of the CRUD will be imminent.

Also of concern is the `fetch` pattern for URLs relative to the present host. At the moment this is hardcoded to the
standard localhost and port.

Many current examples exist of Svelte forms, so implementing those is a lower priority at the moment (though create at
least would help populate data until a seed migration is ready).
