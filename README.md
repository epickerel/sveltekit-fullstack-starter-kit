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

Get your `.env` configured with at least the `MONGODB_URL`, then:

``` zsh
yarn
yarn prisma generate
yarn prisma db push
```

After you login and have a user ID in the `users` collection, create a couple of documents in `stashitems` such as:

``` json
[{
    "name" : "Old sock",
    "location" : "On ivory pedestal",
    "userId": "your-user-id"
},
{
    "name" : "ESP32 thingy",
    "location" : "Under doormat",
    "userId": "your-user-id"
}]
```

## Contributing

Collaborators are more than welcome. Feel free to fork, open an issue or contact me on Discord. Know that there's nothing
in this project yet set in stone, so course corrections are gratefully accepted.

## Current plans

Authentication is working with GitHub and Discord through Lucia. However, I'm still in search of the way to unify the same oauth user coming from different parties.

The hope was to unify client and server calls to the API from the non-api routes; however, forwarding the session within the server is unclear at the moment. Therefore, the abstracted CRUD methods which the routes call are called directly by the server. Clients, including external ones with authentication, should be able to fetch from the api route directly for indentical results.

## Attributions

Cheers to:

- [Pilcrow](https://pilcrow.vercel.app/) for Lucia and the examples for Sveltekit/github login.
- [Gustavo](https://www.gustavocadev.me/) for a working example of how to get MongoDb integrated with Lucia
