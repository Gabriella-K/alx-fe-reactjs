import axios from "axios";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    // Handle error gracefully
    return { error: error.response?.data?.message || "Failed to fetch user data" };
  }
};

export const searchUsers = async (username, location, minRepos) => {
  let queryParts = [];

  if (username) queryParts.push(`${username} in:login`);
  if (location) queryParts.push(`location:${location}`);
  if (minRepos) queryParts.push(`repos:>=${minRepos}`);

  const query = queryParts.join(" ");

  if (!query) {
    return { error: "At least one search parameter is required." };
  }

  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
    );
    return response.data;
  } catch (error) {
  
    return { error: error.response?.data?.message || "Failed to search users" };
  }
};