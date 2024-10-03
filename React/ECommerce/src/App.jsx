import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Header from './Components/Header'
import Loading from './Components/Loading'
import RouterConfig from './Config/RouterConfig'
import PageContainer from './Container/PageContainer'
import Drawer from '@mui/material/Drawer';
import { calculateTotal, setDrawer } from './Redux/slices/basketSlice'
import { useEffect } from 'react'

function App() {

  const { products, drawer, totalAmount } = useSelector((store) => store.basket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal())
  }, [])
  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />  {/* yerinin bir önemi yok */}
        <Drawer anchor='right' onClose={() => dispatch(setDrawer())} open={drawer} >
          {
            products && products.map((product) => {
              return (
                <div key={product.id}>
                  <div className='flex-row' style={{ padding: '10px' }}>
                    <img src={product.image} style={{ width: '50px', height: '50px', marginRight: '5px' }} />
                    <p style={{ width: '320px', marginRight: '5px' }}>{product.title}({product.count})</p>
                    <p style={{ fontWeight: 'bold', marginRight: '10px', width: '60px' }}>{product.price} TL</p>
                    <button style={{ padding: '5px', border: 'none', borderRadius: '5px', backgroundColor: 'rgb(185,76,76)', color: '#fff', width: '50px', cursor: 'pointer' }}>Sil</button>
                  </div>

                </div>
              )
            })
          }
          <div>
            <p>Toplam Tutar: {totalAmount} TL</p>
          </div>


        </Drawer>
      </PageContainer>
    </div>
  )
}

export default App
