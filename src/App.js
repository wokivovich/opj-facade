import axios from "axios";
import React from "react";
import Form from "./components/Form.js"

const getUrl = "http://localhost:8080/events";
const allUrl = "http://localhost:8080/events/all";

export default function App() {
  
  const [event, setPost] = React.useState(null);
  const [events, setList] = React.useState([]);
  const [creationDate, setCreationDate] = React.useState();
  
  React.useEffect(() => {
    axios.get(getUrl).then((response) => {
      setPost(response.data);
    });
  }, []);

  React.useEffect(() => {
    axios.get(allUrl).then((response) => {
      setList(response.data);
    });
  }, []);

  function renderSwitch(param) {
    switch(param) {
      case 'NOTE':
        return 'Стандартная запись';
      case 'SHIFT_ACCEPTION':
        return 'Приемка смены';
      case 'INCIDENT':
        return 'Авария';
      default:
        return '';
    }
  }

  if (!event) return null;

  return (
    <div>
      <p>{events.map((res) => {
      return (
        <table>
          <th><tr>{renderSwitch(res.messageType)}</tr></th>
          
          <th><tr>{res.creationDate}</tr></th>
          <th><tr>{res.message}</tr></th>
        </table>
      );
      })}
      </p>
      <Form></Form>
      
    </div>
    
  );
  
}

