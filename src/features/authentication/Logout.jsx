import { MdExitToApp } from 'react-icons/md';
import { useLogout } from './useLogout';
import ButtonIcon from '../../ui/ButtonIcon';
import SpinnerMini from '../../ui/SpinnerMini';
import Modal from '../../ui/Modal';
import ConfirmLogout from './ConfirmLogout';

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <Modal>
      <Modal.Open opens={'logout-modal'}>
        <ButtonIcon disabled={isLoading} onClick={logout}>
          {isLoading ? <SpinnerMini /> : <MdExitToApp />}
        </ButtonIcon>
      </Modal.Open>

      <Modal.Window name={'logout-modal'}>
        <ConfirmLogout
          resourceName="cabin"
          disabled={isLoading}
          onConfirm={() => logout()}
        />
      </Modal.Window>
    </Modal>
  );
}

export default Logout;
