import React,{useState, useEffect} from "react";

export const UserList=()=>{
    const[users, setUsers]=useState([]);

    const fetchUsers=async()=>{
        const response=await fetch('http://jsonplaceholder.typicode.com/users');
        const data=await response.json();
        setUsers(data)
    }

    useEffect(()=>{
        fetchUsers()
    },[])

    return(
        <div>
            <h2>lista de usuarios</h2>
            <ul>
                {users.map(user=>{
                    <li key={user.id}>{user.name}</li>
})}
            </ul>
        </div>
    )
}