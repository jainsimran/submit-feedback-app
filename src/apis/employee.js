const fetchEmployeeNames = () => {
    return fetch('http://dummy.restapiexample.com/api/v1/employees')
    .then((response) => {
        return response.json();
    });
};

export {
    fetchEmployeeNames
};