import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import BookList from './views/Books/BookList'
import BookDetail from './views/Books/BookDetail'
import Home from './views/Home/Home'
import './App.css'

function App() {
  return (
    <main className="container">
      <Router>
        <h1>Library Catalog</h1>
        <Switch>
          <Route path="/books/:id" component={BookDetail} />
          <Route path="/books" component={BookList} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </main>
  )
}

export default App
