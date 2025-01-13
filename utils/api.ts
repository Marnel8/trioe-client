import axios from "axios";
const instance = axios.create({
	baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/v1`,
	withCredentials: true,
});

instance.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;

		if (error.response?.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;

			try {
				const response = await axios.get(
					`${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/refresh-token`,
					{
						withCredentials: true,
					}
				);

				if (response.status === 200) {
					// Retry the original request with a refreshed token
					return instance(originalRequest);
				}
			} catch (err) {
				console.error("Token refresh failed. Redirecting to login...");
				// Optionally redirect to login
				window.location.href = "/login";
				return Promise.reject(err);
			}
		}
	}
);

export default instance;
