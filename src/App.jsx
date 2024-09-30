
import Accordian from './components/accordian/accordian'
import ImageSlider from './components/image-slider/ImageSlider'
import ThemeMode from './components/light-dark-mode'
import LoadMoreData from './components/LoadMore/LoadMore'
import QRCodeGenerator from './components/QrCode/QRCode'
import { RandomColor } from './components/RandomColor/RandomColor'
import ScrollIndicator from './components/scroll-indictor'
import Rating from './components/star-rating/Rating'
import menus from './components/tree-view/data'
import TreeView from './components/tree-view/TreeView'
import TabTest from './components/custom-tabs/tab-test'
import ModelTest from './components/custom-model-popup/modelTest'

function App() {


  return (
    <>
    {/* <Accordian/> */}
    {/* <RandomColor/> */}

    {/* <Rating noofstar={10}/> */}

    {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={"10"} page={"1"}/> */}
    
    {/* LoadMore Products */}
    {/* <LoadMoreData/> */}

    {/* <TreeView menus={menus}/> */}
    
    {/* <QRCodeGenerator name='qr-code'/> */}

    {/* <ThemeMode/>*/}
{/* 
    <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}

    {/* <TabTest/> */}

    <ModelTest/>


    </>
  )
}

export default App
