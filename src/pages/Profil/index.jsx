import { useSelector } from 'react-redux';
import UpdateUserForm from './Form';

const Profil = () => {
  const username = useSelector(state => state.username);

  return (
    <>
      <h1 class="text-center">Voici ton profil { username }</h1>
      <UpdateUserForm />
    </>
  )
};


export default Profil;
