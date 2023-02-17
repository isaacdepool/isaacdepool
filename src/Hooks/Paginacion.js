import React from 'react'
import styled from "styled-components";
import '../../style.css';

export default function Paginacion({
  dataConfig,
  setDataConfig,
  ifGetData,
  getData,
}) {
    const {
      itemsPerPage,
      currentPage,
      cantRegistros,
      maxPageNumberLimit,
      minPageNumberLimit,  
      pageNumberLimit,   
      pageMinNumber,
    } = dataConfig
    
    const pages = [];
    for (let i = 1; i <= Math.ceil(cantRegistros / itemsPerPage); i++) {
      pages.push(i);
    }

    const indexOfLastItem = currentPage * itemsPerPage;

    //al dar clic al boton de la pagina
    const handleClick = (e) => {
      let page = Number(e.target.id)
      if(!ifGetData){
        setDataConfig(JSON.parse(JSON.stringify({
          ...dataConfig,
          currentPage: page,
        })))
      }else{
        getData(false, page)
      }
    };
    
    const renderPageNumbers = pages.map((number) => {
      if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
        return (
          <li
            key={number}
            id={number}
            className={currentPage === number ? "active" : null}
            onClick={handleClick}
          >
            {number}
          </li>
        );
      } else {
        return null;
      }
    });

    //vamos a la pagina anterior
    const handlePrevBtn = () => {
      let page = currentPage - 1
      let newMaxPageNumberLimit = ((currentPage - 1) % pageNumberLimit === 0) ? (maxPageNumberLimit - pageNumberLimit) : maxPageNumberLimit;
      let newMinPageNumberLimit = ((currentPage - 1) % pageNumberLimit === 0) ? (minPageNumberLimit - pageNumberLimit) : minPageNumberLimit;
      if(ifGetData){
        getData(false, page, newMaxPageNumberLimit, newMinPageNumberLimit)
      }else{
        setDataConfig(JSON.parse(JSON.stringify({
          ...dataConfig,
          currentPage: page,
          maxPageNumberLimit: newMaxPageNumberLimit,
          minPageNumberLimit: newMinPageNumberLimit,
        })))
      }
    };
  

    //vamos a la siguiente pagina
    const handleNextBtn = () => {
      let page = currentPage + 1
      let newMaxPageNumberLimit = (currentPage + 1 > maxPageNumberLimit) ? (maxPageNumberLimit + pageNumberLimit) : maxPageNumberLimit;
      let newMinPageNumberLimit = (currentPage + 1 > maxPageNumberLimit) ? (minPageNumberLimit + pageNumberLimit) : minPageNumberLimit;
      if(ifGetData){
        getData(false, page, newMaxPageNumberLimit, newMinPageNumberLimit)
      }else{
        setDataConfig(JSON.parse(JSON.stringify({
          ...dataConfig,
          currentPage: page,
          maxPageNumberLimit: newMaxPageNumberLimit,
          minPageNumberLimit: newMinPageNumberLimit,
        })))
      }
    };


    ////Con esta Funcion enviamos a la primera pagina
    const goToFirstPage = () => {
      getData(false, 1, pageNumberLimit, pageMinNumber)
    }

    //Con esta Funcion enviamos a la ultima pagina
    const goToLastPage = () => {
      let pagFinal = Math.ceil(cantRegistros / itemsPerPage)
      let page = Math.ceil(pagFinal / pageNumberLimit)
      let pagMax = page*pageNumberLimit
      if(ifGetData){
        getData(false, pagFinal, pagMax, (pagMax-pageNumberLimit))
      }else{
        setDataConfig(JSON.parse(JSON.stringify({
          ...dataConfig,
          currentPage: pagFinal,
          maxPageNumberLimit: pagMax,
          minPageNumberLimit: (pagMax-pageNumberLimit),
        })))
      }
    }

    return (
            <Container>
                <div className="d-md-flex">
                    <div>
                    <p className='color-blue3'>
                        {(indexOfLastItem > cantRegistros
                        ? cantRegistros
                        : indexOfLastItem) || 1}{" - 8 "}
                        Resultados de {cantRegistros || 16}
                    </p>
                    </div>
                    <div className="d-flex ms-md-auto">
                    <div>
                    <ul className="pageNumbers p-0">
                        <li style={{ padding: "1px 1px" }}>
                        <button
                        className='font-size-12 color-blue3'
                            onClick={goToFirstPage}
                            disabled={currentPage === pages[0] ? true : false}
                        >
                            {"«"}
                        </button>
                        </li>
                        <li style={{ padding: "1px 1px" }}>
                        <button
                        className='font-size-12 color-blue3'
                            onClick={handlePrevBtn}
                            disabled={currentPage === pages[0] ? true : false}
                        >
                            {"‹"}
                        </button>
                        </li>
                        {renderPageNumbers}
                        <li style={{ padding: "1px 1px" }}>
                        <button
                        className='font-size-12 color-blue3'
                            onClick={handleNextBtn}
                            disabled={
                            currentPage === pages[pages.length - 1] ? true : false
                            }
                        >
                            {"›"}
                        </button>
                        </li>
                        <li style={{ padding: "1px 1px" }}>
                        <button
                        className='font-size-12 color-blue3'
                          onClick={goToLastPage}
                          disabled={
                          currentPage === pages[pages.length - 1] ? true : false
                          }
                        >
                            {"»"}
                        </button>
                        </li>
                    </ul>
                    </div>
                    <div
                    className='font-size-12 color-blue3'
                    style={{ padding: "1px 1px" }}
                    >
                    de {pages.length}
                    </div>
                    </div>
                </div>
            </Container>
    )
}

const Container = styled.div`
   margin-top: 15px;
  .pageNumbers {
    list-style: none;
    display: flex;
  }

  .pageNumbers li {
    padding: 2.4px 12px;
    font-size: 15px;
    background-color: transparent;
    margin-right: 1px;
    margin-left: 1px;
    border-radius: 0px;
    cursor: pointer;
  }

  .pageNumbers li button {
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    color: var(--font-color);
  }

  .pageNumbers li:hover {
    background-color: transparent;
    color: var(--font-color);
    button {
      color: var(--font-color);
    }
  }

  .pageNumbers li.active {
    background-color: var(--primary-color);
    color: white;
  }
`;