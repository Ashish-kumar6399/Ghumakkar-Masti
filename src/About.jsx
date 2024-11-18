import Footer from "./Footer";
import Nav from "./Nav";
import "./About.css"
import cccc from "./images/cccc.jpg"

const About=()=>{
    return(
        <>
            <Nav/>
     

     <h1 className="text-center text-danger">Welcome to Ghumakkar Masti </h1>
       <div className="container ">
       <h5 className="head "> India is a big country here people are worship of our Guest with Ghumakkar masti.Ghumakkar masti is one of the leading Holiday Deal provider company in Delhi india.Ghumakkar Masti provide all kind of Travel package like kashmir packages, Leh and ladakh Packages,Portblair holiday packages,north East tour packages, Shimla manali Packages,Wildlife packages,South India Packages,South India Religious tour packages,Chardham yatra,Mata vashinov Devi yatra,Indian cultural Tours,Discover Kerla tours and many more packages is not a valid packages with customise according to your need.
       Ghumakkar Masti will be your good travel partner we are comitted to provide good services and satisfaction of our customers.Ghumakkar Masti is very trustable Reliable company. we have done more than 1000 FIT and Groups Traveler in allover india.</h5>
       </div>
      
      <br>

      </br>
      <br>

      </br>
      <br>

      </br>
           <div className="container">
           <div className="row">
            <div className="col-4 shadow-sm">
                <img src={cccc}/>
            </div>
            <div className="col-3"></div>
            <div className="col-5 shadow-sm">
                <h2 className="mt-5 ms-5 text-danger " >"WHY GHUMAKKAR MASTI"</h2>
                <p className="mt-3" >Ghumakkar Masti is one of the Largest Destination Sellers Company in india.He is started a sell Small packages to large packages.he has Good Team to manage your Holidays packages in Your Budget.”This can be only done by GHumAKKAR MASTI”.Ghumakkar masti is very care to our Customers, till Date Ghumakkar Masti is Done more than 100 Groups and FIT Packages. Ghumakkar Masti is always take care of My Customers.Ghumakkar Masti offer 100% Transparency No Hidden Cost, </p>
                <div>
                <button type="button" class="btn btn-danger ">VIEW DETAILS</button>

                </div>
            </div>

           </div>

           </div>
           <br></br>
           <br></br>

<Footer/>


        </>
    )
}
export default About;