import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../Styles/Usluge.module.css";
import { Table } from "antd";
import { Select } from "antd";

const { Option } = Select;

const Tooway = () => {
  const [dataPaketi, setDataPaketi] = useState([]);
  const [dataProPaketi, setDataProPaketi] = useState([]);
  const [dataOstalo, setDataOstalo] = useState([]);
  const [tabela, setTabela] = useState("pravna");

  useEffect(async () => {
    const result = await axios("http://localhost:5000/paketi");
    let paketi = [...result.data];
    setDataPaketi(paketi);

    const result2 = await axios("http://localhost:5000/pro");
    paketi = [...result2.data];
    paketi.forEach((paket) => {
      paket.imePaketa = paket.nazivPaketa;
    });
    setDataProPaketi(paketi);

    const result3 = await axios("http://localhost:5000/dodatni");
    paketi = [...result3.data];
    setDataOstalo(paketi);
  }, []);

  const columns = [
    {
      title: "Ime paketa",
      dataIndex: "imePaketa",
      key: "imePaketa",
    },
    {
      title: "Cijena paketa",
      dataIndex: "cijenaPaketa",
      key: "cijenaPaketa",
    },
    {
      title: "karakteristike",
      dataIndex: "opisPaketa",
      key: "opisPaketa",
    },
  ];
  const columns2 = [
    {
      title: "Ime paketa",
      dataIndex: "imePaketa",
      key: "imePaketa",
    },
    {
      title: "Cijena paketa",
      dataIndex: "cijenaPaketa",
      key: "cijenaPaketa",
    },
    {
      title: "Opis paketa o5",
      dataIndex: "opisPaketa2",
      key: "opisPaketa2",
    },
    {
      title: "karakteristike",
      dataIndex: "opisPaketa",
      key: "opisPaketa",
    },
  ];
  const columns3 = [
    {
      title: "Naziv",
      dataIndex: "naziv",
      key: "naziv",
    },
    {
      title: "Cijena",
      dataIndex: "cijena",
      key: "cijena",
    },
  ];

  const handleChange = (event) => {
    setTabela(event);
  };

  return (
    <div>
      <Select value={tabela} onChange={(event) => handleChange(event)}>
        <Option value="fizicka">Fizicka Lica</Option>
        <Option value="pravna">Pravna Lica</Option>
        <Option value="oprema">Cijena opreme</Option>
      </Select>

      <div className={styles.tableContainer}>
        {tabela === "fizicka" ? (
          <Table
            scroll={{ y: true }}
            pagination={false}
            dataSource={dataPaketi}
            columns={columns}
          />
        ) : tabela === "pravna" ? (
          <Table
            pagination={false}
            dataSource={dataProPaketi}
            columns={columns2}
          />
        ) : (
          <Table
            pagination={false}
            dataSource={dataOstalo}
            columns={columns3}
          />
        )}
      </div>
    </div>
  );
};

export default Tooway;
