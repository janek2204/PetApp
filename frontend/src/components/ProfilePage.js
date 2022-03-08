import { useEffect, useState } from "react";
import axios from "axios";
import { getPayLoad } from "../helpers/authentication";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  Container,
  Header,
  HeaderSubheader,
  Dimmer,
  Loader,
} from "semantic-ui-react";

const ProfilePage = () => {
  const [profileData, setProfileData] = useState();
  const [date, setDate] = useState(new Date());

  const getUserID = getPayLoad();

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`api/petCarerProfile/${getUserID.sub}/`);
      setProfileData(data);
    };
    getData();
  }, [getUserID.sub]);

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
          <Calendar onChange={setDate} value={date} selectRange={true} />
          {date.length > 0 ? (
            <Header>
              Start: {date[0].toDateString()} | Finish: {date[1].toDateString()}
            </Header>
          ) : (
            <Header>{date.toDateString()}</Header>
          )}
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
