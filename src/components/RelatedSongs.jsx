import SongBar from './SongBar';

const RelatedSongs = ({ data, handlePauseClick, handlePlayClick, isPlaying, activeSong, artistId }) => (
  <div className="flex flex-col mt-0 md:mt-16">
    <h1 className="font-bold text-white text-3xl">Related songs:</h1>
    <div className="mt-6 w-full flex flex-col">
      {data?.map((song, i) => (
        <SongBar
          key={`${song.key}-${artistId}`}
          song={song}
          i={i}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}

        />
      ))}
    </div>
  </div>
);

export default RelatedSongs;
