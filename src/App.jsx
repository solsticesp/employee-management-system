import { useEffect, useState } from 'react';

import Header from './components/Header';
import Search from './components/Search';
import UserList from './components/UserList';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import './styles.css';



function App() {
  const [users, setUsers] = useState([]);
  console.log(users);
  

  useEffect(() => {
    fetch('https://qwubtacarhfkpznpuyyp.supabase.co/rest/v1/users', {
      headers: {
        apiKey: 'sb_publishable_wUWb7dKoHhQYEe3MWVya9w__71LpL8j'
      }
    })
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <>
      <Header />

      {/* <!-- Main component  --> */}
      <main className="main">
        <section className="card users-container">
          <Search />

          <UserList users={users}/>

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
