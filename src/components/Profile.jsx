import { useState } from 'react';
import Header from './Header.jsx'
import '../components/Header.css' 



function Profile() {

  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);

  const handleChange = event => {
    setUsername(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const profile = await fetchProfile();
    setProfile(profile);
  };

  const fetchProfile = async () => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    return data;
  };

    return (
<>
      <Header />
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">GitHub username:</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleChange}
          value={username}
        />
      </form>
      {profile && (
          <div>
          <img
            src={profile.avatar_url}
            alt="Profile"
            width="100"
            height="100"
          />
          <h2>{profile.name}</h2>
          <h2><a href={profile.html_url} target="_blank" rel="noopener noreferrer" >
              @{profile.login}</a></h2>
          
          
          <h3>Followers {profile.followers}</h3>
          <h3>Following {profile.following}</h3>
          <h3>location {profile.location}</h3>
          <h3>Public repos {profile.public_repos}</h3>
          
        </div>
      )}
     </div>
</>
  );
}

export default Profile
