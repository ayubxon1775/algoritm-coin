
import { Saidbar, Main, Navbar} from '../'


const HomePage = () => {
  return (
    <div className="grid grid-cols-6 grid-rows-9 gap">
            <Saidbar/>
            <Navbar/>
            <Main/>
    </div>
  )
}

export default HomePage