
import '../App.css';



export default function Homepage()
{
    return(
        <>
       <div className='home'>
        <div >
      <img src='./photo1.jpeg' alt='me' id="img1" class="img-fluid"/>
      </div>
     
      <div className="card" id='name' >
            <div class="card-body">
                 I am <h1>Kathan Modi</h1> 
                 <br/> I am currently in 7 sem studying in LD College of Engineering,Ahmedabad Gujarat.
                 <br/>Passionate learner , Always ready to learn and explore new things
                 <br/>Team Player and Always motivated towards work. 
            </div>
        </div>
        </div>
        <div class="card" id="skills">
      <div class="card-header">
            <b>Skills</b>
        </div>
        <div class="card-body">
            {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
            <table class="table table-bordered">
                <tr>
                    <td>Java</td>
                    <td>SQL</td>
                </tr>
                <tr>
                    <td>HTML</td>
                    <td>CSS</td>
                </tr>
                <tr>
                    <td>React</td>
                    <td>Javascript</td>
                </tr>
                <tr>
                    <td>NodeJS(Basic)</td>
                    <td>MongoDB(Basic)</td>
                </tr>
           </table>
            
        </div>
        </div>
      
        </>
    )
}