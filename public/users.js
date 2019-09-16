const initialize = () => {

};

const getUsers = () => {
    fetch(/api/users)
};

const userView = ({id, name, email}) => {
    `<tr class="dataEmployeesList">
                                    <td><input type="checkbox"></td>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>08096</td>
                                    <td><i class="material-icons" title="Delete">&#xE872;</i>
                                        <i class="material-icons" title="Edit">&#xE254;</i>
                                    </td>
                    
                                </tr>`

};