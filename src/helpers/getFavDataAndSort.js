import Promise from 'bluebird'
import searchSC from './searchSC'

export default function getFavDataAndSort( trackData, ClientID ) {
  const search = ""
  const userReqType = `${trackData.type}/${trackData.id}/favoriters`
  return new Promise((resolve ) => {
    searchSC( search, userReqType, ClientID ).then((favResults) => {
       dataSort(favResults).then((favoriteData) => {
         resolve(favoriteData)
      })
    })
  })
}

function dataSort( favResults ) {
  return new Promise((resolve ) => {
    favResults.sort((a, b) => {
      return b.followers_count - a.followers_count
    })
    resolve( favResults )
  })

}
