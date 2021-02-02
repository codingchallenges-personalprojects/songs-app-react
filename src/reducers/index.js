import { combineReducers } from  'redux';

const songsReducer = () => {
    return [
        {title: 'set fire to the rain' , duration: '04:20'},
        {title: 'as long as you love me ' , duration: '03:09'},
        {title: 'sorry' , duration: '05:27'},
        {title: 'macarena' , duration: '05:02'}
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
   if(action.type === 'SONG_SELECTED') {
       return action.payload;
   } 
   return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer 
})

