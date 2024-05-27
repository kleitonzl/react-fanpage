
import img1 from '../img/01.svg'
import { Titulo, Div1, Div2,Div3,Div4, Subtitulo, Subtitulo2,Subtitulo3,Subtitulo4, Text,Text2, Text3, Text4, Img, Containertext} from '../styles/Home'




const Home = () => {

    return (
        <>
        <Titulo>Stats for spotify</Titulo>

        
        
        <Div1>
            <Img src={img1} alt="" />

            <Containertext>
            <Subtitulo>Seus próprios gráficos</Subtitulo>
            <Text>Veja suas faixas, artistas e gêneros mais ouvidos e alterne 
                entre três períodos de tempo diferentes. Seus dados são atualizados aproximadamente todos os dias.</Text>
            </Containertext>

        </Div1>      
        
        <Div2>
            <Subtitulo2>Comparar com a última visita</Subtitulo2>
            <Text2>Veja suas faixas, artistas e gêneros mais ouvidos e alterne 
                entre três períodos de tempo diferentes. Seus dados são atualizados aproximadamente todos os dias.</Text2>
        </Div2>    

        <Div3>
            <Subtitulo3>Seus próprios gráficos</Subtitulo3>
            <Text3>Veja suas faixas, artistas e gêneros mais ouvidos e alterne 
                entre três períodos de tempo diferentes. Seus dados são atualizados aproximadamente todos os dias.</Text3>
        </Div3>      
        
        <Div4>
            <Subtitulo4>Seus próprios gráficos</Subtitulo4>
            <Text4>Veja suas faixas, artistas e gêneros mais ouvidos e alterne 
                entre três períodos de tempo diferentes. Seus dados são atualizados aproximadamente todos os dias.</Text4>
        </Div4>      

      
        </>
    )
}
export default Home