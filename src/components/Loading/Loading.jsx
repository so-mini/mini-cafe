import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {

    return (
        <div>
            <Spinner style= {{marginLeft:'30px', marginTop:'30px'}} animation="border" role="status" size="sm">
            <span className="visually-hidden">Loading...</span>
            </Spinner>
            <p style={{margin:'30px', marginLeft: '10px', marginTop:'30px', color: 'grey', display:'inline', fontSize:'1.2rem'}}>Loading...</p>
        </div>
    )
}

export default Loading
