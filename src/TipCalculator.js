import React, { useState } from "react";
const styles = {
  container: {
    background: "#cfebfd",
    height: "1000vh",
  },
  button: {
    width: "50px",
    height: "30px",
    background: "#006666",
    color: "white",
    marginRight: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  UI: {
    display: "flex",
    background: "#fff",
    borderRadius: "16px",
    padding: "20px",
    maxWidth: "500px",
    margin: "0 auto",
  },
};
const TipCalculator = () => {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [tipCustom, setTipCustom] = useState(0);
  const [total, setTotal] = useState(0);
  const [person, setPerson] = useState(0);
  const [tipPerson, settipPesrson] = useState(0);

  const findBillAmount = (event) => {
    setBill(event.target.value);
  };
  const findTipAmount = (event) => {
    setTip(document.getElementById(event.target.id).innerHTML);
    setTotal((bill * tip) / 100);
  };
  const customTipAmount = (event) => {
    setTipCustom(event.target.value);
    setTotal((bill * tipCustom) / 100);
  };
  const checkPerson = (event) => {
    setPerson(event.target.value);
    settipPesrson((bill * tip) / 100 / event.target.value);
    if (!event.target.value) {
      settipPesrson(0);
    }
  };
  const reset = () => {
    setBill(0);
    setPerson(0);
    setTip(0);
    setTotal(0);
    settipPesrson(0);
  };

  return (
    <div className="container" style={styles.container}>
      <h1 style={{ textAlign: "center" }}>Tip calculator</h1>
      <div className="UI-calc" style={styles.UI}>
        <div className="UI-left" style={{ width: "50%" }}>
          <form>
            <div>
              <label>Bill</label>
            </div>
            <div>
              <input type="number" value={bill} onChange={findBillAmount} />
            </div>
            <div>
              <h3>Select tip%</h3>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <p
                  style={styles.button}
                  value={tip}
                  onClick={findTipAmount}
                  id="demo"
                >
                  5
                </p>
                <p
                  style={styles.button}
                  value={tip}
                  onClick={findTipAmount}
                  id="demo1"
                >
                  10
                </p>
                <p
                  style={styles.button}
                  value={tip}
                  onClick={findTipAmount}
                  id="demo2"
                >
                  15
                </p>
                <p
                  style={styles.button}
                  value={tip}
                  onClick={findTipAmount}
                  id="demo3"
                >
                  25
                </p>
                <p
                  style={styles.button}
                  value={tip}
                  onClick={findTipAmount}
                  id="demo4"
                >
                  50
                </p>
                <input
                  type="number"
                  style={{ width: "50px", height: "30px", marginTop: "12px" }}
                  value={tipCustom}
                  onChange={customTipAmount}
                  id="customDemo"
                />
              </div>
              <div>
                <lable>Number of person:</lable>
                <input type="number" value={person} onChange={checkPerson} />
              </div>
            </div>
          </form>
        </div>
        <div
          className="UI-right"
          style={{
            width: "50%",
            background: "#006666",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "87px",
              color: "#fff",
            }}
          >
            <p>Tip/Person</p>
            <span>{tipPerson}</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "50px",
              color: "#fff",
            }}
          >
            <p>TotalTipAmount</p>
            <span>{total}</span>
          </div>
          <div>
            <button
              style={{
                marginTop: "200px",
                width: "100%",
                background: "white",
                border: "0",
                color: "#000",
                cursor: "pointer",
              }}
              onClick={reset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TipCalculator;
