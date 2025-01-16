import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate } from "react-router";

function Navbarr() {

  let navigate = useNavigate()

  function handleNavigateFav() {
    navigate("/favorites")
  }

  function handleNavigateHome() {
    navigate("/")
  }

  return (
    <>
      <div className='nvb contain'>
        <div className="nvb-top">
          <div className='nvb-top-left'>
            <IconButton><SearchIcon /></IconButton>
            <input type="text" placeholder='Search' style={{ border: "none", padding: "10px" }} />
          </div>
          <div className="nvb-top-center">
            <h4>
              SHOPPERS
            </h4>
          </div>
          <div className='nvb-top-right'>
            <IconButton><PersonIcon /></IconButton>
            <IconButton onClick={() => handleNavigateFav()}><FavoriteBorderIcon /></IconButton>
            <IconButton><ShoppingCartIcon /></IconButton>
          </div>
        </div>
        <hr />
        <div className="nvb-end">
          <Link className='link' onClick={() => handleNavigateHome()}>HOME</Link>
          <Link className='link'>ABOUT</Link>
          <Link className='link'>SHOP</Link>
          <Link className='link'>CATALOGUE</Link>
          <Link className='link'>NEW ARRIVALS</Link>
          <Link className='link'>CONTACT</Link>
        </div>
      </div>
    </>
  )
}

export default Navbarr
