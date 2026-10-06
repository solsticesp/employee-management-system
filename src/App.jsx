import { useEffect, useState } from 'react';
import { fetchUsers } from './api/usersApi';

import Header from './components/Header';
import Search from './components/Search';
import UserList from './components/UserList';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import './styles.css';
import SaveUserModal from './components/SaveUserModal';

const baseUrl = 'https://qwubtacarhfkpznpuyyp.supabase.co/rest/v1/users';
const apiKey = 'sb_publishable_wUWb7dKoHhQYEe3MWVya9w__71LpL8j';

function App() {
	const [users, setUsers] = useState([]);
	const [showSaveUserModal, setShowSaveUserModal] = useState(false);

	useEffect(() => {
		fetchUsers()
			.then(data => setUsers(data))
			.catch(error => console.error('Error fetching users:', error));
	}, []);

	const addUserClickHandler = () => {
		setShowSaveUserModal(true);
	};

	const addUserCloseHandler = () => {
		setShowSaveUserModal(false);
	};

	const submitUserHandler = async (user) => {
		try {
			await fetch(baseUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'apiKey': apiKey
				},
				body: JSON.stringify(user)
			})

			const updatedUsers = await fetchUsers();
			setUsers(updatedUsers);
		} catch (error) {
			alert('Error adding user:' + error)
		} finally {
			setShowSaveUserModal(false)
		}
	};

	const userUpdateHandler = async () => {
		try {
			const updatedUsers = await fetchUsers();
			setUsers(updatedUsers);
		} catch (error) {
			console.log('Error updating users: ', error);
		}
	};

	return (
		<>
			<Header />

			{/* <!-- Main component  --> */}
			<main className="main">
				<section className="card users-container">
					<Search />

					<UserList users={users} onUserUpdate={userUpdateHandler}/>

					{/* <!-- New user button  --> */}
					<button className="btn-add btn" onClick={addUserClickHandler}>Add new user</button>

					<Pagination />
				</section>

				{/* <!-- User details component  --> */}


				{/* <!-- Create/Edit Form component  --> */}
				{showSaveUserModal && <SaveUserModal onClose={addUserCloseHandler} onSubmit={submitUserHandler} />}

				{/* <!-- Delete user component  --> */}


			</main>

			<Footer />
		</>
	)
}

export default App
