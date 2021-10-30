import React, { useState } from 'react';
import styled from 'styled-components';

//components
import CommonButton from '../components/buttons/CommonButton';
import Modal from '../components/modal/Modal';
import RegistrationForm from '../components/registrationForm/RegistrationForm';

const HomePageMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const HomePage = () => {
  //Hooks
  // -- state local
  const [isModalOpen, setIsModalOpen] = useState(false);

  // -- custom functions
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <HomePageMain>
        <CommonButton text="Sign up" action={openModal} />
      </HomePageMain>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <RegistrationForm />
        </Modal>
      )}
    </>
  );
};

export default HomePage;
