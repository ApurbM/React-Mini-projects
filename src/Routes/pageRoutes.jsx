import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import RandomeJoke from '../Pages/page1';
import App from '../App';
import WeatherApp from '../Pages/page2';
import CalculatorApp from '../Pages/page3';
import TimerSystem from '../Pages/page4';

    const router = createBrowserRouter([
      {
        path:"/",
        element:<App/>,
        children:[
             {
                path:"/",
                element:<RandomeJoke/>
             },
             {
                path:"/weatherApp",
                element:<WeatherApp/>
             },
             {
              path:"/calculator",
              element:<CalculatorApp/>
             },
             {
              path:"/time",
              element:<TimerSystem/>
             }
        ]
      }  
    ]);

export default router
