function UserInfo() {
  const name = localStorage.getItem("Name");
  const email = localStorage.getItem("Email");
  const mobile = localStorage.getItem("Mobile");
  return (
    <>
      <div>
        <p>Your Name:{name}</p>
        <p>Your Email:{email}</p>
        <p>Your Mobile:{mobile}</p>
      </div>
    </>
  );
}
export default UserInfo;
