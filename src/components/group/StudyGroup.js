import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import StudyGroupList from "./StudyGroupList";

const StudyGroup = () => {
  return (
    <div>
      {/*{groups.map((group) => (
        <fieldset key={group.id}>
          <legend>{group.info.group_name}</legend>
          <ul>
            <li>그룹속성: {group.info.group_type}</li>
            <li>강좌명: {group.info.group_lecture}</li>
            <li>모집인원: {group.info.group_numOfMembers}</li>
            <li>그룹 목표: {group.info.group_goal}</li>
            <li>학업계획: {group.info.group_plane}</li>
            <li>자격요건: {group.info.group_qualification}</li>
          </ul>
        </fieldset>
      ))}*/}
    </div>
  )
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