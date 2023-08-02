import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import Header from './Header.jsx'
import '../components/Header.css' 
import '../components/Profile.css'



const Profile = () => {

  const { username } = useParams();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    let username = localStorage.getItem('git-username');
    if (username) { fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => setUserDetails(data))
    .catch(error => console.error('Error fetching user details:', error));}
    
  }, [username]);

  if (!userDetails) {
    return <div className='error'><h1>Error fetching user details</h1><Header/></div>;
  }

  return (
    <>
      { <Header/>}
    
      {userDetails && (
          <div className="user-out-put">
          <img className="user-avatar"
            src={userDetails.avatar_url}
            alt="Profile"
            width="100"
            height="100"
          />
          <h2 className="profile-name">{userDetails.name}</h2>
          <h2 ><a className="username" href={userDetails.html_url} target="_blank" rel="noopener noreferrer" >@{userDetails.login}</a></h2>
              <div className='user-information'>
                <h3><FontAwesomeIcon icon={faLocationDot} />  {userDetails.location}</h3>
              </div>
             
              {/* <h3>Joined GitHub on: {joinedDate}</h3> */}

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




// function Profile() {
//   const Profile = () => {
//     const { username } = useParams();
//     const [userDetails, setUserDetails] = useState(null);
  
//   useEffect(() => {
//     let username = localStorage.getItem('git-username');
//     if (username) {
//       fetch(`https://api.github.com/users/${username}`)
//       .then(response => response.json())
//      .then(data => setUserDetails(data))
//    .catch(error => console.error('Error fetching user details:', error));

//     }
//   })

//   //  const [userName, setUsername] = useState("");
//   // const [profile, setProfile] = useState(null);

//   // const handleChange = event => {
//   //    setUsername(event.target.value);
//   //  };

//   // const handleSubmit = async event => {
//   //   event.preventDefault();
//   //   const profile = await fetchProfile();
//   //   setProfile(profile);
//   // };

//   // const fetchProfile = async () => {
//   //   const response = await fetch(`https://api.github.com/users/${username}`);
//   //   const data = await response.json();
//   //   return data;
//   // };

//   // const joinedDate = new Date().toLocaleDateString();


//     return (
// <div>
//       <Header />
//     <div className="App">
//       {/* <form onSubmit={handleSubmit}>
//         <label htmlFor="username">GitHub username:</label>
//         <input
//           type="text"
//           id="username"
//           name="username"
//           onChange={handleChange}
//           value={userName}
//         />
//           </form>
//          */}
//       {profile && (
//           <div className="user-out-put">
//           <img className="user-avatar"
//             src={profile.avatar_url}
//             alt="Profile"
//             width="100"
//             height="100"
//           />
//           <h2 className="profile-name">{profile.name}</h2>
//           <h2 ><a className="username" href={profile.html_url} target="_blank" rel="noopener noreferrer" >@{profile.login}</a></h2>
//               <div className='user-information'>
//                 <h3><FontAwesomeIcon icon={faLocationDot} />  {profile.location}</h3>
//               </div>
             
//               {/* <h3>Joined GitHub on: {joinedDate}</h3> */}

//               <div className="cards">

//                 <div className="inner-cards">
//                   <h3>{profile.followers}</h3>
//                   <p>Followers</p>
//                 </div>

//                 <div className="inner-cards">
//                   <h3>{profile.following}</h3>
//                   <p>Following</p>
//                 </div>

//                 <div className="inner-cards">
//                   <h3>{profile.public_repos}</h3>
//                   <p>Public repos</p>
//                 </div>

//               </div>
         
          
//         </div>
//           )}
          
//      </div>
// </div>
//   );
// }

// export default Profile