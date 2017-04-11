import request from 'superagent'

export default function getGif(genre, title) {
   const giphyQ = {
     api_key: "dc6zaTOxFJmzC",
     tag    : `${genre} ${title}`,
     rating : "PG-13"
   }
   return new Promise((resolve, reject) => {
    request.get("http://api.giphy.com/v1/gifs/random")
              .query(giphyQ)
              .end((err, res ) => {
      if ( err ) return reject(err)
      else  return resolve( res.body.data.image_original_url )
    })
  })
}
