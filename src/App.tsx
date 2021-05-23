import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import styled from "styled-components";
import { theme } from "./theme";
import { darken } from "polished";
import { Modal } from "./Template/Modal";

type feedbackTabProps = {
  children: React.ReactChild;
  handleClick?: () => void;
};

const StyledFeedbackBtn = styled.button`
  appearance: none;
  background-color: ${theme.colors.primaryBtn};
  border: none;
  border-radius: 12px 12px 0 0;
  color: #ffffff;
  font-family: ${theme.font.family};
  font-size: ${theme.font.size.regular}px;
  font-weight: 600;
  padding: ${theme.spacing.medium}px ${theme.spacing.large}px;
  position: absolute;
  right: -80px;
  top: 50%;
  transform: rotate(-90deg);
  transition: all 0.25s ease-in-out;
  white-space: nowrap;

  &:hover {
    background-color: ${darken(0.1, theme.colors.primaryBtn)};
    color: ${darken(0.5, theme.colors.primaryBtn)};
    cursor: pointer;
  }
`;

export const App = () => {
  const modalContent = [
    {
      id: 1,
      title: "Digital Pals",
      content:
        "We're introducing a new feature that enables you to speak more with your colleagues outside of day-to-day work. Please take a few moments to set your preferences.",
      image: "../public/step-1.svg",
      btnLabel: "Ok, lets go",
    },
    {
      id: 2,
      title: "Catch up with colleagues",
      content:
        "Tell us how often you'd like to be prompted to take a moment to speak with a colleague.",
      image: "../../image.svg",
      form: [
        {
          id: 1,
          label: "Daily",
          name: "frequency",
          type: "radio",
        },
        {
          id: 2,
          label: "Weekly",
          name: "frequency",
          type: "radio",
        },
        {
          id: 3,
          label: "Bi-weekly",
          name: "frequency",
          type: "radio",
        },
        {
          id: 4,
          label: "Monthly",
          name: "frequency",
          type: "radio",
        },
      ],
      btnLabel: "Continue",
    },
    {
      id: 3,
      title: "Select your interests",
      content:
        "Select from the topics below so we can match you with like minded colleagues.",
      image: "../../image.svg",
      form: [
        {
          id: 1,
          label: "Culture",
          type: "checkbox",
        },
        {
          id: 2,
          label: "Sport",
          type: "checkbox",
        },
        {
          id: 3,
          label: "Technology",
          type: "checkbox",
        },
        {
          id: 4,
          label: "Politics",
          type: "checkbox",
        },
        {
          id: 5,
          label: "Gardening",
          type: "checkbox",
        },
        {
          id: 6,
          label: "Travel",
          type: "checkbox",
        },
      ],
      btnLabel: "Save & Finish",
    },
  ];
  const [modalState, setModalState] = React.useState(true);

  const FeedbackBtn = (props: feedbackTabProps) => {
    const { children, handleClick } = props;
    return (
      <StyledFeedbackBtn onClick={handleClick}>{children}</StyledFeedbackBtn>
    );
  };

  const handleModalVisibility = React.useCallback(() => {
    setModalState(!modalState);
  }, [modalState]);

  return (
    <HelmetProvider>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Helmet>
      <div className="App">
        {modalState ? (
          <Modal
            content={modalContent}
            handleCloseModal={handleModalVisibility}
          />
        ) : (
          <FeedbackBtn handleClick={handleModalVisibility}>
            Try our new feature!
          </FeedbackBtn>
        )}
      </div>
    </HelmetProvider>
  );
};
