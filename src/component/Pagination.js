import React, { useState, useEffect } from "react";
import axios from "axios";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Modal, Button } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";

const Pagination = () => {
  const [players, setPlayers] = useState([]);
  const [modalInfo, setModalInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getPlayerData = async () => {
    try {
      const data = await axios.get(
        "https://nba-players.herokuapp.com/players-stats"
      );
      setPlayers(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPlayerData();
  }, []);

  const columns = [
    { dataField: "name", text: "Player Name" },
    { dataField: "points_per_game", text: "Points Per" },
    { dataField: "team_name", text: "Player Team" },
  ];

  const rowEvents = {
    onClick: (e, row) => {
      console.log(row);
      setModalInfo(row);
      toggleTrueFalse();
    },
  };

  const toggleTrueFalse = () => {
    setShowModal(handleShow);
  };

  const ModalContent = () => {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalInfo.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>Players stats</h1>
          <ul>
            <ol>team_name: {modalInfo.team_name}</ol>
            <ol>assists_per_game: {modalInfo.assists_per_game}</ol>
            <ol>blocks_per_game: {modalInfo.blocks_per_game}</ol>
            <ol>games_played: {modalInfo.games_played}</ol>
            <ol>rebounds_per_game: {modalInfo.rebounds_per_game}</ol>
            <ol>points_per_game: {modalInfo.points_per_game}</ol>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <div className="App">
      <h1>Pagination</h1>
      <BootstrapTable
        keyField="name"
        data={players}
        columns={columns}
        pagination={paginationFactory()}
        rowEvents={rowEvents}
      />

      {show ? <ModalContent /> : null}
    </div>
  );
};
export default Pagination;
