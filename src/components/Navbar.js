import React, { useState } from 'react';
import { Box,  CssBaseline, Toolbar, Typography} from '@mui/material'
import { Outlet } from 'react-router';
import { useLocation} from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness5Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeContext } from './ThemeContext'; 

import store from '../Redux/store';
import { useSelector } from 'react-redux';


function Navbar() {

  let location = useLocation();
  const value = useSelector((state) => state.primary); 

  function handler () {
    store.dispatch({type: ''})
  }

  return (
    <Box>
    <div class={`color-${value}`} >
    <nav class="bg-white border-gray-200 dark:bg-gray-900 ">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" class="flex items-center">
            {/* <img src="" class="h-8 mr-3" alt="Flowbite Logo" /> */}
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Bereket</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
            <a href="/home"  class={`block py-2 pl-3 pr-4 ${location.pathname === '/home' ? 'text-blue-700': 'text-gray-900' } rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Home</a>
            </li>
            <li>
              <a href="/about"  class={`block py-2 pl-3 pr-4 ${location.pathname === '/about' ? 'text-blue-700': 'text-gray-900' } rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>About</a>
            </li>
            <li>
              <a href="#"  class={`block py-2 pl-3 pr-4 ${location.pathname === '#' ? 'text-blue-700': 'text-gray-900' } rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Impace</a>
            </li>
            <li>
              <a href="#"  class={`block py-2 pl-3 pr-4 ${location.pathname === '#  ' ? 'text-blue-700': 'text-gray-900' } rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Find WiFi</a>
            </li>
            <li>
              <a href="#" class={`block py-2 pl-3 pr-4 ${location.pathname === '#' ? 'text-blue-700': 'text-gray-900' } rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Contact</a>
            </li>
            
            <IconButton sx={{ ml: 1 }} onClick={handler} color="inherit" disableFocusRipple>
            {value === 'gray-400' ? <Brightness7Icon /> : <Brightness5Icon />}
             </IconButton>

          </ul>

          

    </div>
  </div>
</nav>  
    </div>
    <Outlet />
    </Box>
  );
}

export default Navbar;
