import styles from "./MainContent.module.css"
import { Container,Row,Col,Card} from 'react-bootstrap'
import {useNavigate} from "react-router-dom";
const MainContent = ({isFetched,currentList,setSelectedAnime}) => {
  const navigate = useNavigate();
  const handleCardClick = (anime)=>{
    setSelectedAnime(anime);
    navigate("/anime");
  }
  return (
    <section className={styles.mainContent}>
        <Container>
        {isFetched==="load" &&<div className={styles.loading}>Loading...</div>}
        { isFetched === "fetched" && (<Row>
              {currentList.length !== 0 ? (currentList.map((anime)=>{
                return (
                  <Col sm={6} lg={4} xl={3} className='mb-4'>
                    <Card className={styles.card} onClick={()=>handleCardClick(anime)}>
                    <Card.Img variant="top" src={anime.images.jpg.image_url} className={styles.cardImg}/>
                    <div className={styles.title}>
                        {anime.title}
                    </div>
                    </Card>
                  </Col>
                )
              })) : (<div className={styles.noresult}>No Results Found</div>)}
          </Row>)}
          { isFetched === "error" && <div className={styles.error}>Error : Could not get the data</div>}
        </Container>
    </section>
  )
}


export default MainContent 