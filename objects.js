var playlist = {
  matchbox20: 'bent',
  thirdeyeblind: 'jumper',
  googoodolls: 'slide'
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}
