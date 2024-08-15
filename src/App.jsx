import { useUser } from '@clerk/clerk-react'
import Nav from './components/Nav'
import TodoApp from './components/TodoApp'
import Footer from './components/Footer'
import './App.css'

function App() {
  const { isSignedIn, user, isLoaded } = useUser()

  if (!isLoaded) {
    // Handle loading state however you like
    return null
  }

  if (isSignedIn) {
    return (
      <>
      <Nav title="Todo App"/>
      <TodoApp/>
      <Footer title="React Todo App" copyright="© 2024 Leon"/>
      </>
    )
  }

  return (
    <>
      <Nav title="Todo App"/>
      <main><h1>Login to continue</h1></main>
      <Footer title="React Todo App" copyright="© 2024 Leon"/>
      </>
  )
}

export default App
