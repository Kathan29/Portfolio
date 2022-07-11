
import '../App.css';

export  function Contactpage()
{
    return(
        <>
            <div className='contactpage'>
                <div className="contact">
                    <h2>Let's Connect</h2>
                <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">Name</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Name"/>
                </div>
                <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Emailid</label>
                <input type="email" className="form-control" id="formGroupExampleInput2" placeholder="Email id"/>
                </div>
                <div className="mb-3">
                <label for="floatingTextarea">Message</label>
                <textarea className="form-control" placeholder="Leave message here" id="floatingTextarea"></textarea>
                </div>
                <button type="submit" class="btn btn-dark">Submit</button>
                </div>
                <div className='enquiry'>
                    <h5>Kathan Modi</h5>
                    <h5>Contact no: 9687026360</h5>
                    <h5>Github: <a href='https://github.com/Kathan29'>Kathan29</a></h5>
                    <h5>Linkedin:<a href='https://www.linkedin.com/in/kathan-modi-816626205/'>kathan-modi</a></h5> 
                </div>
            </div>
        </>
    )
}