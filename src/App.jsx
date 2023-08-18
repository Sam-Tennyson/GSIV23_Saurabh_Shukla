import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import RootRouter from './routes/RootRouter'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './redux/Store'

function App() {
	return (
		<>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<RootRouter />
				</PersistGate>
			</Provider>
		</>
	)
}

export default App
