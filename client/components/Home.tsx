import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h2>Click start to begin!</h2>
      <Link to="/game">Start</Link>
    </div>
  )
}

export default Home
