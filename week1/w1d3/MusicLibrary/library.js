var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three"
            },

            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"
            },

            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"
            }

  },

  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
               },

               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
               }
  },


  printPlaylists: function () {
      for (var ply in this.playlists) {
        var playlist = this.playlists[ply];
               console.log(playlist.id +': ' + playlist.name + ' - ' + playlist.tracks.length);
      }
  },

  printTracks: function () {
                //console.log(Object.keys(this.tracks));
                for (var tk in this.tracks) {
                      // console.log("tk: " + tk);
                      var track = this.tracks[tk];
                      //console.log("track: ", track);
                      console.log(track.id + ': ' + track.name + " by " + track.artist + " (" + track.album + ")");
                }

  },

  printPlaylist: function (playlistId) {
      for ( var ply in this.playlists) {
          var playlist = this.playlists[playlistId];
          if (ply === playlistId){
            console.log(playlist.id +': ' + playlist.name + ' - ' + playlist.tracks.length + ' tracks');
          }
      }
      for (var tk in this.tracks) {
        var track = this.tracks[tk];
        if (tk !== "t03"){
          console.log(track.id + ': ' + track.name + " by " + track.artist + " (" + track.album + ")");
        }
      }
  },

  addTrack: function (name, artist, album) {
    var a = this.uid();
    this.tracks[a]= {"id" : a, "name" : name, "artist" : artist, "album" : album};
  },

  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  addPlaylist: function (name) {
    var p = this.uid();
    this.playlists[p]= {"id" : p, "name" : name, "tracks" : []};
  }


}