import React, { useContext, useEffect, useState } from 'react';
import { ButtonCard, CardPost, CardStyle, ContainerCard, ContainerCardHome, ContainerPerfil, ConteudoCard, EditPost, ImgCard, ImgPost, MensagemCard, NomeCard, PerfilUsuario, TituloCard } from './style';
import { getPostAll } from '../../services/requests';
import Comentar from '../Comentar/Comentar';
import { GlobalStateContect } from '../../GlobalState/GlobalStateContext';

function Card() {
  
  const [loalding, setloalding] = useState(true)
    const [forumTopics, setforumTopcs] = useState([])

    const [selectTedPostId] = useContext(GlobalStateContect)

    useEffect(()=>{
      getPostAll(setforumTopcs)
    }, [])
    
 
  return (
    <>
      loalding ?(
        <ContainerCard>
          {forumTopics && forumTopics.map(dado => {
            return(
              <CardStyle key={(dado.post.id)}>
                <PerfilUsuario>
                  <ImgCard src='https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww&w=1000&q=80'/>

                  <ContainerPerfil>
                    <NomeCard> {dado.creator_username} </NomeCard>
                    <MensagemCard> {dado.post_created_at} </MensagemCard>
                    <CardPost>
                      <ImgPost src={dado.post_image} alt='fotopost'/>
                      <ConteudoCard> {dado.post_title}</ConteudoCard>
                    </CardPost>
                    <EditPost>
                      <Comentar 
                      PostId={dado.post.id}
                      coments={dado.coments}
                      autorId={dado.created.id}
                      />
                    </EditPost>
                  </ContainerPerfil>
                </PerfilUsuario>
              </CardStyle>
            )
          })}
        </ContainerCard>
      )
   


    </>
  ):(<p>loalding</p>)
}

export default Card