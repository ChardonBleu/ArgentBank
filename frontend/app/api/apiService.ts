

const API_BASE_URL = "http://localhost:3001"

class ApiService {
    async request(endpoint: string, method: string, bodyContent = {}) {
        const url = `${API_BASE_URL}${endpoint}`;

        const config = {
            method: method,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({bodyContent})
        };

        const response = await fetch(url, config);
        if (!response.ok) {
        throw new Error("Data not found");
        }
        const data = await response.json();
        return data;
    }

    async getUserToken(userName: string, password: string) {
        const bodyContent = {
            email: userName,
            password: password
        }
        const token = await this.request(`/user/login`, 'POST', bodyContent);
        return token;
    }

}

export default new ApiService();