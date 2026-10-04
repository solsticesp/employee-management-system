import { useEffect, useState } from 'react';

import Header from './components/Header';
import Search from './components/Search';
import UserList from './components/UserList';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import './styles.css';
import SaveUserModal from './components/SaveUserModal';



function App() {
	const [users, setUsers] = useState([]);
	const [showSaveUserModal, setShowSaveUserModal] = useState(false);

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

	const addUserClickHandler = () => {
		setShowSaveUserModal(true);
	};

	const addUserCloseHandler = () => {
		setShowSaveUserModal(false);
	};

	return (
		<>
			<Header />

			{/* <!-- Main component  --> */}
			<main className="main">
				<section className="card users-container">
					<Search />

					<UserList users={users} />

					{/* <!-- New user button  --> */}
					<button className="btn-add btn" onClick={addUserClickHandler}>Add new user</button>

					<Pagination />
				</section>

				{/* <!-- User details component  --> */}


				{/* <!-- Create/Edit Form component  --> */}
				{showSaveUserModal && <SaveUserModal onClose={addUserCloseHandler}/>}

				{/* <!-- Delete user component  --> */}


			</main>

			<Footer />
		</>
	)
}

export default App
