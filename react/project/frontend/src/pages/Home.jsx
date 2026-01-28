import React from 'react'
import { Link } from 'react-router-dom';
import { userContext} from '../App';
export const Home = () => {
  const[user,setUser]=useState("abcd")
  return (
    <div>
      <h1>Home</h1>
    <ul>
      <li>
        <Link to = '/state'>useState</Link>
      </li>
      <li> <Link to ='/effect'>useEffect</Link></li> 
      <li> <Link to ='/reducer'>Reducer</Link></li> 
    </ul>
    <userContext.Provider value={user}>
             
    </userContext.Provider>
    </div>
  )
}
export default Home; 
