import React,{Fragment} from 'react'
import './AboutUs.css'


import Footer from '../Footer/Footer'

function AboutUs() {
    const image1="https://img.freepik.com/free-vector/tiny-cardiology-doctor-nurse-examining-heart-blood-pressure-prescribing-treatment-medical-cardiovascular-checkup-flat-vector-illustration-anatomy-hospital-heart-diseases-health-care-concept_74855-20963.jpg?size=626&ext=jpg&ga=GA1.1.384973956.1661681986&semt=sph"
    const image2="https://img.freepik.com/free-vector/scientists-studying-neural-connections-programmers-writing-codes-machine-brain_74855-14157.jpg?size=626&ext=jpg&ga=GA1.2.384973956.1661681986&semt=sph"
    const image='https://img.freepik.com/free-vector/group-young-people-posing-photo_52683-18823.jpg?size=338&ext=jpg&ga=GA1.2.384973956.1661681986&semt=sph'
    const bgimg="https://img.freepik.com/free-vector/public-health-concept-illustration_114360-8989.jpg?size=626&ext=jpg&ga=GA1.1.384973956.1661681986&semt=sph"
    return (
        <div>
<Fragment>
<div className="headBox">
    <img src={bgimg}></img>
<div className="bigTitle">
Redfining Patient Care
</div>
</div>
<div className="contentBox">
Our Vision
<br />

</div>
<div className="cb">
<div className="image1">
<img src={image1} ></img>
</div>
<div className="content1">
We believe in the modern world, patients require a personalised care system. Our tools help you achieve that!</div>
</div>
<div className="missionContainer">
<div className="missionBox">
Our Mission
<br />

</div>
<div className="cb">

<div className="content2">
We aim to create the best tools to help you generate a personalised care system for your patients.
Our AI chatbots are designed to help you achieve that.
<br></br><br></br> 
</div>
<div className="image2">
    <img src={image2}></img>
</div>
</div>

</div>
<div className="contentBox">
Start Your Journey With Us!
<br />

</div>
<div className="cb">
<div className="image3">
    <img src={image}></img>
</div>

<div className="content3">
We are a team of passionate individuals who are dedicated to creating the best tools for you to help your patients.
As a medical practitioner, you are the best person to understand your patients. We aim to help you achieve that.
So what are you waiting for? Join us today!
</div>

</div>
</Fragment>

        </div>
    )
}

export default AboutUs
//Creating Impact through words