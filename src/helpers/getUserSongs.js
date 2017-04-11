import Promise from 'bluebird'
import searchSC from './searchSC'
import _ from 'lodash'


export default function getUserSongs( data, ClientID ) {
  const search = ""
  const userReqType = `users/${data.user.id}/tracks`
  return new Promise((resolve) => {
    searchSC( search, userReqType, ClientID ).then((userSongs) => {

      dataSortAndCheck(userSongs, data).then((userSongs) => {
        resolve( userSongs )
      })
    })
  })
}

//sort by favorites
function dataSortAndCheck( userSongs, data ) {
  return new Promise((resolve ) => {
    if ( userSongs.length <= 1){
      resolve (userSongs = undefined)
    }else {
        _.remove(userSongs, function(o) {
          return o.id === data.id
        });
        userSongs.sort((a, b) => {
          return b.favoritings_count - a.favoritings_count
        })
        resolve( userSongs )
      }
    })

}
