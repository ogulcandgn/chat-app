import { useState, useEffect, useRef } from "react";
import Message from "./Message";
import { db } from "../Firebase";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  QuerySnapshot,
} from "@firebase/firestore";
import SendMessage from "./SendMessage";

const style = {
  main: `flex flex-col my-10 py-4 px-4 relative overflow-x-auto`,
};

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <main className={style.main}>
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
      </main>
      {/* Send Message Component */}
      <SendMessage scroll={scroll} />
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;
