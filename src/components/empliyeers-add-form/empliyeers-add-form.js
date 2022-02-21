import './empliyeers-add-form.css';

const EmpliyeersAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрубника</h3>
            <form action="" className="add-form d-flex">
                <input type="text" 
                       className="form-control new-post-label"
                       placeholder="Как его зовут?"/>
                <input type="number" 
                       className="form-control new-post-label" 
                       placeholder="З/П в$"/>
                <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
}

export default EmpliyeersAddForm;