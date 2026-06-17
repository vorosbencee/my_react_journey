import profile_picture from '../../assets/profile_picture.webp';
import email_logo from '../../assets/email.png';
import linkedIn_logo from '../../assets/LinkedIn_Logo.png';
import './Info.css';

export function Info() {
  return (
    <>
    <img id="profile_picture" src={profile_picture} alt="profile picture"/>
    <h1>Vörös Bence</h1>
    <h2>Frontend Developer</h2>
    <h3 id="website">nositeyet.com</h3>
    <div id="buttonsDiv">
        <button className="button email"><img src={email_logo}/>Email</button>
        <button className="button linkedin"><img src={linkedIn_logo}/>LinkedIn</button>
    </div>
    </>
  );
}
