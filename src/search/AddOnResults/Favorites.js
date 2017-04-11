import React from 'react';

const Favorites = ({ favoriteData, update }) => (

    <div className="container col-md-12">
      <div className="row">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="text-center">
              <span className="glyphicon glyphicon-heart" aria-hidden="true" />
                  Users That Favorite This
              </h4>
            </div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th className="col-md-6 text-center">UserName</th>
                  <th className="col-md-6 text-center">Followers</th>
                </tr>
              </thead>
              <tbody>
                { iterateOverFavorites(favoriteData, update) }
              </tbody>
            </table>
          </div>
        </div>
      </div>


)

function iterateOverFavorites(favoriteData, update){
  const favs = favoriteData.map((user, index)  =>
    <tr key={index} >
      <td className="col-md-6 text-center"
          data-index={index}
          type="users"
          id={user.id}
          onClick={update}>
          {user.username}
      </td>
      <td className="col-md-6 text-center">{user.followers_count}</td>
    </tr>
    )
  return favs
}

export default Favorites;
