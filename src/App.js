//import { SignupForm } from "./Components/Form/ReactForm"
//import {Example} from './hooksLib/useToggle'
//import {ExampleForm} from './Components/Form/FormikExample'
//import {DemoForm} from './Components/Form/Form'
//import {DemoTable} from './Components/Table/ReactTable'
//import {DemoTableSorting} from './Components/Table/SortingTable'
// import {CustomTable} from './Components/Table/CustomTable'
// import HomePage from "./Demo/HomePage"
// import { DotDotDot } from "./Examples/DotTyping"
// import { Index } from "./React-Router-Dom/ReactV5Organise/Index"
import MainIndex from "./JB_Hi_Fi/MainIndex"
import { TextDisplayWindow, PrintLogControl } from "./Examples/TextdisplayWindow"
import { TextArray } from "./Examples/TextData"

function App() {
  return (
    <>
      {/* <MainIndex /> */}
      <TextDisplayWindow dataSource={TextArray} logPrintFunc={PrintLogControl} />
    </>
  )
}

export default App
