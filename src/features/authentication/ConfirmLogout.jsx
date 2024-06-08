import styled from 'styled-components';
import Button from '../../ui/Button';
import Heading from '../../ui/Heading';

const StyledConfirmLogout = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmLogout({ onConfirm, disabled, onCloseModal }) {
  return (
    <StyledConfirmLogout>
      <Heading type="h3">Logging Out?</Heading>
      <p>Are you sure you want to logout?</p>

      <div>
        <Button
          variation="secondary"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button variation="danger" onClick={onConfirm} disabled={disabled}>
          Logout
        </Button>
      </div>
    </StyledConfirmLogout>
  );
}

export default ConfirmLogout;
