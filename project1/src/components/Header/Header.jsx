import React from 'react'
import { Container, Logo, LogoutButton } from '..'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Header() {

  const authStatus = useSelector( (state) => state.auth.status );
  const navigate = useNavigate();

  //here we will have nav items
  //based on authStatus, we will show different nav items
  //if authStatus is true, then show profile, logout
  //else show login, signup
  //home and about will be common for both
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    { 
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
        name: "Signup",
        slug: "/signup",
        active: !authStatus,
    },
    {
        name: "All Posts",
        slug: "/all-posts",
        active: authStatus,
    },
    {
        name: "Add Post",
        slug: "/add-post",
        active: authStatus,
    },
  ]

  return (
    <header className='py-3 bg-black text-white dark:bg-white dark:text-black
     '> 
        <Container>
            <nav>
                <div>
                  <Link to={"/"}>
                    <Logo height={40} width={40}/>
                  </Link>
                </div>

                <ul className=' flex space-x-4 justify-end items-center'> 
                    {
                      navItems.map( (item) => 
                        item.active ?(
                          <li key={item.name} >
                            
                            <button onClick={ () => navigate(item.slug)} 
                              className='inline-block px-6 py-2 border-2 border-black dark:border-white rounded-md
                               hover:bg-gray-800 hover:text-white hover:dark:bg-gray-800 hover:dark:text-white '>
                              {item.name}
                            </button>
                          
                          </li>
                        ):(null)
                      )
                    }

                    //if authStatus is true, then show logout button
                    {authStatus && (
                      <li>
                        <LogoutButton/>
                      </li>
                    )}


                </ul>
            </nav>
        </Container>
    </header>
  )
}

export default Header
