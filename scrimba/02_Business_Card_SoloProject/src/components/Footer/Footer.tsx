
import './Footer.css';
import facebook_logo from '../../assets/facebook_logo.png';
import instagram_logo from '../../assets/instagram_logo.svg';
import github_logo from '../../assets/github_logo.svg';

export function Footer() {
  return (
    <>
    <div id="socialDiv">
      <img src={facebook_logo} className='img'/>
      <img src={instagram_logo} className='img'/>
      <a href='https://github.com/vorosbencee'><img src={github_logo} className='img'/></a>
    </div>
       <a href="https://www.flaticon.com/free-icons/email" title="email icons">Email icons created by Freepik - Flaticon</a>
    </>
  );
}
