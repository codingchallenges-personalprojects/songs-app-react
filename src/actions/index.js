// action creator
export const selectSong = (song) => {
    // having a payload is optional but type is a must
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};