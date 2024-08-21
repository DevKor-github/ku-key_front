import { Provider } from 'jotai'
import ReactDOM from 'react-dom/client'
import '@/index.css'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'

import App from '@/App'
import { authStore } from '@/lib/store/auth'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <Provider store={authStore}>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </Provider>,
  // </React.StrictMode>
)
