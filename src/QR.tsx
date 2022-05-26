import { useEffect, useState } from "react";
import styled from "styled-components";
import QRcode from "qrcode.react";
import axios from "axios";

const QR = () => {
  const [code, setCode] = useState<any>();
  useEffect(() => {
    axios
      .get("http://54.180.115.105:8000/code")
      .then((res) => {
        console.log(res.data);
        setCode(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Wrapper>
      <Header>체육대회 관전 바코드</Header>
      <Box>
        <QRcode size={280} id="myqr" value={code} />
      </Box>
      <Bottom>캡쳐를 꼭 해주세요!!!</Bottom>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  margin-top: 20px;
  width: 200px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  margin-top: 20px;
  width: 300px;
  height: 300px;
  padding: 10px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bottom = styled.div`
  margin-top: 20px;
  width: 300px;
  height: 40px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  font-weight: bold;
  font-size: 20px;
`;

export default QR;
