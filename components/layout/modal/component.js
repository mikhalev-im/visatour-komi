import React, { useRef, useReducer } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

import { sendMail } from "../../../shared/api";
import { useModalContext } from "./context";

const Overlay = styled.div`
  position: fixed;
  z-index: 50;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);

  display: ${props => (props.open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.white};
  position: relative;
  text-align: center;
  padding: 20px;
  flex-grow: 1;
  max-width: 400px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
`;

const Input = styled.input`
  text-align: center;
  font-size: 18px;
  min-height: 55px;
  border: 1px solid ${props => props.theme.colors.orange};
  border-radius: 90px;
  width: 240px;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  min-height: 60px;
  width: 240px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.orange};
  font-size: 18px;
  border: none;
  border-radius: 40px;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${props => props.theme.colors.darkOrange};
  }

  &:disabled {
    background-color: ${props => props.theme.colors.darkGrey};
  }
`;

const CloseBtn = styled(MdClose)`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;

const initialState = {
  name: "",
  tel: "",
  stage: "FORM"
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return {
        ...state,
        [action.key]: action.value
      };
    case "CHANGE_STAGE":
      return {
        ...state,
        stage: action.stage
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const Modal = () => {
  const [modalState, setModalState] = useModalContext();
  const ref = useRef(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  const close = () => {
    setModalState("CLOSED");
    dispatch({ type: "RESET" });
  };

  const handleInputChange = event => {
    dispatch({
      type: "INPUT_CHANGE",
      key: event.target.name,
      value: event.target.value
    });
  };

  const handleOverlayClick = event => {
    if (ref.current === event.target) close();
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!state.name || !state.tel) return;
    sendMail(state.tel, state.name);
    setModalState("THANKS");
  };

  return (
    <Overlay
      ref={ref}
      open={modalState !== "CLOSED"}
      onClick={handleOverlayClick}
    >
      <Wrapper>
        <CloseBtn onClick={close} />
        {modalState === "FORM" ? (
          <form autoComplete="on">
            <h3>Оставить заявку</h3>
            <p>
              <Input
                type="text"
                name="name"
                value={state.name}
                autoComplete="name"
                required
                onChange={handleInputChange}
                placeholder="Ваше имя"
              />
            </p>
            <p>
              <Input
                type="tel"
                name="tel"
                value={state.tel}
                autoComplete="tel"
                required
                onChange={handleInputChange}
                placeholder="Номер телефона"
              />
            </p>
            <p>
              <Button
                onClick={handleSubmit}
                disabled={!state.name || !state.tel}
              >
                Отправить
              </Button>
            </p>
          </form>
        ) : (
          <>
            <h3>Спасибо за обращение!</h3>
            <p>В ближайшее время мы с Вами свяжемся!</p>
          </>
        )}
      </Wrapper>
    </Overlay>
  );
};

export default Modal;
