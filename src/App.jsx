import { useEffect, useState } from "react";
import { Table } from "antd";
import axios from "axios";
import "./App.css";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("http://api-test.usmon.me/cars")
      .then((data) => {
        setList(data?.data);
      })
      .catch((err) => {
        console.log("error =>", err);
      });
  }, []);

  return (
    <center>
      <Table
        pagination={false}
        id="table"
        columns={[
          {
            title: "Color",
            dataIndex: "",
            render(item) {
              return item.color;
            },
          },
          {
            title: "Make",
            dataIndex: "",
            render(item) {
              return item.make;
            },
          },
          {
            title: "Model",
            dataIndex: "",
            render(item) {
              return item.model;
            },
          },
          {
            title: "Price",
            render(item) {
              return item.price;
            },
          },
          {
            title: "Year",
            dataIndex: "",
            render(item) {
              return item.year;
            },
          },
        ]}
        dataSource={list}
      />
    </center>
  );
}

export default App;
