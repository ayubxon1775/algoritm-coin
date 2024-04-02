
import { Saidbar, Main, Navbar} from '../'


const HomePage = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
         <Navbar/>
        <div className="flex h-full w-full">
            <Saidbar/>
            <Main/>
        </div>
    </div>
  )
}

export default HomePage