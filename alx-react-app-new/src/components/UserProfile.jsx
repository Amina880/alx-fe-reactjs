 function UserProfile (props){
    return(
        <div style={{ border: '1px solid deeppink', 
        padding: '20px', 
        margin: '10px' }}>
            <h2 style={{fontWeight: 'bold', color:'blue'}}>{props.name}</h2>
            <p>Age: <span style={{fontSize: '20px', fontWeight:'bold'}}> {props.age}</span></p>
            <p>Bio: <span style={{fontSize: '20px', fontWeight:'bold'}} >{props.bio}</span></p>
        </div>
    );
 };
export default UserProfile;