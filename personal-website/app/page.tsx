import Profile from './components/Profile'
import Bio from './components/Bio'
import Education from './components/Education'
import Ford from './components/experiences/Ford'
import Caribou from './components/experiences/Caribou'
import Nokia from './components/experiences/Nokia'
import Persimmon from './projects/Persimmon'
import Growth from './projects/Growth'
import Zone from './projects/Zone'

const Home = () => {
  return (
    <>
      <Profile />
      <Bio />
      <Education />
      <Ford />
      <Caribou />
      <Nokia />
      <Persimmon />
      <Growth />
      <Zone />
    </>
  )
}

export default Home