import React from 'react'

const SearchTypes = ({ checked, change }) => (
  <div className="btn-group btn-group-justified col-md-12">
    <a className={`btn btn-default ${checked.tracks}`} id="tracks" onClick={change} role="button">Tracks</a>
    <a className={`btn btn-default ${checked.users}`} id="users" onClick={change} role="button">Users</a>
    <a className={`btn btn-default ${checked.playlists}`} id="playlists" onClick={change} role="button">Playlists</a>
  </div>
)

export default SearchTypes;
