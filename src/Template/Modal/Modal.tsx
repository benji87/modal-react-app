import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { lighten } from "polished";
import { theme } from "../../theme";
import { Button } from "../../Atom/Button";
import { Heading } from "../../Atom/Heading";
import { Icon } from "../../Atom/Icon";
import { Input } from "../../Atom/Input";
import { Text } from "../../Atom/Text";

type Props = {
  content: {
    btnLabel?: string;
    content: string;
    form?: { id: number; label: string; name?: string; type: string }[];
    id: number;
    image?: string;
    title: string;
  }[];
  handleCloseModal?: () => void;
};

const StyledModal = styled.div`
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1001;

  @media (min-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;

const StyledModalContent = styled.div`
  background-color: #ffffff;
  border-radius: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  width: 100%;

  @media (min-width: ${theme.breakpoints.medium}px) {
    border-radius: 12px;
    box-shadow: 0 2px 5px 5px rgba(0, 0, 0, 0.1);
    max-width: 480px;
    min-height: 400px;
  }
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: ${theme.spacing.medium}px;
`;

const StyledContent = styled.div`
  flex: 1;
  padding: 0 ${theme.spacing.large}px;
`;

const StyledIcon = styled.div`
  align-items: center;
  display: flex;
  height: 44px;
  justify-content: center;
  right: ${theme.spacing.small};
  top: ${theme.spacing.small};
  width: 44px;
`;

const StyledFooter = styled.footer`
  padding: ${theme.spacing.large}px;
`;

const StyledForm = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledInputOption = styled.div`
  background-color: ${lighten(0.5, theme.colors.secondary)};
  border-radius: 6px;
  display: flex;
  flex-grow: 1;
  margin: 0 ${theme.spacing.small}px ${theme.spacing.small}px 0;
  width: calc(50% - ${theme.spacing.small * 2}px);
`;

const StyledImage = styled.img`
  height: auto;
  max-width: 350px;
`;

const StyledBackBtn = styled.button`
  appearance: none;
  background-color: #ffffff;
  border: 2px solid ${lighten(0.5, theme.colors.secondary)};
  border-radius: 6px;
  font-family: ${theme.font.family};
  font-weight: 400;
  padding: 0 ${theme.spacing.medium}px;

  &:hover {
    background-color: ${lighten(0.5, theme.colors.secondary)};
    cursor: pointer;
  }
`;

export const Modal = (props: Props) => {
  const { content, handleCloseModal } = props;

  const [modalStep, setModalStep] = React.useState(1);

  const handleNextStep = () => {
    const numOfSteps = content.length;
    if (modalStep !== numOfSteps) {
      setModalStep(modalStep + 1);
    } else {
      if (handleCloseModal) {
        handleCloseModal();
      }
    }
  };

  const handlePreviousStep = React.useCallback(() => {
    setModalStep(modalStep - 1);
  }, [modalStep]);

  const ModalContent = (): JSX.Element => {
    const modalPanels = content.map(
      ({ id, title, content, image, form, btnLabel }) => (
        <div
          key={id}
          style={{
            display: id === modalStep ? "flex" : "none",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <StyledContent>
            {image && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                key={`image-${id}`}
              >
                <StyledImage
                  src={`${process.env.PUBLIC_URL}/step-${modalStep}.svg`}
                  alt={`Keyboard Pal Step ${modalStep}`}
                />
              </motion.div>
            )}

            <Heading level={1}>{title}</Heading>
            <Text>{content}</Text>
            {form && (
              <StyledForm>
                {form.map(({ id, label, name, type }) => {
                  return (
                    <StyledInputOption key={id}>
                      <Input label={label} name={name} type={type} />
                    </StyledInputOption>
                  );
                })}
              </StyledForm>
            )}
          </StyledContent>
          <StyledFooter>
            <Button handleClick={handleNextStep}>
              {btnLabel ? btnLabel : "Continue"}
            </Button>
          </StyledFooter>
        </div>
      )
    );
    return <>{modalPanels}</>;
  };

  const showBackBtn = modalStep > 1 && modalStep <= content.length;

  return (
    <AnimatePresence>
      <StyledModal>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ display: "flex" }}
          key="modal"
        >
          <StyledModalContent>
            <StyledHeader>
              <StyledIcon>
                <Icon icon="close" handleClick={handleCloseModal} />
              </StyledIcon>
              {showBackBtn && (
                <StyledBackBtn onClick={handlePreviousStep}>Back</StyledBackBtn>
              )}
            </StyledHeader>
            <ModalContent />
          </StyledModalContent>
        </motion.div>
      </StyledModal>
    </AnimatePresence>
  );
};
