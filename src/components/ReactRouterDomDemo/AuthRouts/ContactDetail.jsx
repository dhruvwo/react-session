import { useNavigate, useParams } from "react-router-dom";

const ContactDetail = () => {
  const navigate = useNavigate();

  const params = useParams();
  console.log("params", params);
  return (
    <div>
      <h1>Contact Detail of {params.id}</h1>
      <button
        onClick={() => {
          navigate("/contact");
        }}
      >
        Go Back
      </button>
    </div>
  );
};

export default ContactDetail;
