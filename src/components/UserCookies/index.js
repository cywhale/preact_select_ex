//use hooks for https://jsfiddle.net/vittore/nyrmcmcy/2/
/** @jsx h */
import { render } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';
import Cookies from 'universal-cookie';
import "../../style/style_usercookies.css";
import style from "./style";

const UserCookies = () => {
  const cookies = new Cookies();
  const Nothing = () => null;
  const [root, setRoot] = useState(null);
  const [shown, setShown] = useState(true);
  const cookieRef = useRef(null);

  const getCookie = (key) => {
    let cookie;
    if (arguments.length === 0) {
      cookie = cookies.getAll();
    } else {
      cookie = cookies.get(key);
    }
    console.log('getcookies:', cookie); //document.cookie)
    return (cookie || '').split(';');
  };

  const setCookie = (c) => {
    console.log('setcookies before:', cookies); //document.cookie);
    let cookie = c.split('=');//document.cookie;
    //document.cookie = cookies + ';' + c;
    cookies.set(cookie[0], cookie[1]);
    console.log('setcookies after:', getCookie(cookie[0]));
  };

  const CookiePopup = () => {
//class CookiePopup extends Component {
//  constructor() {
//      super();
        // set initial time:
    const [popup, setPopup] = useState({
        //this.state.closed = false;
        details: false //this.state.details = false;
    });
//  componentDidMount() {// update time every second }
//  componentWillUnmount() {// stop when not renderable }

    const clickClose = () => {
      //console.log('click close');
      const d = document.getElementById('useCookies');
      //if (!state.close) {
      setCookie('sylogentpolicyseen=true');
      render(<Nothing />, d, root);
      setShown(true);
      /* setPopup((preState) => ({
          ...preState,
          shown: true
      })); */
    };

    const clickDetails = () => {
      //console.log('click details');
      setPopup( { details: true }) //this.
      /* setPopup((preState) => ({
          ...preState,
          details: true
      })); */
    };

    //render(props, state) {
    const details = popup.details;
    return(
        <div class={details? 'details':''}><p>
          <a class='close' onClick={clickClose}>×</a>
          This site uses cookies. By using our site, you acknowledge that you have read and understand our use of cookies. 
          {!details? <a onClick={clickDetails}>» Find out more</a> : ''}
          {details && <p>
            We may collect and process non-personal information about your visit to this website, such as noting some of the pages you visit and some of the searches you perform. Such anonymous information is used by us to help improve the contents of the site and to compile aggregate statistics about individuals using our site for internal research purposes only. In doing this, we may install cookies. We DONT share these information with third parties, and DONT use them in advertising and marketing.
          </p>}</p>
        </div>
    );
  };

  const checkCookies = () => {
    let c = getCookie('sylogentpolicyseen'); //();
    console.log('Check Cookies initially: ', c)
    //return (c.indexOf('sylogentpolicyseen=true') > -1);
    if (c !== null) {
      return (c === true || c === 'true' || c[0] === true || c[0] === 'true');
    }
    return (false)
  }

  const initCookies = ()  => {
    if (!checkCookies()) {
      setShown(false);
      //let d = document.createElement('div')
      //d.id = 'useCookies';
      //document.body.appendChild(d);
      setRoot(render(<CookiePopup />, cookieRef.current)); //document.getElementById('useCookies')));
      //setCookie('sylogentpolicyseen=true');
    }
  };

  useEffect(() => {
     initCookies();
  }, []);

  let showClass;
  if (shown) {
    showClass=`${style.cookiediv} ${style.shown}`;
  } else {
    showClass=`${style.cookiediv}`
  }
  console.log("showClass: " + showClass + " when isShown is: " + shown);

  return(
    <div id='useCookies' class={showClass} isShown={shown} ref={cookieRef} />
  );
};
export default UserCookies;
