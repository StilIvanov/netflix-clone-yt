import { Movie } from "@/typings";
import React from "react";
import Image from "next/legacy/image";

interface Props {
  // When using firebase
  movie: Movie 
}

function Thumbnail({ movie }: Props) {
  return (
    <div className="relative h-28 min-w-[200px] cursor-pointer transtion 
    duration-200 ease-out md:h-36 md:min-w-[280px] md:hover:scale-105">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  );
}

export default Thumbnail;
