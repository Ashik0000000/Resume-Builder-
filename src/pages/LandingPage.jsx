import React from 'react'
import {Link} from 'react-router-dom'
function LandingPage() {
  return (
    <div>
      {/* landing part */}
      <div>
        <section style={{width:'100%',height:'100vh',backgroundImage:"url('https://wallpaperaccess.com/full/10538330.png')",backgroundAttachment:'fixed',backgroundPosition:'top',backgroundSize:'cover'}} className="cpntainer-fluid row align-items-center">
         <div className="row">
          <div className="col-md-4"></div>
          <div style={{backgroundColor:'rgba(255,255,255,0.5)'}} className="col-md-4 shadow border py-5 rounded mt-5 text-center">
            <h3>Designed to get hired
              your skills,your story,your next job
              -All in one</h3>
             <Link to={'/resume'} className="btn btn-primary" style={{backgroundColor:"purple"}}>Make your resume</Link>
          </div>
          <div className="col-md-4"></div>
        </div></section>
       {/* tools */}
       <section className ="m-5">
        <h1 className="text-center">Tools</h1>
        <div className="container row align-items-center ">
          <div className="col-md-6">
            <div className="my-3">
              <h1>Resume</h1>
              <p>Create Unlimited new resumes and easily edit them afterwards</p>
            </div>
             <div className="my-3">
              <h1>Cover Letters</h1>
              <p>Easily Write Professional cover letter</p>
            </div>
             <div className="my-3">
              <h1>Jobs</h1>
              <p>Automatically receive new and relevent job postings</p>
            </div>
             <div className="my-3">
              <h1>Applications</h1>
              <p>Effortlessly manage and track your job aoolication in an organized manner</p>
            </div>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png" alt="" />
          </div>
        </div>
       </section>
       {/* image */}
       <section style={{height:'500px',width:'100%',backgroundImage:"url('https://wallpapercave.com/wp/wp8656070.jpg')",backgroundPosition:'top',backgroundAttachment:'fixed',backgroundSize:'cover'}}>

       </section>
       {/* testimony */}
       <section className="m-5">
        <h1 className="text-center ">Testimony</h1>
        <div className="row container">
          <div className="col-md-5 ">
            <h3 className="ml-5">Trusted by Professional worldwide</h3>
            <div className="my-5">
 
           <p> At LiveCareer, we don't just help you create résumés
             — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>

            <p>In fact, users who used LiveCareer reported getting hired an average of 48 days faster</p>.

            <p>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6">
            <div className="row container">
               <div className="col-3 my-3">
                <img className='w-100' src="https://tse1.mm.bing.net/th/id/OIP.mJk6hE0GwdD72ZeEzD3BFAHaJY?pid=ImgDet&w=184&h=232&c=7&dpr=1.3&o=7&rm=3" alt="person" />
              </div>
              <div className="col-3 my-3">
                <img className='w-100' src="https://tse1.mm.bing.net/th/id/OIP.mJk6hE0GwdD72ZeEzD3BFAHaJY?pid=ImgDet&w=184&h=232&c=7&dpr=1.3&o=7&rm=3" alt="person" />
              </div>
              <div className="col-3 my-3">
                <img className='w-100' src="https://tse1.mm.bing.net/th/id/OIP.mJk6hE0GwdD72ZeEzD3BFAHaJY?pid=ImgDet&w=184&h=232&c=7&dpr=1.3&o=7&rm=3" alt="person" />
              </div>
              <div className="col-3 my-3">
                <img className='w-100' src="https://tse1.mm.bing.net/th/id/OIP.mJk6hE0GwdD72ZeEzD3BFAHaJY?pid=ImgDet&w=184&h=232&c=7&dpr=1.3&o=7&rm=3" alt="person" />
              </div>
</div>
<div className="row container">
               <div className="col-3 my-3">
                <img className='w-100' src="https://tse1.mm.bing.net/th/id/OIP.mJk6hE0GwdD72ZeEzD3BFAHaJY?pid=ImgDet&w=184&h=232&c=7&dpr=1.3&o=7&rm=3" alt="person" />
              </div>
              <div className="col-3 my-3">
                <img className='w-100' src="https://tse1.mm.bing.net/th/id/OIP.mJk6hE0GwdD72ZeEzD3BFAHaJY?pid=ImgDet&w=184&h=232&c=7&dpr=1.3&o=7&rm=3" alt="person" />
              </div>
              <div className="col-3 my-3">
                <img className='w-100' src="https://tse1.mm.bing.net/th/id/OIP.mJk6hE0GwdD72ZeEzD3BFAHaJY?pid=ImgDet&w=184&h=232&c=7&dpr=1.3&o=7&rm=3" alt="person" />
              </div>
              <div className="col-3 my-3">
                <img className='w-100' src="https://tse1.mm.bing.net/th/id/OIP.mJk6hE0GwdD72ZeEzD3BFAHaJY?pid=ImgDet&w=184&h=232&c=7&dpr=1.3&o=7&rm=3" alt="person" />
              </div>
</div>
<div className="row container">
               <div className="col-3 my-3">
                <img className='w-100' src="https://tse1.mm.bing.net/th/id/OIP.mJk6hE0GwdD72ZeEzD3BFAHaJY?pid=ImgDet&w=184&h=232&c=7&dpr=1.3&o=7&rm=3" alt="person" />
              </div>
              <div className="col-3 my-3">
                <img className='w-100' src="https://tse1.mm.bing.net/th/id/OIP.mJk6hE0GwdD72ZeEzD3BFAHaJY?pid=ImgDet&w=184&h=232&c=7&dpr=1.3&o=7&rm=3" alt="person" />
              </div>
              <div className="col-3 my-3">
                <img className='w-100' src="https://tse1.mm.bing.net/th/id/OIP.mJk6hE0GwdD72ZeEzD3BFAHaJY?pid=ImgDet&w=184&h=232&c=7&dpr=1.3&o=7&rm=3" alt="person" />
              </div>
              <div className="col-3 my-3">
                <img className='w-100' src="https://tse1.mm.bing.net/th/id/OIP.mJk6hE0GwdD72ZeEzD3BFAHaJY?pid=ImgDet&w=184&h=232&c=7&dpr=1.3&o=7&rm=3" alt="person" />
              </div>
</div>

          </div>
        </div>
       </section>
      </div>
    </div>
  )
}

export default LandingPage