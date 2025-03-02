/* @refresh reload */
import { render } from 'solid-js/web'
import './index.css'
// Supports weights 300-900
import '@fontsource-variable/rubik';
import App from './App.tsx'

const root = document.getElementById('root')

render(() => <App />, root!)
