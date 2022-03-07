import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import axios from "axios";

const ProfilePage = () => {
  // const [profileData, setProfileData] = useState();

  // useEffect(() => {
  //   const getData = async () => {
  //     const { data } = await axios.get("/api/petCarers");
  //     setProfileData(data);
  //   };
  //   getData();
  // }, []);

  return (
    <Container>
      <h1>Profile page</h1>
    </Container>
  );
};

export default ProfilePage;
