import "./Table.css";
import { useState } from "react";
function Table() {
  const [edit, setEdit] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

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
  function EditData() {
    setEdit(data);
    setName(data[0].name);
    setEmail(data[0].email);
    setMobile(data[0].mobile);

    console.log(edit);
  }
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
                <i className="fa fa-check" onClick={EditData}></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="col-sm-6 offset-sm-3 ">
        <input
          type="text"
          placeholder="Enetr Your Name"
          className="form-control"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enetr Your Name"
          className="form-control"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enetr Your Name"
          className="form-control"
          value={mobile}
          onChange={(e) => {
            setMobile(e.target.value);
          }}
        />
        <button className="btn btn-primary form-control">Update Data</button>
      </div>
    </div>
  );
}
export default Table;
