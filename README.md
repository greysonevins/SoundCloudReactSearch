# SoundCloud Search Tracks README

## Getting Started--Setup
[This application is a modification and developed on Facebook's NPM toolkit `npm create-react-app`](https://github.com/facebookincubator/create-react-ap)

1. In your terminal, find project folder and run `npm install` or `npm i ` to download node_modules associated with this project

2. To start application run `npm start`

3. To run tests on application run `npm test`


## Understanding Project Setup

Search pulls up tracks related to query and on click
presents:

1. Random Gif associated with `track.genre` and `track.title` with Giphy's api

2. Pulls up Track Info with clickable links, etc

3. Shows List of users that favorited the track in order of `user.followers_count`

4. Shows Other Songs by Users if available

5. You can click on either a user or related song for  a new track and related objects to appear


## Set Backs and Others

**Users Who Favorited Track**
  * The application onClick of user in the favorited box finds either tracks by that user or other songs that user favorites, however, some users do not come up in the API with tracks even though they have them when going to SoundCloud search directly. The default then goes to a randomly picked song that the user favorites.

**Potential Build not Finished ~~SearchTypes~~**
  * I began working on and almost implemented a search based on a user preference type (e.g. "Tracks", "Users", "Playlists") but stopped recently as I wanted to focus on strictly track data. However, I have left the code I worked on in the for future builds for myself or for your reference.

**Thrown errors on array.map**
  * It appears that I get a JSX error on UserSongs.map that I am unable to reconcile. stackoverflow and react issues suggest that it may be a bug in the es6 and babel compliers that have conflicting setups.
