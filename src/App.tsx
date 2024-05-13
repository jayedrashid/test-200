import './App.css'
import { Greet } from './components/Greet'
import Heading from './components/Heading'
import { Person } from './components/Person'
import PersonList from './components/PersonList'
import Status from './components/Status'
import Oscar from './components/Oscar'

function App() {
  // const personName = {
  //   firstName: 'Keanu',
  //   lastName: 'Reeves'
  // }

  // const nameList = [
  //   {
  //     firstName: 'Bruce',
  //     lastName: 'Wayne'
  //   },
  //   {
  //     firstName: 'Clark',
  //     lastName: 'Kent'
  //   },
  //   {
  //     firstName: 'Princess',
  //     lastName: 'Diana'
  //   }
  // ]


  return (
    <>
      <div className='App'>
        <Greet name='Edident' messageCount={5} isLoggedIn={false} />
        {/* <Person name={personName}/> */}
        {/* <PersonList names={nameList}/> */}
        <Status status='loading' />
        <Heading>Placeholder</Heading>
        <Oscar>
          <Heading>Oscar goes to Mr. X</Heading>
        </Oscar>
      </div>
    </>
  )
}

export default App
