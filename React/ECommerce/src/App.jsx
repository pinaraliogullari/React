import './App.css'
import Header from './Components/Header'
import Loading from './Components/Loading'
import RouterConfig from './Config/RouterConfig'
import PageContainer from './Container/PageContainer'

function App() {

  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />  {/* yerinin bir önemi yok */}
      </PageContainer>
    </div>
  )
}

export default App
