import { useEffect, useState } from "react";
import axios from "axios";
import {
  getPayLoad,
  getTokenFromLocalStorage,
} from "../helpers/authentication";
import { Container } from "semantic-ui-react";

const ProfilePage = () => {
  const [profileData, setProfileData] = useState();

  const getUserID = getPayLoad();

  console.log(profileData);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`api/petCarerProfile/${getUserID.sub}/`);
      setProfileData(data);
    };
    getData();
  }, []);

  return (
    <Container>
      <h1>Profile page</h1>
    </Container>
  );
};

export default ProfilePage;
