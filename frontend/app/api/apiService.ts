const API_BASE_URL = "http://localhost:3001/api/v1";

interface RequestBody {
  [key: string]: string;
}

class ApiService {
  async request(
    endpoint: string,
    method: string,
    bodyContent?: RequestBody,
    token?: string,
  ) {
    const url = `${API_BASE_URL}${endpoint}`;

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const config: RequestInit = {
      method: method.toUpperCase(),
      headers: headers,
    };

    if (
      bodyContent &&
      ["POST", "PUT", "PATCH"].includes(method.toUpperCase())
    ) {
      config.body = JSON.stringify(bodyContent);
    }

    const response = await fetch(url, config);
    if (!response.ok) {
      throw new Error("Data not found");
    }
    const data = await response.json();
    return data;
  }

  async getAllUsers() {
    const users = await this.request(`/user/all`, "GET");
    return users;
  }

  async getUserToken(userName: string, password: string) {
    const bodyContent = {
      email: userName,
      password: password,
    };
    const data = await this.request(`/user/login`, "POST", bodyContent);
    return data;
  }

  async getUserProfile(token: string) {
    const data = await this.request(`/user/profile`, "POST", undefined, token);
    return data;
  }
}

export default new ApiService();
