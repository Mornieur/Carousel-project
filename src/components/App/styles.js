import styled from "styled-components";

export const Title = styled.h3`
  color: blue;
  font-family: "Roboto", sans-serif;
  display: flex;
  position: relative;
  top: 4rem;
`;

export const ColumnOne = styled.div`
  display: flex;

  width: 50rem;
  height: 70px;
  background-color: white;

  border-radius: 10px;

  align-items: center;
  box-shadow: 0px 3px 4px 0px gray;
  margin-bottom: 10px;
  display: grid;
  place-items: center;
  text-align: center;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 200px;
    height: 70px;
  }
`;

export const Icon = styled.div``;

export const Event = styled.div`
  white-space: nowrap;
`;

export const IconLeft = styled.div``;

export const MdArrowForwardIos = styled.div``;

export const Container = styled.div`
  .carousel {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    border-radius: 10px;

    box-shadow: 0px 8px 5px 0px #e1e1e1;
  }

  .carousel::-webkit-scrollbar {
    display: none;

    box-shadow:hover {
      box-shadow: none;
    }
  }
`;

export const Carousel = styled.div`
  position: relative;
  margin: 0 auto;
  padding-left: 1rem;
  display: flex;

  overflow-x: auto;
  width: 800px;
  scroll-behavior: smooth;
  background-color: white;
  border-radius: 10px;
  height: 25rem;
  position: relative;
  box-shadow: 0px 8px 5px 0px #c2c2c2;

  carousel::-webkit-scrollbar {
    display: none;
  }

  button:nth-child(2) {
    left: 0;

    img {
      transform: rotate(180deg);
    }
  }
  button:nth-child(3) {
    right: 0;
  }

  :before {
    position: absolute;
    z-index: 3;
    content: "";
    top: 0;
    left: 0;
    height: 100%;
    width: 100px;
    background: white;
    opacity: 0.7;
  }
`;

export const Item = styled.div`
  background-color: white;
  border: 1px solid #e1e1e1;
  box-shadow: 0px 4px 10px 0px #c2c2c2;

  padding: 10px;
  width: 460px;

  flex: none;
  margin: 1rem;
  border-radius: 5px;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  aside {
    margin-left: auto;

    button {
      padding: 7px;
      padding-left: 15px;
      padding-right: 15px;
      width: auto;
      border-radius: 5px;
      font-weight: bold;

      border: 0px solid gray;
      box-shadow: 0px 3px 4px 0px #c2c2c2;
      color: blue;
      background-color: white;
    }
  }
`;

export const Info = styled.p`
  p {
    line-height: 25px;
    display: flex;
    position: relative;
    margin: auto;
  }
`;

export const Button = styled.button`
  z-index: 4;
  position: absolute;
  background-color: white;
  border: 3px solid blue;
  margin: 1rem;
  color: blue;

  display: grid;
  place-items: center;
  height: 30px;
  width: 30px;

  top: calc(50% - 15px);

  border-radius: 50%;

  svg {
    width: 100%;
    height: 100%;
  }
`;
