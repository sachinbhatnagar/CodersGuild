import React from "react";

function Work() {
  return (
    <div className="work-container">
      {/* Nav section */}
      <div>
        <div className="logo-container">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
              alt=""
            />
          </div>
          <div className="burger-container">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828859.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Nav section */}

      {/* Patient Container */}

      <div className="patient-container ">
        {/* column 1 */}
        <div>
          <h5 className="word-h2">Patient Details</h5>
          <div className="bg-white padding height">
            <h5 className="work-name">
              Lloyd Rivers<bdi> (Male, 38yrs)</bdi>
            </h5>

            <span className="incident-spans">
              NHS NO: <bdi>1235</bdi>
            </span>
            <span className="incident-spans">
              PAS ID: <bdi>1234</bdi>
            </span>
          </div>
        </div>

        {/* column 2 */}
        <div>
          <h5 className="word-h2 hide-this">Patient Details</h5>
          <div className="bg-white padding height">
            <div className="health-history">
              <div className="health-history-image-text">
                <img
                  width="30px"
                  src="https://cdn-icons-png.flaticon.com/512/898/898655.png"
                  alt=""
                />
                <div
                  className="orange-text"
                  style={{ fontSize: "12px", marginLeft: "6px" }}
                >
                  Health History
                </div>
              </div>

              <div className="grey-text flex">
                <span>More</span>
                <img
                  style={{ marginLeft: "5px" }}
                  width="10px"
                  src="https://cdn-icons.flaticon.com/png/512/2985/premium/2985179.png?token=exp=1650541818~hmac=0261ba1fbf43539c06e9dcb5d25b44f8"
                  alt=""
                />
              </div>
            </div>
            <div className="bg-white allergy">
              <div>
                <div className="border-right">
                  <span className="green-text">Allergies</span>
                  <span className="numbers">3</span>
                </div>
              </div>

              <div>
                <div className="border-right">
                  <span className="red-text">Alerts</span>
                  <span className="numbers">1</span>
                </div>
              </div>

              <div>
                <div>
                  <span className="blue-text">Conditions</span>
                  <span className="numbers">7</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h5 className="word-h2">Incident Information</h5>
          <div className="bg-white padding height">
            <span className="incident-spans">
              Complaint : <bdi>Facial injury</bdi>
            </span>
            <span className="incident-spans">
              Triage category : <bdi>Urgent</bdi>
            </span>
            <span className="incident-spans">
              Last seen by : <bdi>Dr Smith</bdi>
            </span>
            <div className="arrived">
              <bdi>Arrived 30 mins ago</bdi>
            </div>
          </div>
        </div>
      </div>

      {/* Patient Container */}
    </div>
  );
}

export default Work;
