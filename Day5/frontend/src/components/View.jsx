import React, { useState, useEffect } from "react";
import axios from "axios";
import './view.css';

const View = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        viewdata();
    }, []);

    const viewdata = async () => {
        try {
            const res = await axios.get("http://localhost:9000/users");
            setUsers(res.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div>
            <h2>User List</h2>
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default View;
