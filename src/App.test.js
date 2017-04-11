import getFavDataAndSort from './helpers/getFavDataAndSort'
import getGif from './helpers/getGif'
import getUserSongs from './helpers/getUserSongs'
import searchSC from './helpers/searchSC'

it('function finds a Gif--unsure what that will be', () => {
  const dummyData = {
    genre: "blah",
    title: "blah 2"
  }
  getGif( dummyData.genre, dummyData.title ).then((image) => {
    expect.toBeDefined(image)
  })
});

it('check to see if searchSC() resolves and gives result of RIBELLU', () =>{
   const dummyData = {
     search     : "",
     userReqType: "/users/3012223/",
     ClientID   : "", //NEED CLIENTID
     result     : "RIBELLU"
   }
   searchSC(dummyData.search, dummyData.userReqType, dummyData.ClientID  )
        .then((user) =>{
          expect(user.username).toBe(dummyData.result);
        });
});

it('check to see if searchSC() resolves and gives result of RIBELLU', () =>{
   const dummyData = {
     search     : "",
     userReqType: "/users/3012223/",
     ClientID   : "", //NEED CLIENTID
     result     : "RIBELLU"
   }
   searchSC(dummyData.search, dummyData.userReqType, dummyData.ClientID  )
        .then((user) =>{
          expect(user.username).toBe(dummyData.result);
        });
});

it('check to see if getFavDataAndSort() gets favorites and sorts by follower count', () =>{
  const dummyData = {
    trackData: {
                  type: "tracks",
                  id  : "145454735"
                },
    ClientID: "" //NEED CLIENTID
  }
  getFavDataAndSort(dummyData.trackData, dummyData.ClientID)
    .then((favoriteData) => {
      expect(favoriteData).toBeDefined()
      expect(favoriteData[0].followers_count > favoriteData[1].followers_count).toBeTruthy()
  });

});

it('check to see if getFavDataAndSort() gets favorites and sorts by follower count', () =>{
  const dummyData = {
    trackData: {
                  user: {
                    id: 15131532
                  }
                },
    ClientID: "" //NEED CLIENTID
  }

getUserSongs(dummyData.trackData, dummyData.ClientID)
    .then((userSongs) => {
        expect(userSongs).toBeDefined()
        expect(userSongs[0].favoritings_count > userSongs[1].favoritings_count).toBeTruthy()
    });

});


it('error', () => {
  getGif(  ).then((image) => {
    console.log("image")
    expect.anything(image)
  })
});
