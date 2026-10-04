import Footer from './components/Footer';
import Header from './components/Header';
import Pagination from './components/Pagination';
import Search from './components/Search';
import UserList from './components/UserList';
import './styles.css';

function App() {

  return (
    <>
      <Header />

      {/* <!-- Main component  --> */}
      <main className="main">
        <section className="card users-container">
          <Search />

          <UserList/>

          {/* <!-- New user button  --> */}
          <button className="btn-add btn">Add new user</button>

          <Pagination />
        </section>

        {/* <!-- User details component  --> */}


        {/* <!-- Create/Edit Form component  --> */}


        {/* <!-- Delete user component  --> */}
        

      </main>

      <Footer />
    </>
  )
}

export default App
