import React,{useState} from 'react'
import questions from '../questions'



function QuestionBox() {
  const [first, setfirst] = useState(0);


  const set=()=>{
    if(first<4){
    setfirst(first+1);
    }
    else{
      setfirst(4)
    }
  }

  const prev=()=>{
    if(first>0){
      setfirst(first-1);
      }
      else{
        setfirst(0)
      }
    }

    const reeset=()=>{
      let ans=window.confirm("Are you sure you want to Quit the test");
      if(ans){
        setfirst(0);
        setsecond(0);
      }

    }

    const reset=()=>{
      window.location.reload();
    }

    const [second, setsecond] = useState(0);

    const [three, setthree] = useState(0)

    const result=(elt)=>{
      if(elt){
        setsecond(second+1);
        if(first<4){
          setfirst(first+1);
          }
          else{
            setfirst(5)
          }

      }
      else if(!elt){
        setthree(three+1)
        if(first<4){
          setfirst(first+1);
          }
          else{
            setfirst(5)
          }
      }
      else{
        if(first<4){
          setfirst(first+1);
          }
          else{
            setfirst(4)
          }
      }

    }

    // const style=(elt)=>{
    //   if(elt= "#6e6a6a"){
    //   document.body.style.backgroundColor= "white"}
    //   else{
    //     document.body.style.backgroundColor= "#6e6a6a"
    //   }
    // }

      // useEffect(()=>{
      //   setsecond(second+1);
      // },[first])

      const [color, setcolor] = useState(false);

      const style=()=>{
        setcolor(!color);
        if(color){
          document.body.style.backgroundColor="white"
          document.querySelector(".light").innerHTML="Dark"
        }
        else{
          document.body.style.backgroundColor="#6e6a6a"
          document.querySelector(".light").innerHTML="light"
        }

      }


      const [four, setfour] = useState(false)
     

      const high=()=>{
        setfour(!four);
        if(four){
          document.querySelector(".cont").style.color="red";
        }
        
      }

      // console.log(firstref)

      const low=()=>{
        setfour(!four);
        if(!four){
          document.querySelector(".cont").style.color="black";
        }
      }
    

  // console.log(questions[first].options[1].isCorrect)
  return (
    
    <div>

      { first<=4?(
        <>
      <div className='textt'>
        <div>Kalvium</div>
        <div>
        <button onClick={style} className='light'>light</button>
        </div>
      </div>
      <div className='main'>
      {/* <div>
        correct-{second}
      </div>
      <div>
        wrong-{three}
      </div> */}

        <div className='ques'>
          Question: {first+1} out of 5
        </div>
      
          <div  className='cont'>
            {questions[first].text}
          </div>
          <div className='grid'>
            <div className='option' onClick={()=>result(questions[first].options[0].isCorrect)} >{questions[first].options[0].text}</div>
            <div className='option' onClick={()=>result(questions[first].options[1].isCorrect)} >{questions[first].options[1].text}</div>
            <div className='option' onClick={()=>result(questions[first].options[2].isCorrect)} >{questions[first].options[2].text}</div>
            <div className='option' onClick={()=>result(questions[first].options[3].isCorrect)} >{questions[first].options[3].text}</div>
          </div>
          {/* <div>
            <button onClick={set}>next</button>
          </div>
          <div>
            <button onClick={prev}>previous</button>
          </div> */}
          <div className='high'>
            <div>
            <button onClick={high} className='done2' >Highlight</button>
            </div>
            <div>
              <button onClick={low}  className='done2'>Remove Highlight</button>
            </div>
          </div>

          </div>
          </>):
(

  <div>

<div className='textt'>
        <div>Kalvium</div>
        <div>
        <button onClick={style} className='light'>light</button>
        </div>
      </div>
          <div className='result'>
            <div >
              <div>
              <div className='final'>
              Final Results
              </div>
              <div>
                {second} out of 5-( {second/5*100}%)
                </div>
              </div>
              <div className='grid2'>
              <div className='flex'>
              <div>Total number of questions</div>
              <div>5</div>
              </div>
              <div className='flex'>
              <div>Number of correct answers</div>
              <div>{second}</div>
              </div>
              <div className='flex'>
              <div>Number of wrong answers</div>
              <div>{three}</div>
              </div>
            </div>
            <div>
              <button className='done' onClick={reset}>Restart Game</button>
              </div>
            </div>
            
          </div>






          </div>
)
}
      
    </div>
  )
}


export default QuestionBox
