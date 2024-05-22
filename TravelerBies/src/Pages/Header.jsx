import "../CSS/Header.css";
import { header } from "../Components/header";
import HeaderCard from "../Cards/HeaderCard";
import { instagram, facebook, twitter, youtube, google } from "../assets";

export default function Header() {
  return (
    <>
      <header>
        <div className="socialIcons">
          <ul>
            <li>
              <img src={instagram} alt="" />
            </li>
            <li>
              <img src={facebook} alt="" />
            </li>
            <li>
              <img src={twitter} alt="" />
            </li>
            <li>
              <img src={youtube} alt="" />
            </li>
            <li>
              <img src={google} alt="" />
            </li>
          </ul>
        </div>
        <div className="icons">
          <div>
            <h1>TravelerBies</h1>
          </div>
          <div className="links">
            <ul>
              <li>Home</li>
              <li>Features</li>
              <li>Travel</li>
              <li>LifeStyle</li>
              <li>Music</li>
              <li>Shop</li>
              <li>ContactUs</li>
            </ul>
          </div>
        </div>
        <div className="TopSocialMedia">
          {header.map((item, index) => (
            <HeaderCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              commentIcon={item.commentIcon}
              comment={item.comment}
              dateIcon={item.dateIcon}
              date={item.date}
            />
          ))}
        </div>
      </header>
    </>
  );
}
