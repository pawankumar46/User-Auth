import React from 'react'
import {Link , Route , withRouter} from 'react-router-dom'

 import Home from './Home'
 import Register from './Register'
 import Login from './Login'
 import Account from './Account'
 import MyNotes from './MyNotes'

const NavBar = (props) => {
     const {isLogin , handleAuth} = props
  return (
    <div>
         <h2>User Auth</h2>
          <Link to='/'>Home</Link>  ||
           {isLogin ? (
                <React.Fragment>

              <Link to='/account' >Account</Link>  ||
              <Link to='/mynotes'>My-Notes</Link>   ||
              <Link to='/logout' onClick={()=>{
                  localStorage.removeItem('token')
                  alert('logged out success')
                   handleAuth()
                   props.history.push('/')
              }}> logout</Link>
                </React.Fragment>
             
                
               

           ):(
            <>
            <Link to ='/register'>Register</Link> ||
            <Link to='/login'>Login</Link>
             </>

           )}
         
          <Route path='/' component={Home} exact/>
          <Route path='/register' component={Register} exact={true}/>
          <Route path='/login'  render={(props)=>{
             return <Login {...props} handleAuth={handleAuth} />
          }}  />
          <Route  path='/account' component={Account}/>
          <Route path ='/mynotes' component={MyNotes}/>
    </div>
  )
}

export default withRouter(NavBar)