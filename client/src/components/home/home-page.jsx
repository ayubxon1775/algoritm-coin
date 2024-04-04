
import { Saidbar, Main, Navbar} from '../'


const HomePage = () => {
  return (
    <div className="grid grid-cols-6 grid-rows-9 gap row-9">
            <Saidbar/>
            <Navbar/>
            <Main/>


    </div>
  )
}

export default HomePage