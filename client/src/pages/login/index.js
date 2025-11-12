import { Container, ContainerData } from './style';
import ComponenteLogin from '../../components/componente_login'
import ComponenteDataLogin from '../../components/componente_datalogin'

export default function Login(){
    
    return(
        <Container>
            <ComponenteLogin></ComponenteLogin>
            <ContainerData>
            <ComponenteDataLogin></ComponenteDataLogin>
            </ContainerData>
        </Container>
    );
}