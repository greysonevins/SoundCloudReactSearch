import React from 'react';
import Favorites from '../AddOnResults/Favorites'
import UserSongs from '../AddOnResults/UserSongs'


const TrackSearch = ({trackData, updateSearch, favoriteData, userSongs, randomGif}) => (
      <div className="panel panel-default">
          <div className="panel-heading col-md-12">
              <img src={randomGif}
                   alt="random gif"
                   className="media-center imagae-responsive col-md-4"
                   />
              <div className="col-md-8 ">
                <h2 className="text-center">
                  Results of Track Query
                </h2>
                <p>
                  This app finds track, returns users who favorited it,
                  returns other songs by users if available and also
                  finds random Gif with the conditions of genre and title.
                </p>
                <br />
                <p>
                  Feel free to click on other songs by user to update
                  search result. Or click on users who favorited the track
                  to find either a song by that user or a song that the user
                  favorited.
                </p>
              </div>
          </div>
          <div className="panel-body col-md-12">
            <div className="col-md-4">
              <img className="img-rounded center-block"
                   alt="track"
                   width="304"
                   height="236"
                   src={trackData.artwork_url || "https://d3rt1990lpmkn.cloudfront.net/640/907e87639091f8805c48681d9e7f144dedf53741"}
                />
            </div>
            <div className="col-md-4">
              <h2>user: <a href={trackData.user.permalink_url}  target="_blank"> {trackData.user.username}</a> </h2>
              <h1>song: <a href={trackData.permalink_url} target="_blank">{trackData.title}</a></h1>
            </div>
            <div className="col-md-4">
                <Favorites favoriteData={ favoriteData }
                       update={ updateSearch }
                />
            </div>
          </div>
          <hr />
          <div className="panel-body col-md-12">
            <div className="col-md-4">
              <img className="img-circle img-thumbnail img-responsive"
                   alt="user"
                   src={trackData.user.avatar_url || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRYzlCgn8rHStnVzIerg3fAdL4ozQyakZI0Ee01f5QFJZvbDqvi_Rj8y4"}
                />
              <h2>user: <a href={trackData.user.permalink_url}  target="_blank"> {trackData.user.username}</a> </h2>
            </div>
            <div className="col-md-8">
              <UserSongs userSongs={userSongs}
                         update={updateSearch}
                         />
            </div>
          </div>

  </div>
)

export default TrackSearch
