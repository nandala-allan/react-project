import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCalendar } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header.jsx";
import "../components/Header.css";
import "../components/Profile.css";

const Profile = () => {
  const { username } = useParams();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    let username = localStorage.getItem("git-username");
    if (username) {
      fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((data) => setUserDetails(data))
        .catch((error) => console.error("Error fetching user details:", error));
    }
  }, [username]);

  if (!userDetails) {
    return (
      <div className="load">
        <h1>Loading</h1>
      </div>
    );
  }

  return (
    <>
      {<Header />}

      {userDetails && (
        <div className="user-out-put">
          <img
            className="user-avatar"
            src={userDetails.avatar_url}
            alt="Profile"
            width="100"
            height="100"
          />
          <h2 className="profile-name">{userDetails.name}</h2>
          <h2>
            <a
              className="username"
              href={userDetails.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              @{userDetails.login}
            </a>
          </h2>

          <div className="user-information">
            <h3>
              <FontAwesomeIcon icon={faLocationDot} /> {userDetails.location}
            </h3>

            {userDetails.created_at && (
              <h3>
                <FontAwesomeIcon icon={faCalendar} size="small" /> Joined{" "}
                {new Date(userDetails.created_at).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </h3>
            )}
          </div>

          <div className="cards">
            <div className="inner-cards">
              <h3>{userDetails.followers}</h3>
              <p>Followers</p>
            </div>

            <div className="inner-cards">
              <h3>{userDetails.following}</h3>
              <p>Following</p>
            </div>

            <div className="inner-cards">
              <h3>{userDetails.public_repos}</h3>
              <p>Public repos</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
