import Description from "./Description";
import RequestForm from "./RequestForm";

const MainMerge = () => {
  return (
    <>
      <section className="request-quete">
        <div className="container">
          <div className="row align-items-center">

          
          <div className="col-lg-6">
            <Description />
            </div>
           
            <div className="col-lg-6">
              <RequestForm />
            </div>
         
          </div>
        </div>
      </section>
    </>
  );
};
export default MainMerge;
