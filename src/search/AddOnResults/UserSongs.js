import React from 'react';

const UserSongs = ({ userSongs, update }) => (

    <div className="container col-md-12">
    { userSongs ?
      <div id="songs" className="row">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="text-center">
                Other Songs from User
              </h4>
            </div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th className="col-md-6 text-center">Song Title</th>
                  <th className="col-md-6 text-center">Favorites
                    <span className="glyphicon glyphicon-heart" aria-hidden="true" />
                  </th>
                </tr>
              </thead>
              <tbody>
                { iterateOverSongs(userSongs, update) }
              </tbody>
            </table>
          </div>
        </div>
    :
        <h2 className="text-center"> No Other Songs By User </h2>

    }
      </div>


)

function iterateOverSongs(userSongs, update){

  const songs = userSongs.map((song, index)  =>
    <tr key={index}>
      <td className="col-md-6 text-center"
          data-index={index}
          type="tracks"
          id={song.id}
          onClick={update}>
          {song.title}
      </td>
      <td className="col-md-6 text-center">{song.favoritings_count}</td>
    </tr>
    )
  return songs
}

export default UserSongs;
