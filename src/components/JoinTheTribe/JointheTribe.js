import React from 'react'

const JointheTribe = () => {
  return (
    <div className="join-tribe-button">
        <button>
          <img
            className="tribe-logo"
            src={process.env.PUBLIC_URL + "/JoinTribe.png"}
            alt="JoinTheTribe"
          />
          &nbsp; Join the Tribe{" "}
        </button>
      </div>
  )
}

export default JointheTribe