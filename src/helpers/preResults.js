import _ from 'lodash'
/* eslint-disable */

export default function preResults( results, userReqType ){
  let listOfPre = []
  const arrayOfPreSearch = []
  if ( results.length > 5 ) {
    listOfPre = _.slice(results, 0, 5)
  }else {
    listOfPre = results
  }
  listOfPre.map((res) => {
      if ( res.username ) {
        const resObj = {
          ...res,
          type: userReqType
        }
        arrayOfPreSearch.push(resObj)
      } else {
        const resObj = {
          ...res,
          type: userReqType
        }
        arrayOfPreSearch.push(resObj)
      }
    })
  return arrayOfPreSearch
}
