import React, { Component } from 'react';
import TrackSearch from './searchTypes/TrackSearch'
import getFavDataAndSort from '../helpers/getFavDataAndSort'
import getUserSongs from '../helpers/getUserSongs'
import searchSC from '../helpers/searchSC'
import getGif from '../helpers/getGif'
/* eslint-disable */

class SearchResults extends Component {
  constructor(props){
    super(props)

    this.state = {
      userFavs   : [],
      randomGif   : "",
      userSongData: [],
            using : {
              tracks   : null,
              users    : null,
              playlists: null,
            }
    }
  }

   componentWillReceiveProps(nextProps){
       const usingObj = {}
       usingObj[nextProps.searchResultData.type] = "active"
       this.setState({
         using    : usingObj

       })
       if ( nextProps.searchResultData.type === "tracks" ){
         getFavDataAndSort(nextProps.searchResultData, nextProps.ClientID).then((favoriteData) => {
           this.setState({
             userFavs: favoriteData
           })
         })
         getGif(nextProps.searchResultData.genre, nextProps.searchResultData.title)
               .then((res) => {
                 if ( !res ){
                   this.setState({
                     randomGif: "https://media2.giphy.com/media/LXONhtCmN32YU/200.webp#0"
                   })
                 }else{
                   this.setState({
                     randomGif: res
                   })
                 }
               })
         getUserSongs(nextProps.searchResultData, nextProps.ClientID).then((userSongs) => {
           this.setState({
             userSongData: userSongs
           })
         })
       }
    }
   chooseNewSearchItem( e  ){
     const choiceType = e.target.getAttribute('type')
     const choiceI = e.target.id
     let userReqType = ''
     let userReqTypeVariable = ''
     if ( choiceType === "users" ) {
       userReqType = `${choiceType}/${choiceI}/tracks`
       userReqTypeVariable = `${choiceType}/${choiceI}/favorites`
     }else{
       userReqType = `${choiceType}/${choiceI}`
       const indexOf = e.target.getAttribute("data-index")
       const userSong = this.state.userSongData[indexOf]
       userReqTypeVariable = `users/${userSong.id}/favorites`

     }
     const search = null
     searchSC( search, userReqType, this.props.ClientID ).then((searchResults) => {
         if ( ! Array.isArray(searchResults)) {
           const newSearch = {
             ...searchResults,
             type: "tracks"
           }
           this.props.updateActive( newSearch )
         } else {
           const secondChoice = {}
           if ( ! searchResults.length ){
             searchSC( search, userReqTypeVariable, this.props.ClientID ).then((searchResultsFavorites) => {
               const max = ( searchResultsFavorites.length - 1 )
               const indexOfSong = Math.floor((Math.random() * max))
               const secondChoice = searchResultsFavorites[indexOfSong]
               const newSearch = {
                 ...secondChoice,
                 type: "tracks"
               }
               this.props.updateActive( newSearch )
             })
           } else {
              if ( searchResults.length <= 1 ) {
                  const secondChoice = searchResults[0]
              }else {
                const max = ( searchResults.length - 1 )
                const indexOfSong = Math.floor((Math.random() * max))
                const secondChoice = searchResults[indexOfSong]
              }
              const newSearch = {
                ...secondChoice,
                type: "tracks"
              }
              this.props.updateActive( newSearch )
           }
         }
     })


   }
   render() {
     let result= null
     if ( this.state.using.tracks ) {
       result = <TrackSearch trackData={this.props.searchResultData}
                             updateSearch={this.chooseNewSearchItem.bind(this)}
                             favoriteData={this.state.userFavs}
                             userSongs={this.state.userSongData}
                             randomGif={this.state.randomGif}
                />

     }

     return (
      <div>
        {result}
      </div>
     )

  }
}

export default SearchResults;
