export const Infoicons = ({ icons, profileData, theme }) => {
  const dataAcortado = profileData ? profileData.slice(0, 15) : "Not available";
  return (
    <div className="icon-links-container">
      <img src={icons} alt={icons} />
      <a className={`input${theme}`} href={profileData}>
        <span>{`${dataAcortado || "Not aviable"}`}</span>
      </a>
    </div>
  );
};
