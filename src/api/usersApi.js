const baseUrl = 'https://qwubtacarhfkpznpuyyp.supabase.co/rest/v1/users';
const apiKey = 'sb_publishable_wUWb7dKoHhQYEe3MWVya9w__71LpL8j';

export async function fetchUsers() {
	const response = await fetch(`${baseUrl}?order=createdAt.asc`, {
		headers: {
			'apiKey': apiKey
		}
	});

	const data = await response.json();

	return data;
}