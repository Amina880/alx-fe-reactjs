import Navbar from "./Navbar";
function Services() {
     return (
        <>
        <Navbar />
       <div style={{  border: '4px solid green', padding: '20px' }}>
         <h1>Our Services</h1>
         <ul>
           <li>Technology Consulting</li>
           <li>Market Analysis</li>
           <li>Product Development</li>
         </ul>
       </div>
       </>
     );
   }

   export default Services;