import useWindowResize from "."



export default function UseWindowResizeTest(){
 const windowSize = useWindowResize()
  const {width, height} =windowSize

 return (
  <div>
   <h1>
    Use window resize
   </h1>
   <p> width is {width}</p>
   <p> hieght is {height}</p>
  </div>
 )
}