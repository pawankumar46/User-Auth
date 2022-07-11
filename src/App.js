import React , {useState , useEffect} from 'react'

import NavBar from './componenets/NavBar'


function App(props) {

   const [isLogin , setIsLogin] = useState(false)

    const handleAuth=()=>{
       setIsLogin(!isLogin)
    }

    useEffect(()=>{
      if(localStorage.getItem("token")){
        handleAuth()
      }
    },[])
  return (
     <div>
           <h2>User-Auth by redux</h2>
          <NavBar  isLogin={isLogin}  handleAuth={handleAuth}/>
         
     </div>
  );
}

export default App;
