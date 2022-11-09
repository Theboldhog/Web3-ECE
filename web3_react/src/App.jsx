import { Navbar, Welcome} from "./composants"

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar/>
        <Welcome/>
      </div>
      Merci à Adrian Hajdin pour son répo Git et sa vidéo Youtube - Thanks to Adrian Hajdin for his Git repo and his Youtube video ! <br/>
      Links here : <a href="https://github.com/adrianhajdin/project_web3.0">GIT</a> -<a href="https://www.youtube.com/watch?app=desktop&v=Wn_Kb3MR_cU&feature=youtu.be"> Youtube</a>

    </div>
  )
}

export default App
