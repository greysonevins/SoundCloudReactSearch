import SC from 'soundcloud'
import Promise from 'bluebird'

export default function searchSC( search, userReqType, ClientID ) {
  SC.initialize({
    client_id: ClientID
  })
  return new Promise((resolve, reject) => {
    SC.get( `/${userReqType}`, {
        q: `${search}`
      }
    ).then( function( tracks ) {
          resolve( tracks )
      }, function( err ){
        reject( err )
      })
  })
}
