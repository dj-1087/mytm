import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import StudyGroupList from "./StudyGroupList";

const StudyGroup = () => {
  return <h1>스터디그룹</h1>
}
/*function StudyGroup({id, name, lecture, type, numOfMembers, goal, plane, qualification}) {
  return (
    <div className="movie">
      <Link
        to={{
          pathname: `/movie/${id}`,
          state: {
            year,
            title,
            summary,
            poster,
            genres
          }
        }}
      >
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => (
              <li className="genres__genre" key={index}>{genre}</li>
            ))}
          </ul>
          <p className="movie__summary">{summary.slice(0,180)}...</p>
        </div>
      </Link>
    </div>
  )
}
StudyGroup.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  lecture: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  numOfMembers: PropTypes.number.isRequired,
  goal: PropTypes.string.isRequired,
  plane: PropTypes.string.isRequired,
  qualification: PropTypes.arrayOf(PropTypes.string).isRequired
}*/

export default StudyGroup;