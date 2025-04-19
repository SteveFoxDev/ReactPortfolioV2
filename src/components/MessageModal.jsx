import Button from "./Button";

const MessageModal = ({ onCancel, message}) => {
    if(message === 'Email Sent') {
        console.log('good');
    }
    if(message === 'Error'){
        console.log('bad');
    }
    return <div>
        <h4 className="heading-4 mb-md">{message}</h4>
        <Button onClick={onCancel} className='btn btn-blue' >OK</Button>
    </div>
}

export default MessageModal;