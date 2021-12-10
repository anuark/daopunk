import React, { useEffect, useState, useRef } from 'react';
import { Spinner, Modal } from 'react-bootstrap';
import './LoadingScreen.css';

const LoadingScreen = props => {
  const { loadingText, showLoading } = props;
  return showLoading && (
    <div className="loading-wrapper">
      <Modal.Dialog className="loading-screen">
        <Modal.Header>
          <Modal.Title>{ loadingText }</Modal.Title>
        </Modal.Header>

        <Modal.Body className="text-center p-6">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default LoadingScreen;
