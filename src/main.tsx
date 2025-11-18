import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import SelectedPokemonProvider from './providers/SelectedPokemonProvider.tsx'

createRoot(document.getElementById('root')!).render(
    <SelectedPokemonProvider>
      <App />
    </SelectedPokemonProvider>
)
