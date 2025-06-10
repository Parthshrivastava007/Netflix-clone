import { IMG_CDN } from "../utlis/Constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img alt="movieCard" src={IMG_CDN + posterPath} />
    </div>
  );
};

export default MovieCard;
