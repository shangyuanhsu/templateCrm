import './css/SetBar.css';
const SetBar = () => {
    return (
        <div className="setBar">
            <div className="person_set">
                <span className="material-icons">
                    notifications
                </span>
                <span className='show_notifications'>03</span>
                <div className='show_click_notifications'>
                    <ul>
                        <li>new message 1</li>
                        <li>new message 1</li>
                        <li>new message 1</li>
                    </ul>
                </div>

            </div>
            <div className="person_set">
                <span className="material-icons">
                    palette
                </span>
            </div>

            <div className="person">
                <div className="person_img">
                    <img src={require('../assets/img/member1.jpg')} />
                </div>
            </div>


        </div>
    );
}

export default SetBar;