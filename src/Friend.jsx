export default function Friend({friend}){
    const {name, email} = friend;
    return(
        <div className="box">
            <h3>Name: <i>{name}</i> </h3>
            <p>Email: <b>{email}</b> </p>
        </div>
    )
} 