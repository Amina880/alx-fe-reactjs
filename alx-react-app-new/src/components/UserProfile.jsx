 function UserProfile (props){
    return(
        <div style={{ border: '1px solid deeppink', 
        padding: '20px', 
        margin: '10px' }}>
            <h2 style={{fontWeight: 'bold'}}>{props.name}</h2>
            <p style={{fontSize: '20px'}}>Age: {props.age}</p>
            <p style={{fontSize: '20px'}}>Bio: {props.bio}</p>
        </div>
    );
 };
export default UserProfile;