import styled from "styled-components";
import { mobile } from "../responsive";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import { useRef } from "react";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background:url("https://i.imgur.com/37xhuxm.jpeg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

// const Register = () => {
//   const username = useRef();
//   const email = useRef();
//   const password = useRef();
//   const passwordAgain = useRef();
//   const history = useHistory();

//   const handleClick = async (e) => {
//     e.preventDefault();
//     if (passwordAgain.current.value !== password.current.value) {
//       passwordAgain.current.setCustomValidity("Passwords don't match!");
//     } else {
//       const user = {
//         username: username.current.value,
//         email: email.current.value,
//         password: password.current.value,
//       };
//       try {
//         await axios.post("/api/auth/register", user);
//         history.push("/login");
//       } catch (err) {
//         console.log(err);
//       }
//     }
//   };


//   return (
//     <Container>
//       <Wrapper>
//         <Title>CREATE AN ACCOUNT</Title>
//         <Form >
//           <Input placeholder="name" />
//           <Input placeholder="last name" />
//           <Input placeholder="username" />
//           <Input placeholder="email" />
//           <Input type ="password" placeholder="password" />
//           <Input placeholder="confirm password" />
//           <Agreement>
//             By creating an account, I consent to the processing of my personal
//             data in accordance with the <b>PRIVACY POLICY</b>
//           </Agreement>
//           <Button type="submit" onClick={handleClick} >SIGN UP</Button>
//         </Form>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Register;

// import axios from "axios";
// import { useRef } from "react";
// import "./register.css";
// import { useHistory } from "react-router";
// import { Link } from "react-router-dom";


export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        console.log(user);
        await axios.post("https://noirapi.onrender.com/api/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Container>
          <Wrapper>
             <Title>CREATE AN ACCOUNT</Title>
             <Form onSubmit={handleClick}>
               <Input placeholder="name"  />
               <Input placeholder="last name" />
               <Input placeholder="username"  required
              ref={username}/>
               <Input placeholder="email"   ref={email}    type="email"/>
              <Input type ="password" placeholder="password"  required
              ref={password}/>
             <Input placeholder="confirm password"  required
              ref={passwordAgain}type="password" />
               <Agreement>
                By creating an account, I consent to the processing of my personal
                 data in accordance with the <b>PRIVACY POLICY</b>
             </Agreement>
               <Button type="submit"  >SIGN UP</Button>
             </Form>
           </Wrapper>
         </Container>
   
  );
}