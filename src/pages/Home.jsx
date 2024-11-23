function Home({input1,deep,input2}){
  return <>
  <h1>Home Page</h1>
  <h2>{input1}</h2>
  <button onClick={deep}>Change Value</button>
  </>
}

export default Home