import "./feed.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";
import React from "react";

const Feed = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "usersReport"));
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          list.push({ id: doc.id, ...doc.data() });
          setData(list);
          console.log(list);
          // console.log(doc.id, " => ", doc.data());
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {data.map((list) => {
          return (
            <div className="report">
              <li>
                <img width="100" height="100" src={list.img} />
                <p>{list.desc}</p>
              </li>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feed;
