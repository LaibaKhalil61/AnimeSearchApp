import React from 'react'
import {Navbar,Container,Form,Col,Row} from "react-bootstrap";
import styles from "./Navibar.module.css"
import { useNavigate } from 'react-router-dom';
const Navibar = ({searchInput,setSearchInput}) => {
  const navigate = useNavigate();
  return (
    <Navbar className="bg-dark">
    <Container>
      <Navbar.Brand onClick={()=>navigate("/")} className={styles.container}>
        {/* <MdLocalMovies className={styles.logo}/>{' '}
        <p className={styles.name}>Anime.tv </p> */}
        <img src="/assets/logo.png" alt="Logo" />
      </Navbar.Brand>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              value={searchInput}
              onChange={e=>{
                setSearchInput(e.target.value);
                navigate("/")}}
              className=" mr-sm-2"
            />
          </Col>
        </Row>
      </Form>
    </Container>
  </Navbar>
  )
}

export default Navibar