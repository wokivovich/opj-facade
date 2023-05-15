import axios from "axios";
import React from "react";

const postUrl = "http://localhost:8080/events";

export default function Form() {

  const [event, setPost] = React.useState(null);
  const [text, setMessage] = React.useState("");
  const [messageType, setMessageType] = React.useState("NOTE");
  


    function createEvent() {
        axios
          .post(postUrl, {
            message: text,
            messageType: messageType
          })
          .then((response) => {
            setPost(response.data);
          });
      }

    return (
        <form createEvent onSubmit={createEvent}>
        <input type="text" value={text}  onChange={(e) => setMessage(e.target.value)}/>
        <select id="message_type" value={messageType} onChange={(e) => setMessageType(e.target.value)}>
          <option value="NOTE">Стандартная запись</option>
          <option value="SHIFT_ACCEPTION">Приемка смены</option>
          <option value="INCIDENT">Авария</option>
        </select>
        <input type="submit" value="Отправить"/>
      </form>
    )
}