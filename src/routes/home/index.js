import { h } from 'preact';
import style from './style.css';
//import React from 'preact/compat';
//import ReactDOM from 'preact/compat';
//import { useRef, useEffect } from 'preact/hooks';
import MultiSelectSort from '../../components/MultiSelectSort';
import UserCookies from '../../components/UserCookies';

const Home = () => {
/*
  const ref = useRef(null);
  useEffect(() => {
    ReactDOM.render(<MultiSelectSort />, ref.current);
  }, []);
*/
  return(
	<div class={style.home}>
		<h1>Home</h1>
		<p>This is the Home component.</p>
                <div style="max-width:50%;"><MultiSelectSort /></div>
                <UserCookies />
	</div>
  );
};

export default Home;
