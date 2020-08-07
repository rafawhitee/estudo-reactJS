import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { ToastContainer } from 'react-toastify'
import { ToastConfig } from './utils/Configs'
import { getCssVar } from './utils/CssUtils'
import './index.css'

const primaryColor = getCssVar('color-primary')
const secondaryColor = getCssVar('color-secondary')
const contrastTextColor = getCssVar('color-contrast-text')

const theme = createMuiTheme({
  palette: {
    primary: {
      main: (primaryColor) ? primaryColor : '#191970'
    },

    secondary: {
      main: (secondaryColor) ? secondaryColor : '#4682B4',
      contrastText: (contrastTextColor) ? contrastTextColor : '#FFFFFF',
    },

    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>

      <App />

      <ToastContainer autoClose={ToastConfig.TimeToClose}
        draggable={false}
        hideProgressBar={false}
        limit={ToastConfig.LimitAtSameTime}
        closeButton={true}
        closeOnClick={false} />

    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register()