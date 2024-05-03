import { Infoicons } from "./Infoicons";
import locationI from "../assets/icon-location.svg";
import twitterI from "../assets/icon-twitter.svg";
import websiteI from "../assets/icon-website.svg";
import companyI from "../assets/icon-company.svg";
import ThemeContext from "../context/ThemeProvider";

import "./Card.css";
import { useContext } from "react";
export const Card = ({ profileData }) => {
  if (!profileData) {
    return null;
  }
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`profile-container input${theme}`}>
      <section className="avatar-container">
        <img
          className="avatar"
          src={profileData.avatar_url}
          alt={profileData.avatar_url}
        />
        <div className="separador">
          <div className="name-login">
            <span className="name-font">{profileData.name}</span>
            <span>{profileData.login}</span>
          </div>
          <span className="date-created date-font">{profileData.created_at}</span>
        </div>
      </section>
      <div className="text-direction">
        <p className="bio-font">{profileData.bio || "This profile has no bio"}</p>
        <section className={`grey-section ${theme}`}>
          <div className="mini-container">
            <span>Repos</span>
            <span>{profileData.public_repos}</span>
          </div>
          <div className="mini-container">
            <span>Followers</span>
            <span>{profileData.followers}</span>
          </div>
          <div className="mini-container">
            <span>Followin</span>
            <span>{profileData.following}</span>
          </div>
        </section>
        <section className="infoicons-container">
          <Infoicons theme={theme} icons={locationI} profileData={profileData.location} />
          <Infoicons
            theme={theme}
            icons={twitterI}
            profileData={profileData.twitter_username}
          />
          <Infoicons theme={theme} icons={companyI} profileData={profileData.company} />
          <Infoicons theme={theme} icons={websiteI} profileData={profileData.blog} />
        </section>
      </div>
    </div>
  );
};
