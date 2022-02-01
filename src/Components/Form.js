import './Form.css';

export const Form = (props) => {
    return (
        <div className="form">
            <div className="form__label">Search a GitHub User</div>
            <form>
                <input type="text" placeholder="Type..."/>
                <input type="submit" value="Search"/>
            </form>
        </div>
    );
};
