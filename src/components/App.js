import React from 'react'
import { hot } from 'react-hot-loader'
import ReactGIF from '../images/react.gif'

const App = () => (
  <main>
    <img src={ReactGIF} alt='react' />
    <h1>
      Edit src/components to develop the app and src/css to style the
      application. Happy reactive coding!!!
    </h1>
  </main>
)

// hot(module)(App) - enables hot reloading for component tree rooted at App
export default hot(module)(App)
