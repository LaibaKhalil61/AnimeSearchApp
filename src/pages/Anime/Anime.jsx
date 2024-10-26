import React, { useEffect, useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Navigate } from 'react-router-dom'
import styles from "./Anime.module.css"
const Anime = ({anime}) => {
    const [showMore,setShowMore] = useState(false);
    if(anime === null){
        return <Navigate to='/'/>;
    }
  return (
    <div className={styles.Anime}>
        <Container><h2>{anime.title}</h2></Container>
        <Container className={styles.container}>
            <Row>
                <Col lg={4} className='d-flex justify-content-center'>
                    <img src={anime.images.jpg.large_image_url} alt="anime poster" className={styles.poster}/>
                </Col>
                <Col lg={8} className={styles.details}>
                      <div className={styles.info}><span className='fw-bold'>Aired : </span>{anime.aired.string}</div>
                    <div className={styles.info}><span className='fw-bold'>Rating : </span>{anime.rating}</div>
                    <div className={styles.info}><span className='fw-bold'>Rank : </span>{anime.rank}</div>
                    <div className={styles.info}><span className='fw-bold'>Score : </span>{anime.score}</div>
                    <div className={styles.info}><span className='fw-bold'>Scored By : </span>{anime.scored_by}</div>
                    <div className={styles.info}><span className='fw-bold'>Popularity : </span>{anime.popularity}</div>
                    <div className={styles.info}><span className='fw-bold'>Status : </span>{anime.status}</div>
                    <div className={styles.info}><span className='fw-bold'>Source : </span>{anime.source}</div>
                    <div className={styles.info}><span className='fw-bold'>Season : </span>{anime.season}</div>
                    <div className={styles.info}><span className='fw-bold'>Duration : </span>{anime.duration}</div>
                </Col>
            </Row>
            <Row>
                <div className={showMore? styles.Fullsynopsis : styles.synopsis}>
                    {anime.synopsis}
                </div>
                <span className={styles.readMore} onClick={()=>setShowMore(!showMore)}>{showMore ? "Read Less" : "Read More"}</span>
            </Row>
        </Container>
    </div>
  )
}

export default Anime