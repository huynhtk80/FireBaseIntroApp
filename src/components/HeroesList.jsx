import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../providers/FirebaseProvider";
import {
  collection,
  query,
  getDocs,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import UploadImage from "./UploadImage";
import { AuthContext } from "../providers/AuthProvider";

function HeroesList() {
  const fbContext = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const db = fbContext.db;
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    let collectionRef = collection(db, "heroes");
    let queryRef = query(collectionRef, orderBy("name"));
    const unsubscribe = onSnapshot(queryRef, (querySnap) => {
      if (querySnap.empty) {
        console.log("No docs found");
      } else {
        let heroesData = querySnap.docs.map((doc) => ({
          ...doc.data(),
          DOC_ID: doc.id,
        }));
        setHeroes(heroesData);
      }
    });
    return unsubscribe;
  }, [user]);

  const getHeroesData = async () => {
    try {
      let collectionRef = collection(db, "heroes");
      let queryRef = query(collectionRef, orderBy("name"));
      let querySnap = await getDocs(queryRef);
      if (querySnap.empty) {
        console.log("No docs found");
      } else {
        let heroesData = querySnap.docs.map((doc) => ({
          ...doc.data(),
          DOC_ID: doc.id,
        }));
        setHeroes(heroesData);
      }
    } catch (ex) {
      console.log("FIRESTORE FAILURE!", ex.message);
    }
  };

  return (
    <div>
      <button onClick={() => getHeroesData()}>GET DATA</button>
      <br />
      {heroes?.map((hero) => {
        return (
          <>
            <ul
              key={hero.DOC_ID}
              style={{
                listStyleType: "none",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <li style={{ width: "30%" }}>
                {hero.imageUrl ? (
                  <img src={hero.imageUrl} width="100%" />
                ) : (
                  <UploadImage docId={hero.DOC_ID} />
                )}
              </li>
              <div style={{ width: "30%" }}>
                <li>name: {hero.name}</li>
                <li>vehicle: {hero.vehicle}</li>
                <li>docId: {hero.DOC_ID}</li>
              </div>
            </ul>
            <hr />
          </>
        );
      })}
    </div>
  );
}

export default HeroesList;
