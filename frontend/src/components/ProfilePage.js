import { useEffect, useState } from "react";
import axios from "axios";
import { getPayLoad } from "../helpers/authentication";
import {
  Container,
  Header,
  HeaderSubheader,
  Dimmer,
  Loader,
} from "semantic-ui-react";

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
      {profileData ? (
        <>
          <Header as="h1">
            {profileData.firstname} {profileData.lastname}
          </Header>
          <Header.Subheader>
            {profileData.firstname} is a pet {profileData.accounttype}. He loves
            to look after {profileData.preferedPets}.
          </Header.Subheader>
          <Header as="h2">
            Here is a bit more about {profileData.firstname}!
          </Header>
          <HeaderSubheader>{profileData.aboutme}</HeaderSubheader>
        </>
      ) : (
        <Dimmer active>
          <Loader content="Loading" />
        </Dimmer>
      )}
    </Container>
  );
};

export default ProfilePage;
