import React, { useEffect, useState } from "react";

const GitHubProfile = () => {
  const [user, setUser] = useState(null);
  const username = "narayan24x7"; 

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching GitHub user:", error));
  }, []);

  if (!user) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <div className="flex items-center space-x-4">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-20 h-20 rounded-full border"
        />
        <div>
          <h2 className="text-2xl font-semibold">{user.name || user.login}</h2>
          <p className="text-gray-600">@{user.login}</p>
        </div>
      </div>
      <div className="mt-4">
        {user.bio && <p className="text-gray-700 mb-2">{user.bio}</p>}
        <ul className="text-gray-600">
          <li><strong>Location:</strong> {user.location || "Not specified"}</li>
          <li><strong>Public Repos:</strong> {user.public_repos}</li>
          <li><strong>Followers:</strong> {user.followers}</li>
          <li><strong>Following:</strong> {user.following}</li>
          <li><strong>GitHub Profile:</strong> <a href={user.html_url} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">{user.html_url}</a></li>
        </ul>
      </div>
    </div>
  );
};

export default GitHubProfile;
