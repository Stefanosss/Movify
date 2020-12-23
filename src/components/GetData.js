import React, { useState, useEffect } from "react";
import firebase from "../firebase";

function GetData() {
  const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const db = firebase.firestore();
  //     const data = await db
  //       .collection("users")
  //       .get()
  //       .then((snapshot) => {
  //         snapshot.docs.forEach((doc) => {
  //           console.log(doc.data());
  //         });
  //       });
  //   };
  //   fetchData();
  // }, []);

  // WORKING EXAMPLE

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const db = firebase.firestore();
  //     const data = await db.collection("users").get();
  //     setUsers(data.docs.map((doc) => doc.data()));
  //     console.log(users);
  //   };
  //   fetchData();
  // }, []);

  // return (
  //   <ul>
  //     {users.map((el) => (
  //       <li key={el.name}>{el.name}</li>
  //     ))}
  //   </ul>
  // );

  useEffect(() => {
    const db = firebase.firestore();
    db.collection("users")
      .get()
      .then((el) => {
        setUsers(el.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <ul>
      {users.map((el) => (
        <li key={el.name}>{el.name}</li>
      ))}
    </ul>
  );
}

export default GetData;
