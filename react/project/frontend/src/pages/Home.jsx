import React from 'react'
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    <ul>
      <li>
        <Link to = '/state'>useState</Link>
      </li>
      <li> <Link to ='/effect'>useEffect</Link></li> 
    </ul>

    </div>
  )
}
export default Home;
