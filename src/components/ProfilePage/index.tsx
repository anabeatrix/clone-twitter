import React from 'react';

// import { Container } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar />
        </Banner>

        <ProfileData>
            <EditButton outlined>Editar perfil</EditButton>

            <h1>Ana Beatriz</h1>
            <h2>@anabea3</h2>

            <p>Developer</p>

            <ul>
                <li>
                    <LocationIcon/>
                    Tocantins, Brasil
                </li>
                <li>
                    <CakeIcon />
                    Nascido(a) em 23 de janeiro de 2000 
                </li>
            </ul>
            <Followage>
                <span>
                    seguindo <strong>12</strong>
                </span>
                <span>
                    <strong>20 </strong> seguidores
                </span>
            </Followage>
        </ProfileData>
    </Container>
    );
}

export default ProfilePage;