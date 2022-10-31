import "./Table.css";
function Table() {
  let data = [
    {
      name: "Ajay Kumar",
      email: "ajaykumar1071999@gmail.com",
      mobile: 8859245149
    },
    {
      name: "Ajay Kumar",
      email: "ajaykumar1071999@gmail.com",
      mobile: 8859245149
    },
    {
      name: "Ajay Kumar",
      email: "ajaykumar1071999@gmail.com",
      mobile: 8859245149
    }
  ];
  return (
    <div className=" table div1">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>

              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
              <td>
                <i className="fa fa-remove"></i>
              </td>
              <td>
                <i className="fa fa-check"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
