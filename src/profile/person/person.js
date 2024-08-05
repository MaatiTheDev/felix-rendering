import profile from "../person/pic/profile-pic.jpeg";
import "./person.css";
function Person() {
  return (
    <div>
      <span>
        <img src={profile} alt="Profile photo" />
      </span>
      <h2>Felix Maati</h2>
    </div>
  );
}

export default Person;
