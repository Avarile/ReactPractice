import { SignupForm } from "./Components/Form/ReactForm"
import {Example} from './hooksLib/useToggle'
import {ExampleForm} from './Components/Form/FormikExample'
import {DemoForm} from './Components/Form/Form'
import {DemoTable} from './Components/Table/ReactTable'

function App() {
  return (
    <>
      {/* <APIcall /> */}
      {/* <Index /> */}
      {/* <Message /> */}
      {/* <Axios2 /> */}
      {/* <Index /> */}
      {/* <Demo/> */}
      <SignupForm />
      <Example />
      <ExampleForm />
      <DemoForm />
      <DemoTable />
      <p>This is The Demo HomePage</p>
    </>
  )
}

export default App
