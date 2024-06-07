import React, { useState } from "react";

const Profile = () => {

    const[data, setData] = useState([]);
  const AcotorsData = [
    {
      id: "1",
      Name: "Amitabh Bachchan",
      img:"https://m.media-amazon.com/images/M/MV5BNTk1OTUxMzIzMV5BMl5BanBnXkFtZTcwMzMxMjI0Nw@@._V1_.jpg",
      About:
        "Amitabh Bachchan is an Indian actor who works in Hindi cinema. With a cinematic career spanning over five decades, he has played pivotal roles in over 200 films            ",
    },
    {
      id: "2",
      Name: "Shah Rukh Khan",
      About:
        "Shah Rukh Khanis an Indian actor who works in Hindi cinema. With a cinematic career spanning over five decades, he has played pivotal roles in over 200 films            ",
    },
    {
      id: "3",
      Name: "Salman Khan",
      About:
        "Salman Khan is an Indian actor who works in Hindi cinema. With a cinematic career spanning over five decades, he has played pivotal roles in over 200 films            ",
    },
  ];

 
  return (
    <div className="h-screen bg-gray-300 sm:ml-56 ">

      {/* <div className="justify-center flex h-96 pt-10 ">
        <img
          src="https://m.media-amazon.com/images/M/MV5BNTk1OTUxMzIzMV5BMl5BanBnXkFtZTcwMzMxMjI0Nw@@._V1_.jpg"
          alt=""
          className="rounded shadow-xl "
        />
      </div>
      <div className="font-medium px-20 text-center pt-10">
        <h1 className="font-bold mb-5 text-2xl ">Amitabh Bachchan</h1>
        <p>
          Amitabh Bachchan is an Indian actor who works in Hindi cinema. With a
          cinematic career spanning over five decades, he has played pivotal
          roles in over 200 films.
        </p>
      </div> */}


      {

AcotorsData.map((curElem) => {

   return (

    <>
    <div className="justify-center flex h-96 pt-10 ">
        <img
          src={curElem.img}
          alt=""
          className="rounded shadow-xl "
        />
      </div>
      <div className="font-medium px-20 text-center pt-10">
        <h1 className="font-bold mb-5 text-2xl ">{curElem.Name}</h1>
        <p>
        {curElem.About}
        </p>
      </div>
      </>
   )
   
})
      }
    </div>
  );
};

export default Profile;
