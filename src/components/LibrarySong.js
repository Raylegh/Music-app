const LibrarySong = ({
  songs,
  setCurrentSong,
  song,
  audioRef,
  isPlaying,
  setSongs,
  id,
}) => {
  //Handlers
  const songSelectHandler = () => {
    setCurrentSong(song);
    //Add active State
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    //Check if is PLaying
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      //Using promises to check if the function is completed,
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
