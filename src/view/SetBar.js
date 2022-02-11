import './css/SetBar.css';
const SetBar = () => {
    return (
        <div className="setBar">
            <div className="person_set">
                <span className="material-icons">
                    notifications
                </span>
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