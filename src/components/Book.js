import HTMLFlipBook from "react-pageflip";
import Page from "./Page";
import { useContext, useEffect, useRef } from "react";
import BookContext from "../contexts/BookContext";
import AudioContext from "../contexts/AudioContext";

const Book = () => {
  const { audio, playing, setPlaying } = useContext(AudioContext);
  const audioRef = useRef();
  const onEnded = () => {
    setPlaying(false);
  };
  useEffect(() => {
    if (playing) {
      console.log("Audio playing");
      audioRef.current.play();
    } else {
      console.log("Audio paused");
      audioRef.current.pause();
    }
  }, [playing]);
  const { book } = useContext(BookContext);
  const pages = [...Array(20).keys()];
  return (
    <>
      <HTMLFlipBook width={486} height={625} useMouseEvents={false} ref={book}>
        {pages.map((page) => {
          return <Page name={page} />;
        })}
      </HTMLFlipBook>
      <audio ref={audioRef} src={audio} onEnded={onEnded} />
    </>
  );
};

export default Book;
