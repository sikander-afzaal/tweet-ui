import { useState } from "react";
import { Link } from "react-router-dom";
import "./Tweet.css";

const Tweet = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectAllCom, setSelectAllCom] = useState(false);
  const [addModal, setAddModal] = useState(false);
  return (
    <div className="tweet">
      {addModal && <AddModal setModal={setAddModal} />}
      <Link to={"/"} className="back-btn">
        Back
      </Link>
      <Link to={"/"} className="next-btn">
        Next
      </Link>
      <div className="tweet-col">
        <h2>Twitter Accounts</h2>
        <div className="add-grid">
          <div className="add-div" onClick={() => setAddModal(true)}>
            <p>Add</p>
          </div>
          <div className="add-div" onClick={() => setAddModal(true)}>
            <p>Add</p>
          </div>
          <div className="add-div" onClick={() => setAddModal(true)}>
            <p>Add</p>
          </div>
          <div className="add-div" onClick={() => setAddModal(true)}>
            <p>Add</p>
          </div>
          <div className="add-div" onClick={() => setAddModal(true)}>
            <p>Add</p>
          </div>
          <div className="add-div" onClick={() => setAddModal(true)}>
            <p>Add</p>
          </div>
          <div className="add-div" onClick={() => setAddModal(true)}>
            <p>Add</p>
          </div>
          <div className="add-div" onClick={() => setAddModal(true)}>
            <p>Add</p>
          </div>
          <div className="add-div" onClick={() => setAddModal(true)}>
            <p>Add</p>
          </div>
          <div className="add-div" onClick={() => setAddModal(true)}>
            <p>Add</p>
          </div>
          <div className="add-div" onClick={() => setAddModal(true)}>
            <p>Add</p>
          </div>
          <div className="add-div" onClick={() => setAddModal(true)}>
            <p>Add</p>
          </div>
          <div className="add-div" onClick={() => setAddModal(true)}>
            <p>Add</p>
          </div>
          <div className="add-div" onClick={() => setAddModal(true)}>
            <p>Add</p>
          </div>
          <div className="add-div" onClick={() => setAddModal(true)}>
            <p>Add</p>
          </div>
          <div className="add-div" onClick={() => setAddModal(true)}>
            <p>Add</p>
          </div>
        </div>
      </div>
      <div className="tweet-col">
        <h2>Target Influencer</h2>
        <div className="target-col">
          <TargetRow selectAll={selectAll} />
          <TargetRow selectAll={selectAll} />
          <TargetRow selectAll={selectAll} />
          <TargetRow selectAll={selectAll} />
          <TargetRow selectAll={selectAll} />
          <TargetRow selectAll={selectAll} />
          <TargetRow selectAll={selectAll} />
          <div className="select-all">
            <p>Select All</p>
            <div
              onClick={() => setSelectAll((prev) => !prev)}
              className="check"
            >
              {selectAll ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="tweet-col">
        <h2>Random Comment</h2>
        <div className="target-col">
          {Array(18)
            .fill(false)
            .map((elem, idx) => {
              return (
                <RandomComment
                  key={idx + "random"}
                  idx={idx}
                  selectAllCom={selectAllCom}
                />
              );
            })}
          <div className="select-all">
            <p>Select All</p>
            <div
              onClick={() => setSelectAllCom((prev) => !prev)}
              className="check"
            >
              {selectAllCom ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="tweet-col">
        <h2>Hashtags</h2>
        <textarea></textarea>
        <div className="upload">
          <label htmlFor="upload">Upload Image</label>
          <input type="file" id="upload" />
        </div>
        <button className="tweet-btn">Tweet</button>
      </div>
    </div>
  );
};

export default Tweet;

const TargetRow = ({ selectAll }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="target-row">
      <p>@Who?</p>
      <input type="text" />
      <div onClick={() => setToggle((prev) => !prev)} className="check">
        {toggle || selectAll ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
const RandomComment = ({ selectAllCom, idx }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="target-row">
      <p>{idx}</p>
      <input type="text" />
      <div onClick={() => setToggle((prev) => !prev)} className="check">
        {toggle || selectAllCom ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const AddModal = ({ setModal }) => {
  return (
    <>
      <div onClick={() => setModal(false)} className="overlay"></div>
      <form className="add-modal">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="black"
          onClick={() => setModal(false)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>

        <h2>Add Account</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button
          onClick={(e) => {
            e.preventDefault();
            setModal(false);
          }}
        >
          Add
        </button>
      </form>
    </>
  );
};
