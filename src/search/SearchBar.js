import React, { Component } from 'react';
import searchSC from '../helpers/searchSC'
// import SearchTypes from './SearchTypes'
import _, { isObject } from 'lodash'
import preResults from '../helpers/preResults'
import  PreSearchResults from './PreSearchResults'
/* eslint-disable */

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      search         : '',
      userReqType    : 'tracks',
      preResultsList : null,
      searchType     : {
                tracks    : "active",
                users     : "",
                playlists : ""

      }
    }
  }
  componentWillReceiveProps(nextProps){
      let search = ""
      if ( nextProps.searchResultData.type === "users" ){
        search = nextProps.searchResultData.username
      } else {
        search = nextProps.searchResultData.title
      }
      this.setState({
        userReqType   : nextProps.searchResultData.type,
        search,
        preResultsList: null
      },
      // this.changeTypeSearch(nextProps.searchResultData.type)
    )

   }

  searchSoundCloud( e ){
    const { userReqType } = this.state
    const { ClientID } = this.props
    let search = this.state.search
    if ( isObject( e ) ) {
      this.setState({
        search : e.target.value
      })
      search = e.target.value
    }
    if ( search ) {
      searchSC( search, userReqType, ClientID ).then((searchResults) => {
        const preResultsList = preResults(searchResults, userReqType)
        this.setState({
          preResultsList: preResultsList
        })
      })
    }else{
      this.setState({
        preResultsList: null
      })
    }
  }
  //A piece of other iteration with search types
  // changeTypeSearch( target ) {
  //   let types = ['tracks', 'users', 'playlists']
  //   const activeType = {}
  //   types.map((type) => {
  //     if ( type === target ) {
  //       activeType[type] = "active"
  //     } else {
  //       activeType[type] = ""
  //     }
  //   })
  //   this.setState({
  //     userReqType: target,
  //     searchType : activeType
  //
  //   })
  // }

  //
  changeType( e ){
      this.changeTypeSearch( e.currentTarget.id )
      this.searchSoundCloud( e )
  }

  chooseSearch( e ){
    const choiceI =  _.findIndex(this.state.preResultsList, function(o) { return o.id == e.currentTarget.id })
    const searchChoice = this.state.preResultsList[choiceI]
    this.props.updateActive( searchChoice )
    this.setState({
      search: null,
      preResultsList: null
    })

  }
  render() {
    return (
        <div className="container">
        {/* Wanted to add various search options but made the application
             too much
          <SearchTypes checked={this.state.searchType}
              change={this.changeType.bind(this)}
          />
        */}
          <div className="col-md-12">
            <input type="text"
              ref="search"
              onChange={this.searchSoundCloud.bind(this)}
              className="form-control"
              placeholder="Search SoundCloud Tracks Here..."
              defaultValue={this.state.search}/>
            { this.state.preResultsList ?
              <PreSearchResults
                  preResultsList={this.state.preResultsList}
                  search={this.state.search}
                  chooseSearch={this.chooseSearch.bind(this)}
              />
            : null
            }
         </div>
        </div>
    )
  }
}

export default SearchBar
